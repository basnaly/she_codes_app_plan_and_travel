import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ChangePreLoginTripCity, ChangePreLoginTripCountry } from "../../Actions/PlanTravelAction";

import AutocompleteCountry from "../AddTrip/AutocompleteCountry";
import AutocompleteCity from "../AddTrip/AutocompleteCity";

const PrelLoginTripComponent = () => {

    const city = useSelector((state) => state?.main?.preLoginTrip?.city);
    const country = useSelector((state) => state?.main?.preLoginTrip?.country);

    const dispatch = useDispatch();

    const setCountry = newCountry => dispatch(ChangePreLoginTripCountry(newCountry));
	const setCity = newCity => dispatch(ChangePreLoginTripCity(newCity));

	return (
		<React.Fragment>
			<div className="d-flex align-items-center mb-2">
				Where would you like to travel?
			</div>

			<div className="d-flex align-items-center justify-content-evenly w-100 m-2">
				<AutocompleteCountry
					country={country}
					setCountry={setCountry}
					sx={{ backgroundColor: "none" }}
					style={{ color: "black", textShadow: "0.5px 0.5px white" }}
				/>

				<AutocompleteCity
					country={country}
					city={city}
					setCity={setCity}
					sx={{ backgroundColor: "none" }}
					style={{ color: "black", textShadow: "0.5px 0.5px white" }}
				/>
			</div>
		</React.Fragment>
	);
};

export default PrelLoginTripComponent;
