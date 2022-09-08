import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { BlackButton } from "../../styles/MuiStyles";

import { AddNewTrip } from "../../Actions/PlanTravelAction";
import SortTrips from "./SortTrips";

import AutocompleteCountry from "./AutocompleteCountry";
import AutocompleteCity from "./AutocompleteCity";

const AddTripComponent = ({ setSortUp, sortUp }) => {

	const [country, setCountry] = useState("");
	const [city, setCity] = useState("");

	const dispatch = useDispatch();

	const AddTripData = () => {
		dispatch(AddNewTrip(city, country));
		setCity("");
		setCountry("");
	};

	const sortTrips = () => {
		setSortUp((prev) => !prev);
	};

	return (
		<div className="d-flex align-items-center justify-content-evenly m-3">
			<SortTrips sortUp={sortUp} onClick={sortTrips} />

			<div className="mx-3">
				<AutocompleteCountry country={country} setCountry={setCountry} />
			</div>

			<div className="mx-3">
				<AutocompleteCity country={country} city={city} setCity={setCity}/>
			</div>

			<BlackButton
				data-testid="add-button-element"
				variant={"outlined"}
				className="ms-2"
				disabled={!city || !country}
				onClick={AddTripData}
			>
				Add new trip
			</BlackButton>
		</div>
	);
};

export default AddTripComponent;
