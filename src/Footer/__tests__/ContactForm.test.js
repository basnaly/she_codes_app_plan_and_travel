import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux'; 
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux';
import ContactForm from "../ContactForm";

const store = ({userId, username, email}) =>
	createStore(
		combineReducers({
			auth: (
				state = {
					userId: userId,
                    username: username,
					email: email,
					authError: "",
					isAuthLoading: "",
				}, action) => state,
		})
);

const MockContactForm = ({userId, username, email}) => {

    return (
        <Provider store={store({userId, username, email})}>
            <ContactForm />
        </Provider>
    );
};

describe("ContactForm", () => {
	
	it("should render change contact us button element", () => {
		render(<MockContactForm />);

		const contactUsButton = screen.getByTestId("contact-us-button");
		expect(contactUsButton).toBeInTheDocument();
	});

    it("should render dialog form when clicking on contact us button", () => {
		render(<MockContactForm />);

		const contactFormDialog = screen.getByTestId("contact-form-dialog");
		expect(contactFormDialog.classList).toContain("MuiModal-hidden");

        const contactUsButton = screen.getByTestId("contact-us-button");
		expect(contactUsButton).toBeInTheDocument();
        fireEvent.click(contactUsButton);
        setTimeout(() => {
            expect(contactFormDialog.classList).not.toContain("MuiModal-hidden");
        }, 500)
        
	});

    it("should render submit and cancel buttons", () => {
        render(<MockContactForm />);
        
        const submitButtonElement = screen.queryByTestId("submit-button");
		expect(submitButtonElement).toBeInTheDocument();

        const cancelButtonElement = screen.queryByTestId("cancel-button");
		expect(cancelButtonElement).toBeInTheDocument(); 
    });

    it("should render name input of existing user when dialog open", () => {
		render(<MockContactForm userId={"63gsi365"} username={"Henry"}/>);

        const contactUsButton = screen.getByTestId("contact-us-button");
        fireEvent.click(contactUsButton);

        const nameInput = screen.getByTestId("name-input");
		expect(nameInput).toBeInTheDocument();
		expect(nameInput.value).toBe("Henry");
    });

    it("should render name input of not existing user when dialog open", () => {
		render(<MockContactForm />);

        const contactUsButton = screen.getByTestId("contact-us-button");
        fireEvent.click(contactUsButton);

        const nameInput = screen.getByTestId("name-input");
        fireEvent.click(nameInput);
	    fireEvent.change(nameInput, {target: { value: "Max" },});
		expect(nameInput).toBeInTheDocument();
		expect(nameInput.value).toBe("Max");
    });

    it("should render email input of existing user when dialog open", () => {
		render(<MockContactForm userId={"63gsi365"} email={"dfg@qwe.com"}/>);

        const contactUsButton = screen.getByTestId("contact-us-button");
        fireEvent.click(contactUsButton);

        const emailInput = screen.getByTestId("email-input");
		expect(emailInput).toBeInTheDocument();
		expect(emailInput.value).toBe("dfg@qwe.com");
    });

    it("should render email input of not existing user when dialog open", () => {
		render(<MockContactForm />);

        const contactUsButton = screen.getByTestId("contact-us-button");
        fireEvent.click(contactUsButton);

        const emailInput = screen.getByTestId("email-input");
        fireEvent.click(emailInput);
	    fireEvent.change(emailInput, {target: { value: "abc@1zq.com" },});
		expect(emailInput).toBeInTheDocument();
		expect(emailInput.value).toBe("abc@1zq.com");
    });

    it("should render subject input when dialog open", () => {
		render(<MockContactForm />);

        const contactUsButton = screen.getByTestId("contact-us-button");
        fireEvent.click(contactUsButton);

        const subjectInput = screen.getByRole("combobox");
		expect(subjectInput).toBeInTheDocument();
		expect(subjectInput.value).toBe("General");
    });

    it("should render textarea input when dialog open", () => {
		render(<MockContactForm />);

        const contactUsButton = screen.getByTestId("contact-us-button");
        fireEvent.click(contactUsButton);

        const textareaElement = screen.getByTestId("textarea-element");
        fireEvent.click(textareaElement);
	    fireEvent.change(textareaElement, 
            {target: { value: "I can't register!" },});
		expect(textareaElement).toBeInTheDocument();
		expect(textareaElement.value).toBe("I can't register!");
    });

});