import React, { useEffect, useState } from "react";

import axios from "axios";

import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";

import { filterOptions } from "../../constants";

const requestURL = "https://countriesnow.space/api/v0.1/countries/cities";

const AutocompleteCity = ({country, city, setCity, sx={}, style={} }) => {

	const [listCities, setListCities] = useState([]);

	const [cityText, setCityText] = useState("");
	const [loading, setLoading] = useState(false);

	const requestCities = async (text) => {
		if (!text) {
			setListCities([]);
			setCity("");
			return;
		}
		setLoading(true);

		try {
			const result = await axios.post(requestURL, { country: text });

			const listCitiesofCountry = result?.data?.data;
			setListCities(listCitiesofCountry);

		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {

		requestCities(country)

	}, [country])

	return (
		<div className="mx-3">
			<Autocomplete
				filterOptions={filterOptions}
				options={listCities}
				noOptionsText="Please select country first"
				sx={{
					width: 250,
					backgroundColor: "#ffffff60",
					...sx
				}}
				value={city}
				onChange={(_, text) => setCity(text)} // select the city from list
				renderInput={(params) => (

					<TextField
						{...params}
						autoFocus
						inputProps={{
							...params.inputProps, "data-testid": "city-input",
							style: {
								fontSize: "24px",
								textShadow: "0.5px 0.5px white",
								...style
							},
						}}
						label="City"
						id="city-add-trip"
						size="small"
						type="text"
						color="success"
						value={cityText}
						onChange={(e) => setCityText(e.target.value)}
					/>
				)}
			/>
		</div>
	);
};

export default AutocompleteCity;
