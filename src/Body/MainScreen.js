import React, { useEffect } from "react";

import CityBox from "./CityBox";
import AddCity from "./AddCity";
import { useDispatch, useSelector } from "react-redux";
import { GetCityData } from "../Actions/PlanTravelAction";
import { CircularProgress } from '@mui/material';
import { NoTripStyled } from "../styles/MuiStyles";

const MainScreen = () => {

    const cities = useSelector(state => state.main.cities);
    const isLoadingCities = useSelector(state => state.main.isLoadingCities);
    const userId = useSelector(state => state.auth.userId);

    const dispatch = useDispatch();

    useEffect(() => {

        if (userId) {
            dispatch(GetCityData()) // send request to firebase to get list of cities and save them in redux
        }

    }, [userId]);

    return (
        <div className="d-flex flex-column align-items-center overflow-auto">
            <AddCity />
            {isLoadingCities && <CircularProgress color="success" />}
            <div className="overflow-auto d-flex flex-wrap align-items-center justify-content-evenly">
                {cities.map(el =>
                    <CityBox el={el} key={el.id} />
                )}
            </div>

            {  
                cities.length !== 0 ? '' :
                    <NoTripStyled>
                        You don't have any trips. Let's start adding!
                    </NoTripStyled>
            }

        </div>
    )
}

export default MainScreen;