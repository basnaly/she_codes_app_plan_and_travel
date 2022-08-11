import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { BrowserRouter as Router } from "react-router-dom";
import DeleteDialog from '../DeleteDialog';

const store = partialState => createStore(
    combineReducers({
        main: (state = {}, action) => state
    })
);

const MockDeleteDialog = ({el}) => {
    return (
        <Router>
            <Provider store={store({})}>
                <DeleteDialog el = { el }/>
            </Provider>
        </Router>
    )
}

describe('DeleteDialog', () => {

    it('should render delete dialog', () => {
        render(<MockDeleteDialog el = {{city: 'Nice', id: '62312j3bss'}} />);

        const deleteDialogElement = screen.getByTestId("delete-dialog-element");
        expect(deleteDialogElement.classList).toContain("MuiModal-hidden");

        const deleteButtonElement = screen.getByTestId("delete-button-element");
        expect(deleteButtonElement).toBeInTheDocument();
        fireEvent.click(deleteButtonElement);
        expect(deleteDialogElement.classList).not.toContain("MuiModal-hidden");

        const cancelButtonElement = screen.getByTestId("cancel-button-element");
        expect(cancelButtonElement).toBeInTheDocument(); 
        fireEvent.click(cancelButtonElement);
        setTimeout(() => {
            expect(deleteDialogElement.classList).toContain("MuiModal-hidden");
        }, 500)
    });

});