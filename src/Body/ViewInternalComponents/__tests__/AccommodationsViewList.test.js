import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { BrowserRouter as Router } from "react-router-dom";
import AccommodationsViewList from '../AccommodationsViewList';
import { ACCOMMODATION } from '../../../constants';

const store = () => createStore (
    combineReducers({
        main: (state = {
            trip: {
                city: "London"
            }
        }, action) => state
    })
)

const MockAccommodations = () => {
    return (
        <Router>
            <Provider store={store()}>
                <AccommodationsViewList accommodations={ACCOMMODATION} />
            </Provider>
        </Router>
    )
}

describe('AccommodationsViewList', () => {
    it ('should not render map', () => {
        render(<MockAccommodations />);

        const mapElement = screen.queryByTestId("map-element");
        expect(mapElement).not.toBeInTheDocument();
    });

    it ('should render map when click on accommodation', () => {
        render(<MockAccommodations />);

        const accommodationElement = screen.getByText(
            ACCOMMODATION[0].accommodation
        )
        expect(accommodationElement).toBeInTheDocument();
        fireEvent.click(accommodationElement)

        const mapElement = screen.queryByTestId("map-element");
        expect(mapElement).toBeInTheDocument();
    })
});