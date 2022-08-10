import { render, screen } from "@testing-library/react";
import FooterComponent from "../FooterComponent";

describe("FooterComponent", () => {
	it("should render link element", () => {
		render(<FooterComponent />);

		const linkElement = screen.getByTestId("link-element");
		expect(linkElement).toBeInTheDocument();
	});

    it("should render my icon element", () => {
		render(<FooterComponent />);

		const linkElement = screen.getByTestId("my-icon-element");
		expect(linkElement).toBeInTheDocument();
    });
});