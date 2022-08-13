import React, { useEffect } from "react";

import CityBox from "./CityBox";
import AddCity from "./AddCity";
import { useDispatch, useSelector } from "react-redux";
import { GetListTrips } from "../Actions/PlanTravelAction";
import { CircularProgress } from '@mui/material';
import { NoTripStyled } from "../styles/MuiStyles";

const MainScreen = () => {

    const listTrips = useSelector(state => state?.main?.listTrips);
    const isLoadingListTrips = useSelector(state => state?.main?.isLoadingListTrips);
    const userId = useSelector(state => state?.auth?.userId);

    const dispatch = useDispatch();

    useEffect(() => {

        if (userId) {
            dispatch(GetListTrips()) // send request to firebase to get list of listTrips and save them in redux
        }

    }, [userId]);

    return (
        <div className="d-flex flex-column align-items-center overflow-auto">
            <AddCity />
            {isLoadingListTrips && <CircularProgress color="success" />}
            <div className="overflow-auto d-flex flex-wrap align-items-center justify-content-evenly">
                {listTrips.map(el =>
                    <CityBox el={el} key={el.id} />
                )}
            </div>

            {  
                listTrips.length !== 0 ? '' :
                    <NoTripStyled>
                        You don't have any trips. Let's start adding!
                    </NoTripStyled>
            }

        </div>
    )
}

export default MainScreen;