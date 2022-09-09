import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";

import { COUNTRY_NAMES } from "../../constants";


const AutocompleteCountry = ( { country, setCountry, sx={}, style={} } ) => {

	const [countryText, setCountryText] = useState("");

	return (
		<div className="mx-3">
			<Autocomplete
				options={COUNTRY_NAMES}
				sx={{
					width: 250,
					backgroundColor: "#ffffff60",
					...sx
				}}
                value={country}
				onChange={(_, selectedCountry) => setCountry(selectedCountry)} // select the country from list
				renderInput={(params) => (


					<TextField
						{...params}
						
						autoFocus
						inputProps={{
							...params.inputProps, "data-testid": "country-input",
							style: {
								fontSize: "24px",
								textShadow: "0.5px 0.5px white",
								...style
							},
						}}
						label="Country"
						id="country-add-trip"
						size="small"
						type="text"
						color="success"
                        value={countryText}
						onChange={(e) => setCountryText(e.target.value)} // filter options
					/>
				)}
			/>
		</div>
	);
};

export default AutocompleteCountry;
