import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { BrowserRouter as Router } from "react-router-dom";
import AuthenticationForm from '../AuthenticationForm';

const store = partialState => createStore(
    combineReducers({
        auth: (state = {
            userId: '',
            email: '',
            authError: '',
            isAuthLoading: '',
        }, action) => state
    })
);

const MockAuthenticationForm = (props) => {
    return (
        <Router>
            <Provider store={store({})}>
                <AuthenticationForm title={ props.title } />
            </Provider>
        </Router>
    )
}

describe('AuthenticationForm', () => {

    it('should render AuthenticationForm', () => {
        render(
            <MockAuthenticationForm title="register" />
        );
        const TabContentBoxElement = screen.getByTestId("form-container");
        expect(TabContentBoxElement).toBeInTheDocument();
    });

    it('should render email input element', () => {
        render(
            <MockAuthenticationForm />
        );
        const emailInputElement = screen.getByLabelText(/Email/i);
        expect(emailInputElement).toBeInTheDocument();
    })

    it('should be able to type email into input', () => {
        render(
            <MockAuthenticationForm />
        );
        const emailInputElement = screen.getByLabelText(/Email/i);
        fireEvent.click(emailInputElement)
        fireEvent.change(emailInputElement, { target: { value: 'rty@xcv.com' } })
        expect(emailInputElement.value).toBe('rty@xcv.com');
    });

    it('should render password input element', () => {
        render(
            <MockAuthenticationForm />
        );
        const passwordInputElement = screen.getByTestId("password-container");;
        expect(passwordInputElement).toBeInTheDocument();
    })

    it('should render submit button element', () => {
        render(
            <MockAuthenticationForm />
        );
        const submitButtonElement = screen.getByTestId("submit-button");
        expect(submitButtonElement).toBeInTheDocument();
    })
    
    it('should render cancel button element', () => {
        render(
            <MockAuthenticationForm />
        );
        const cancelButtonElement = screen.getByTestId("cancel-button");
        expect(cancelButtonElement).toBeInTheDocument();
    })

});