import React, { useEffect } from "react";

import CityBox from "./CityBox";
import AddCity from "./AddCity";
import { useDispatch, useSelector } from "react-redux";
import { GetCityData } from "../Actions/PlanTravelAction";
import { CircularProgress } from '@mui/material';

const MainScreen = () => {

    const cities = useSelector(state => state.main.cities);
    const isLoading = useSelector(state => state.main.isLoading);
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
            {isLoading && <CircularProgress color="success" />}
            <div className="overflow-auto d-flex flex-wrap align-items-center justify-content-evenly">
                {cities.map(el =>
                    <CityBox el={el} key={el.id} />
                )}
            </div>

            {  
                cities.length !== 0 ? '' :
                    <div className="no-trips">
                        You don't have any trips. Let's start adding!
                    </div>
            }

        </div>
    )
}

export default MainScreen;