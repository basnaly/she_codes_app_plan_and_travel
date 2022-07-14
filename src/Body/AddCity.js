import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { styled } from "@mui/material";
import { cityStyle } from "../styles/MuiStyles";
import { useDispatch } from "react-redux";
import { AddNewCity } from "../Actions/PlanTravelAction";

const AddCityButton = styled(Button)({
    textTransform: 'none',
    color: 'forestgreen',
    border: '1px solid black',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '3px 12px',
    fontFamily: 'Aladin',
})

const AddCity = () => {

    const [city, setCity] = useState('');

    const dispatch = useDispatch()

    const AddCity = () => {
        
        dispatch(AddNewCity(city));
        setCity('');

    }

    return (
        <div className="d-flex align-items-center justify-content-evenly m-3">
            <TextField id="outlined-size-small"
                size="small" 
                label="City"
                inputProps={{ style: {...cityStyle, backgroundColor:'#ffffff60' }}}
                className="input-pt me-2"
                variant="outlined" color="success"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <AddCityButton
                variant={'outlined'}
                className="ms-2"
                disabled={!city}
                onClick={AddCity}>
                Add new city
            </AddCityButton>
        </div>
    )
}

export default AddCity;