import React, { useState } from "react";
import { useDispatch } from "react-redux";

import TextField from '@mui/material/TextField';
import { Autocomplete } from "@mui/material";

import { cityStyle, GreenButton } from "../styles/MuiStyles";

import { AddNewTrip } from "../Actions/PlanTravelAction";
import SortTrips from "./SortTrips";

import { COUNTRY_NAMES } from "../constants";

const AddTrip = ({setSortUp, sortUp}) => {   

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [countryText, setCountryText] = useState('');

    const dispatch = useDispatch()

    const AddTripData = () => {
        
        dispatch(AddNewTrip(city,country));
        setCity('');
        setCountry('');
    }

    const sortTrips = () => {
        setSortUp(prev => !prev)
    }

    return (
        <div className="d-flex align-items-center justify-content-evenly m-3">
            <SortTrips 
                sortUp={sortUp}
                onClick={sortTrips}/>

            <TextField 
                data-testid="add-input-element"
                autoFocus
                id="city-add-trip"
                sx={{ width: 250 }}
                label="City"
                variant="outlined" 
                color="success"
                size="small" 
                inputProps={{ style: {...cityStyle, backgroundColor:'#ffffff60' }}}
                value={city}
                className="ms-4 me-2"
                onChange={(e) => setCity(e.target.value)}
            />

            <Autocomplete
                options={COUNTRY_NAMES}
                sx={{ width: 250, backgroundColor:'#ffffff60', style: {...cityStyle} }}
                onChange={(_, text) => setCountry(text)} // select the country
                className="ms-4 me-3"
                renderInput={(params) => 

                    <TextField {...params}
                        autoFocus
                        inputProps={{ ...params.inputProps, style: cityStyle }}
                        label="Country"
                        id="country-add-trip"
                        size="small"
                        type="text"
                        color="success"
                        onChange={(e) => setCountryText(e.target.value)} // filter options
                    />
                }
            />

            <GreenButton
                data-testid="add-button-element"
                variant={'outlined'}
                className="ms-2"
                disabled={!city || !country}
                onClick={AddTripData}>
                Add new trip
            </GreenButton>
        </div>
    )
}

export default AddTrip;