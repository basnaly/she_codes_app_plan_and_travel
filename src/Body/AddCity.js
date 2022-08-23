import React, { useState } from "react";
import { useDispatch } from "react-redux";

import TextField from '@mui/material/TextField';

import { cityStyle, GreenButton } from "../styles/MuiStyles";

import { AddNewTrip } from "../Actions/PlanTravelAction";
import SortCities from "./SortCities";


const AddCity = ({setSortUp, sortUp}) => {

    const [city, setCity] = useState('');

    const dispatch = useDispatch()

    const AddTrip = () => {
        
        dispatch(AddNewTrip(city));
        setCity('');
    }

    const sortTrips = () => {
        setSortUp(prev => !prev)
    }

    return (
        <div className="d-flex align-items-center justify-content-evenly m-3">
            <SortCities 
                sortUp={sortUp}
                onClick={sortTrips}/>

            <TextField 
                data-testid="add-input-element"
                id="outlined-size-small"
                size="small" 
                label="City"
                inputProps={{ style: {...cityStyle, backgroundColor:'#ffffff60' }}}
                className="ms-4 me-2"
                variant="outlined" color="success"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <GreenButton
                data-testid="add-button-element"
                variant={'outlined'}
                className="ms-2"
                disabled={!city}
                onClick={AddTrip}>
                Add new city
            </GreenButton>
        </div>
    )
}

export default AddCity;