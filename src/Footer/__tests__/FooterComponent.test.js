import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'; 
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux';
import FooterComponent from "../FooterComponent";

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

const MockFooterComponent = ({userId}) => {
	return (
		<Router>
			<Provider store={store({userId})}>
				<FooterComponent />
			</Provider>
		</Router>
	);
};

describe("FooterComponent", () => {
	it("should render link element", () => {
		render(<MockFooterComponent />);

		const linkElement = screen.getByTestId("link-element");
		expect(linkElement).toBeInTheDocument();
	});

    it("should render my icon element", () => {
		render(<MockFooterComponent />);

		const linkElement = screen.getByTestId("my-icon-element");
		expect(linkElement).toBeInTheDocument();
    });

	it("should render contact form element", () => {
		render(<MockFooterComponent />);

		const contactFormElement = screen.getByTestId("contact-form-dialog");
		expect(contactFormElement).toBeInTheDocument();
    });
});