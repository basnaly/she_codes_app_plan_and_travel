import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { cityStyle, CityStyled, LinkStyled, PalmStyled, PreLoginStyled, TabContentBox } from "../styles/MuiStyles";
import { ChangePreLoginTripCity, 
        ChangePreLoginTripDateFrom, 
        ChangePreLoginTripDateTo } from '../Actions/PlanTravelAction';

const PreLoginScreen = () => {

    const city = useSelector(state => state?.main?.preLoginTrip?.city);
    const from = useSelector(state => state?.main?.preLoginTrip?.dateFrom);
    const to = useSelector(state => state?.main?.preLoginTrip?.dateTo);
    const userId = useSelector(state => state?.auth?.userId);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {

        if (userId) {
            navigate('/home')
        }
    }, [userId])

    const handleChangeFrom = newFrom => dispatch(ChangePreLoginTripDateFrom(newFrom));
    const handleChangeTo = newTo => dispatch(ChangePreLoginTripDateTo(newTo));

    let formatedCity = city.toLowerCase().trim().replace(/\s/g, '_')

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>

            <TabContentBox boxShadow={24} p={4} className="d-flex align-items-center">
                <PreLoginStyled className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center mb-2">
                        Where would you like to travel?
                    </div>

                    <TextField id="outlined-basic" label="City"
                        inputProps={ {style: cityStyle}}
                        variant="outlined"
                        color="success"
                        size="small"
                        value={city}
                        onChange={(e) => dispatch(ChangePreLoginTripCity(e.target.value))}
                    />

                    <div className="d-flex align-items-center mt-3 mb-1">
                        Approximate travel period:
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
                        <PalmStyled className="palm d-flex">🏝</PalmStyled>

                        <DesktopDatePicker
                            OpenPickerButtonProps={{style:{color:'forestgreen', transform: 'scale(1.3)'}}}
                            label="Date to:"
                            inputFormat="DD/MM/yyyy"
                            value={to}
                            onChange={handleChangeTo}
                            renderInput={(params) => <TextField color="success" {...params} />}
                        />
                    </div>
                    {
                        !city ? '' :
                            <LinkStyled className="m-2" href={`https://www.holiday-weather.com/${formatedCity}/averages/`}
                                target='_blank'>
                                Check the weather for
                                <CityStyled className="city">
                                    {city}
                                </CityStyled>
                                on holiday-weather.com
                            </LinkStyled>
                    }
                    <div className="mt-3">
                        Please register or login to start your trip!
                    </div>
                </PreLoginStyled>
            </TabContentBox>
        </LocalizationProvider>
    )
}

export default PreLoginScreen;