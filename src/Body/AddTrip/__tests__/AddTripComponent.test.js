import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { BrowserRouter as Router } from "react-router-dom";
import AddTripComponent from '../AddTripComponent';

const store = partialState => createStore(
    combineReducers({
        main: (state = {}, action) => state
    })
);

const MockAddTripComponent = () => {
    return (
        <Router>
            <Provider store={store({})}>
                <AddTripComponent />
            </Provider>
        </Router>
    )
}

describe('AddTripComponent', () => {

    it('should render add country and city input elements', () => {
        render(<MockAddTripComponent />);

        const countryInputElement = screen.getByTestId("country-input");
        expect(countryInputElement).toBeInTheDocument();

        const cityInputElement = screen.getByTestId("city-input");
        expect(cityInputElement).toBeInTheDocument();
    });

    it('should be able to select country and city in their inputs', () => {
        render(<MockAddTripComponent />);

        const countryInputElement = screen.getByLabelText(/Country/i);
        fireEvent.click(countryInputElement)
        setTimeout(()=>{
            const country = screen.getByText(/United Kingdom/i)
            expect(country).toBeInTheDocument();
            fireEvent.click(country)
            setTimeout(() => {
                const cityInputElement = screen.getByLabelText(/City/i);
                fireEvent.click(cityInputElement)
                setTimeout(() => {
                    const city = screen.getByText(/London/i)
                    expect(city).toBeInTheDocument();
                    fireEvent.click(city)
                    const addButtonElement = screen.getByTestId("add-button-element");
                    expect(addButtonElement).toBeEnabled();
                }, 500)  
            }, 1000)
        }, 500)
    });

    it('should render add button element', () => {
        render(<MockAddTripComponent />);
        
        const addButtonElement = screen.getByTestId("add-button-element");
        expect(addButtonElement).toBeInTheDocument();
    });

    it('should disable button when city input is empty', () => {
        render(<MockAddTripComponent />);
        
        const cityInputElement = screen.getByLabelText(/City/i);
        fireEvent.click(cityInputElement)
        fireEvent.change(cityInputElement, { target: { value: "" } });

        const addButtonElement = screen.getByTestId("add-button-element");
        expect(addButtonElement).toBeDisabled();
    });
});