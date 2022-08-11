import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { BrowserRouter as Router } from "react-router-dom";
import AddCity from '../AddCity';

const store = partialState => createStore(
    combineReducers({
        main: (state = {}, action) => state
    })
);

const MockAddCity = () => {
    return (
        <Router>
            <Provider store={store({})}>
                <AddCity />
            </Provider>
        </Router>
    )
}

describe('AddCity', () => {

    it('should render add input element', () => {
        render(<MockAddCity />);

        const addInputElement = screen.getByTestId("add-input-element");
        expect(addInputElement).toBeInTheDocument();
    });

    it('should be able to type city into input', () => {
        render(<MockAddCity />);
        
        const cityInputElement = screen.getByLabelText(/City/i);
        fireEvent.click(cityInputElement)
        fireEvent.change(cityInputElement, { target: { value: "London" } });
        expect(cityInputElement.value).toBe("London");

        const addButtonElement = screen.getByTestId("add-button-element");
        expect(addButtonElement).toBeEnabled();
    });

    it('should render add button element', () => {
        render(<MockAddCity />);
        
        const addButtonElement = screen.getByTestId("add-button-element");
        expect(addButtonElement).toBeInTheDocument();
    });

    it('should disable button when input empty', () => {
        render(<MockAddCity />);
        
        const cityInputElement = screen.getByLabelText(/City/i);
        fireEvent.click(cityInputElement)
        fireEvent.change(cityInputElement, { target: { value: "" } });

        const addButtonElement = screen.getByTestId("add-button-element");
        expect(addButtonElement).toBeDisabled();
    });
});