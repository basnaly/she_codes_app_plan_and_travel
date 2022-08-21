import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux'; 
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux';
import ChangePasswordForm from "../ChangePasswordForm";
import DeleteAccount from "../DeleteAccount";

const store = () =>
	createStore(
		combineReducers({
			auth: (state = {}, action) => state,
		})
	);

const MockDeleteAccount = () => {

    return (
        <Provider store={store()}>
            <DeleteAccount />
        </Provider>
    );
};

describe("DeleteAccount", () => {
	
	it("should render delete account button element", () => {
		render(<MockDeleteAccount />);

		const deleteAccountButton = screen.getByTestId("delete-account-button");
		expect(deleteAccountButton).toBeInTheDocument();
	});

    it("should render delete dialog when clicking on delete account", () => {
		render(<MockDeleteAccount />);

		const deleteDialogElement = screen.queryByTestId("delete-dialog-element");
		expect(deleteDialogElement.classList).toContain("MuiModal-hidden");

        const deleteAccountButton = screen.getByTestId("delete-account-button");
		expect(deleteAccountButton).toBeInTheDocument();
        fireEvent.click(deleteAccountButton);
        setTimeout(() => {
            expect(deleteDialogElement.classList).not.toContain("MuiModal-hidden");
        }, 500)
        
	});

    it("should render submit and cancel buttons", () => {
        render(<MockDeleteAccount />);
        
        const deleteButtonElement = screen.getByTestId("delete-button");
		expect(deleteButtonElement).toBeInTheDocument();

        const cancelButtonElement = screen.getByTestId("cancel-button");
		expect(cancelButtonElement).toBeInTheDocument(); 
    });
});
