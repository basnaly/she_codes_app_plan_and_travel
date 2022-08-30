import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import FilterTrips from "../FilterTrips";

const store = ({filterValue}) =>
	createStore(
		combineReducers({
			main: (
				state = {
                    filterValue
                },
				action
			) => state,
		})
	);

const MockFilterTrips = () => {

    return (
        <Provider store={store({filterValue: 'All'})}>
            <FilterTrips />
        </Provider>
    );
};

describe("FilterTrips", () => {

	it("should render filter button ", () => {
		render(<MockFilterTrips />);

		const filterButtonElement = screen.getByTestId("filter-button");
		expect(filterButtonElement).toBeInTheDocument();
        
	});

    it("should render a dropdown menu when click on filter button", () => {
		render(<MockFilterTrips />);

        const filterDropdownElement = screen.queryByTestId("filter-dropdown");
		expect(filterDropdownElement).not.toBeInTheDocument();

        const menuItemElement = screen.queryAllByRole("menuitem");
        expect(menuItemElement.length).toEqual(0);

		const filterButtonElement = screen.getByTestId("filter-button");
		expect(filterButtonElement).toBeInTheDocument();

        fireEvent.click(filterButtonElement);
        setTimeout(() => {
            expect(filterDropdownElement).toBeInTheDocument();
            expect(menuItemElement.length).toEqual(4);
            expect(menuItemElement).toHaveClass("Mui-selected");
            expect(menuItemElement).toHaveStyle("backgroundColor: palegoldenrod");
        }, 500) 
	});
});