import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import {
	CityStyled,
	LinkStyled,
	PalmStyled,
	PreLoginStyled,
	TabContentBox,
} from "../styles/MuiStyles";
import {
	ChangePreLoginTripCity,
	ChangePreLoginTripCountry,
	ChangePreLoginTripDateFrom,
	ChangePreLoginTripDateTo,
} from "../Actions/PlanTravelAction";
import { Autocomplete } from "@mui/material";
import { COUNTRY_NAMES } from "../constants";
import AutocompleteCountry from "./AddTrip/AutocompleteCountry";
import AutocompleteCity from "./AddTrip/AutocompleteCity";

const PreLoginScreen = () => {

	const city = useSelector((state) => state?.main?.preLoginTrip?.city);
    const country = useSelector((state) => state?.main?.preLoginTrip?.country);

	const from = useSelector((state) => state?.main?.preLoginTrip?.dateFrom);
	const to = useSelector((state) => state?.main?.preLoginTrip?.dateTo);
	const userId = useSelector((state) => state?.auth?.userId);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		if (userId) {
			navigate("/home");
		}
	}, [userId]);

	const handleChangeFrom = newFrom => dispatch(ChangePreLoginTripDateFrom(newFrom));
	const handleChangeTo = newTo => dispatch(ChangePreLoginTripDateTo(newTo));

	const setCountry = newCountry => dispatch(ChangePreLoginTripCountry(newCountry));
	const setCity = newCity => dispatch(ChangePreLoginTripCity(newCity));


	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<TabContentBox
				boxShadow={24}
				p={4}
				className="d-flex align-items-center"
			>
				<PreLoginStyled className="d-flex flex-column align-items-center">
					<div className="d-flex align-items-center mb-2">
						Where would you like to travel?
					</div>

					<div className="d-flex align-items-center justify-content-evenly w-100 m-2">
						<AutocompleteCountry country={country} setCountry={setCountry}
							sx={{ backgroundColor: "none" }} 
							style={{ color: 'black', textShadow: '0.5px 0.5px white' }}
						/>

						<AutocompleteCity country={country} city={city} setCity={setCity}
							sx={{backgroundColor: "none" }} 
							style={{ color: 'black', textShadow: '0.5px 0.5px white' }}
						/>
					</div>

					<div className="d-flex align-items-center mt-2 mb-1">
						Approximate travel period:
					</div>
					<div className="d-flex align-items-center">
						<DesktopDatePicker
							className="m-2"
							OpenPickerButtonProps={{
								style: {
									color: "forestgreen",
									transform: "scale(1.3)",
								},
							}}
							label="Date from:"
							inputFormat="DD/MM/yyyy"
							value={from}
							onChange={handleChangeFrom}
							renderInput={(params) => (
								<TextField color="success" {...params} />
							)}
						/>
						<PalmStyled className="palm d-flex">🏝</PalmStyled>

						<DesktopDatePicker
							OpenPickerButtonProps={{
								style: {
									color: "forestgreen",
									transform: "scale(1.3)",
								},
							}}
							label="Date to:"
							inputFormat="DD/MM/yyyy"
							value={to}
							onChange={handleChangeTo}
							renderInput={(params) => (
								<TextField color="success" {...params} />
							)}
						/>
					</div>
					{!city ? (
						""
					) : (
						<LinkStyled
							className="m-2"
							href={`https://www.holiday-weather.com/${city.toLowerCase()}/averages/`}
							target="_blank"
						>
							Check the weather for
							<CityStyled className="city">{city}, {country}</CityStyled>
							on holiday-weather.com
						</LinkStyled>
					)}
					<div className="mt-3">
						Please register or login to start your trip!
					</div>
				</PreLoginStyled>
			</TabContentBox>
		</LocalizationProvider>
	);
};

export default PreLoginScreen;
