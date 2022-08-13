import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'; 
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import HeaderComponent from "../HeaderComponent";

const store = ({userId = ''}) =>
	createStore(
		combineReducers({
			auth: (
				state = {
					userId: userId,
					email: "",
					authError: "",
					isAuthLoading: "",
				}, action) => state,
		})
	);

const MockHeaderComponent = ({userId}) => {
	return (
		<Router>
			<Provider store={store({userId})}>
				<HeaderComponent />
			</Provider>
		</Router>
	);
};

describe("HeaderComponent", () => {
	it("should render icon element", () => {
		render(<MockHeaderComponent />);

		const iconElement = screen.getByTestId("icon-element");
		expect(iconElement).toBeInTheDocument();
	});

    it("should render title link element", () => {
		render(<MockHeaderComponent />);

		const titleLinkElement = screen.getByTestId("title-link");
		expect(titleLinkElement).toBeInTheDocument();
	});

    it("should render register and login buttons", () => {
		render(<MockHeaderComponent />);

		const registerElement = screen.getByTestId("register-element");
		expect(registerElement).toBeInTheDocument();

        const loginElement = screen.getByTestId("login-element");
		expect(loginElement).toBeInTheDocument();

        const logoutElement = screen.queryByTestId("logout-element");
		expect(logoutElement).not.toBeInTheDocument();
	});

	it ("should render user icon", () => {
		render(<MockHeaderComponent userId={"ab1268re"}/>);

		const userIconElement = screen.getByTestId("user-icon");
		expect(userIconElement).toBeInTheDocument();

    	const registerElement = screen.queryByTestId("register-element");
		expect(registerElement).not.toBeInTheDocument();

    	const loginElement = screen.queryByTestId("login-element");
		expect(loginElement).not.toBeInTheDocument();
	});
});
