import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux'; 
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux';
import ChangePasswordForm from "../ChangePasswordForm";

const store = () =>
	createStore(
		combineReducers({
			auth: (state = {}, action) => state,
		})
	);

const MockChangePassword = () => {

    return (
        <Provider store={store()}>
            <ChangePasswordForm />
        </Provider>
    );
};

describe("ChangePasswordForm", () => {
	
	it("should render change password button element", () => {
		render(<MockChangePassword />);

		const changePasswordButton = screen.getByTestId("change-password-button");
		expect(changePasswordButton).toBeInTheDocument();
	});

    it("should render dialog form when clicking on change password button", () => {
		render(<MockChangePassword />);

		const changePasswordDialog = screen.getByTestId("password-dialog-element");
		expect(changePasswordDialog.classList).toContain("MuiModal-hidden");

        const changePasswordButton = screen.getByTestId("change-password-button");
		expect(changePasswordButton).toBeInTheDocument();
        fireEvent.click(changePasswordButton);
        setTimeout(() => {
            expect(changePasswordDialog.classList).not.toContain("MuiModal-hidden");
        }, 500)
        
	});

    it("should render submit and cancel buttons", () => {
        render(<MockChangePassword />);
        
        const submitButtonElement = screen.queryByTestId("submit-button");
		expect(submitButtonElement).toBeInTheDocument();

        const cancelButtonElement = screen.queryByTestId("cancel-button");
		expect(cancelButtonElement).toBeInTheDocument(); 
    });

    it("should render old password inputs when dialog open", () => {
		render(<MockChangePassword />);

        const changePasswordButton = screen.getByTestId("change-password-button");
        fireEvent.click(changePasswordButton);

        const oldPasswordInput = screen.getByTestId("old-password-input");
		expect(oldPasswordInput).toBeInTheDocument();
        fireEvent.click(oldPasswordInput);
		fireEvent.change(oldPasswordInput, {target: { value: "90tZ2%ag" },});
		expect(oldPasswordInput.value).toBe("90tZ2%ag");
        expect(oldPasswordInput.type).toBe("password"); // type of input: ****...

    });

    it("should render new password inputs when dialog open", () => {
		render(<MockChangePassword />);

        const changePasswordButton = screen.getByTestId("change-password-button");
        fireEvent.click(changePasswordButton);

        const newPasswordInput = screen.getByTestId("new-password-input");
		expect(newPasswordInput).toBeInTheDocument();
        fireEvent.click(newPasswordInput);
		fireEvent.change(newPasswordInput, {target: { value: "1R-a^g_0f" },});
		expect(newPasswordInput.value).toBe("1R-a^g_0f");
        expect(newPasswordInput.type).toBe("password"); // type of input: ****...

    });

});