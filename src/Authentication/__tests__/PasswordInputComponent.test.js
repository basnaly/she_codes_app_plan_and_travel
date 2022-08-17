import { render, screen, fireEvent } from "@testing-library/react";
import { useState } from "react";
import PasswordInputComponent from "../PasswordInputComponent";

const MockPasswordInputComponent = () => {

	const [password, setPassword] = useState(''); //local state for test

	return (
		<PasswordInputComponent
			password={password}
			setPassword={setPassword}
		/>
	);
};

describe("PasswordInputComponent", () => {

	it("should render password input element", () => {
		render(<MockPasswordInputComponent />);
		const passwordInputElement = screen.getByTestId("password-container");
		expect(passwordInputElement).toBeInTheDocument();
	});

	it("should be able to type password into input", () => {
		render(<MockPasswordInputComponent />);
		const passwordInputElement = screen.getByTestId("password-input");
		fireEvent.click(passwordInputElement);
		fireEvent.change(passwordInputElement, {target: { value: "90tZ2%ag" },});
		expect(passwordInputElement.value).toBe("90tZ2%ag");
        expect(passwordInputElement.type).toBe("password"); // type of input: ****...
	});

    it('should be able to type password into input element and display as text', () => {
        render(<MockPasswordInputComponent />);
		const passwordInputElement = screen.getByTestId("password-input");
        expect(passwordInputElement.type).toBe("password"); // type of input: ****..

        const eyeElement = screen.getByTestId("password-text");
        fireEvent.click(eyeElement); // click eye
        expect(passwordInputElement.type).toBe("text"); 
        fireEvent.click(eyeElement); // click eye
        expect(passwordInputElement.type).toBe("password"); // type of input: ****..
    })
});
