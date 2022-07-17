import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import { Routes, Route, Router, useNavigate, useParams } from "react-router-dom";

import PeriodComponent from './Period/PeriodComponent';
import PreparationsComponent from './Preparations/PreparationsComponent';
import { Formik } from 'formik';
import { HeaderBox } from '../styles/MuiStyles';
import { GetTripData } from '../Actions/PlanTravelAction';
import ControlButtonsComponent from './ControlButtonsComponent';

const EditTripMainScreen = () => {

    const userId = useSelector(state => state?.auth?.userId)
    const trip = useSelector(state => state?.main?.trip);
    const isLoadingTrip = useSelector(state => state?.main?.isLoadingTrip);

    const [selectedTab, setSelectedTab] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const params = useParams();

    useEffect(() => {

        if (!userId) {
            navigate('/')
        } else {
            dispatch(GetTripData(params.id))
        }

    }, [userId])

    const handleChange = (_, tab) => {
        setSelectedTab(tab)
        navigate(tab)
    }

    const Submit = (values) => {
        console.log(values)
    }

    return (

        <Formik
            enableReinitialize
            initialValues={trip}
            onSubmit={Submit}>

            <React.Fragment>

                <TabContext value={selectedTab}>
                    <HeaderBox>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label={trip.city} value="city" disabled />
                            <Tab label="Period" value="period" />
                            <Tab label="Preparations" value="preparations" />
                            <Tab label="Transportations" value="transportations" />
                            <Tab label="Accomodations" value="accomodations" />
                            <Tab label="Visitings" value="visitings" />
                            <Tab label="Comments" value="comments" />
                            <Tab label="Expences" value="expences" />
                        </TabList>
                    </HeaderBox>
                </TabContext>

                <Routes>
                    <Route path='/period' element={<PeriodComponent />} />
                    <Route path='/preparations' element={<PreparationsComponent />} />

                </Routes>

                <div className="d-flex align-items-center mx-auto">
                    <ControlButtonsComponent />
                </div>
                
            </React.Fragment>

        </Formik>
    )
}

export default EditTripMainScreen
