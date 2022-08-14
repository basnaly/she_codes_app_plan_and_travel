import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import UserDropdown from "../UserDropdown";

const store = ({ username = "" }) =>
	createStore(
		combineReducers({
			auth: (
				state = {
					username: username,
				},
				action
			) => state,
		})
	);

const MockUserDropdown = ({ username }) => {

	return (
		<Provider store={store({ username })}>
			<UserDropdown />
		</Provider>
	);
};

describe("UserDropdown", () => {

	it("should render user icon element", () => {
		render(<MockUserDropdown />);

		const userIconElement = screen.getByTestId("user-icon");
		expect(userIconElement).toBeInTheDocument();
        
	});

    it("should render a dropdown menu when click on user icon element", () => {
		render(<MockUserDropdown />);

        const userDropdownElement = screen.queryByTestId("user-dropdown");
		expect(userDropdownElement).not.toBeInTheDocument();

		const userIconElement = screen.getByTestId("user-icon");
		expect(userIconElement).toBeInTheDocument();
        fireEvent.click(userIconElement);
        setTimeout(() => {
            expect(userDropdownElement).toBeInTheDocument();
        }, 500)     
	});

    it("should render user name and logout button in dropdown menu ", () => {
		render(<MockUserDropdown username={"alex"} />);

        const userIconElement = screen.getByTestId("user-icon");
		expect(userIconElement).toBeInTheDocument();
        fireEvent.click(userIconElement);
        setTimeout(() => {
            const userNameElement = screen.getByText(/alex/i);
		    expect(userNameElement).toBeInTheDocument();

            const logoutButtonElement = screen.getByText(/logout/i);
		    expect(logoutButtonElement).toBeInTheDocument();
        }, 500)       
	});
});
