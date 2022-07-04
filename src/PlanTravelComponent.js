import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';

import { cityStyle } from "./styles/MuiStyles";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    border: '2px solid forestgreen',
    borderRadius: "10px",
    backgroundColor: '#ffffff60',
    boxShadow: 24,
    p: 4,
};

const PlanTravelComponent = () => {

    const [city, setCity] = useState('');
    const [from, setFrom] = useState(new Date());
    const [to, setTo] = useState(new Date());

    const handleChangeFrom = newFrom => setFrom(newFrom);
    const handleChangeTo = newTo => setTo(newTo);

    let formatedCity = city.toLowerCase().trim().replace(/\s/g, '_')

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>

            <Box sx={style} className="d-flex align-items-center">
                <div className="parent d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center mb-2">
                        Where would you like to travel?
                    </div>

                    <TextField id="outlined-basic" label="City"
                        inputProps={ {style: cityStyle}}
                        variant="outlined"
                        color="success"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />

                    <div className="d-flex align-items-center mt-3 mb-1">
                        Approximaly travel period:
                    </div>
                    <div className="d-flex align-items-center">

                        <DesktopDatePicker className="m-2"
                            OpenPickerButtonProps={{style:{color:'forestgreen', transform: 'scale(1.3)'}}}
                            label="Date from:"
                            inputFormat="DD/MM/yyyy"
                            
                            value={from}
                            onChange={handleChangeFrom}
                            renderInput={(params) => <TextField color="success" {...params} />}
                        />
                        <div className="palm d-flex">🏝</div>

                        <DesktopDatePicker
                            OpenPickerButtonProps={{style:{color:'forestgreen', transform: 'scale(1.3)'}}}
                            label="Date till:"
                            inputFormat="DD/MM/yyyy"
                            value={to}
                            onChange={handleChangeTo}
                            renderInput={(params) => <TextField color="success" {...params} />}
                        />
                    </div>
                    {
                        !city ? '' :
                            <a className="link m-2" href={`https://www.holiday-weather.com/${formatedCity}/averages/`}
                                target='_blank'>
                                Check the weather for
                                <span className="city">
                                    {city}
                                </span>
                                on holiday-weather.com
                            </a>
                    }
                    <div className="m-3">
                        Please register or sign in to start your trip!
                    </div>
                </div>
            </Box>
        </LocalizationProvider>
    )

}

export default PlanTravelComponent;