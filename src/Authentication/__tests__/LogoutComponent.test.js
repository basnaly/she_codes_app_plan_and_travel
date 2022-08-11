import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux'; 
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { BrowserRouter as Router } from "react-router-dom";
import LogoutComponent from "../LogoutComponent";

const store = ({}) =>
	createStore(
		combineReducers({
			auth: (
				state = {
					userId: "",
					email: "",
					authError: "",
					isAuthLoading: "",
				}, action) => state,
		})
	);

const MockLogoutComponent = () => {
	return (
		<Router>
			<Provider store={store({})}>
				<LogoutComponent />
			</Provider>
		</Router>
	);
};


describe("LogoutComponent", () => {

	it("should render dialog when clicking on logout button", () => {
		render(<MockLogoutComponent />);

        const dialogLogoutElement = screen.getByTestId("dialog-logout-element");
        expect(dialogLogoutElement.classList).toContain('MuiModal-hidden');

		const logoutElement = screen.getByTestId("logout-element");
		expect(logoutElement).toBeInTheDocument();
        fireEvent.click(logoutElement);
		expect(dialogLogoutElement.classList).not.toContain('MuiModal-hidden');

        const cancelElement = screen.getByTestId("cancel-element");
        expect(cancelElement).toBeInTheDocument();
        fireEvent.click(cancelElement);
        setTimeout(() => {
            expect(dialogLogoutElement.classList).toContain('MuiModal-hidden');
        }, 500)       
	});
});