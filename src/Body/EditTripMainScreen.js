import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Formik } from 'formik';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Portal } from '@mui/material';

import { CircularProgress } from '@mui/material';

import { Routes, Route, useLocation, useNavigate, useParams } from "react-router-dom";

import { HeaderBox } from '../styles/MuiStyles';
import { GetTripData, UpdateTripData } from '../Actions/PlanTravelAction';
import ControlButtonsComponent from './ControlButtonsComponent';
import TransportationsComponent from './Tabs/TransportationsComponent';
import PeriodComponent from './Tabs/PeriodComponent';
import PreparationsComponent from './Tabs/PreparationsComponent.js';
import AccommodationsComponent from './Tabs/AccommodationsComponent';
import VisitingsComponent from './Tabs/VisitingsComponent';
import CommentsComponent from './Tabs/CommentsComponent';
import ExpencesComponent from './Tabs/ExpencesComponent';

const EditTripMainScreen = () => {

    const userId = useSelector(state => state?.auth?.userId)
    const trip = useSelector(state => state?.main?.trip);
    const isLoadingTrip = useSelector(state => state?.main?.isLoadingTrip);

    const location = useLocation();

    const params = useParams();

    const idPath = `/${params.id}/`;

    const [selectedTab, setSelectedTab] = useState(location.pathname.replace(idPath, ''));

    const dispatch = useDispatch();

    const navigate = useNavigate();

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

        dispatch(UpdateTripData(params.id, values))
    }

    if (isLoadingTrip) {
        return <CircularProgress color="success" />
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
                    <Route path='/transportations' element={<TransportationsComponent />} />
                    <Route path='/accomodations' element={<AccommodationsComponent />} />
                    <Route path='/visitings' element={<VisitingsComponent />} />
                    <Route path='/comments' element={<CommentsComponent />} />
                    <Route path='/expences' element={<ExpencesComponent />} />
                </Routes>

                <Portal container={document.getElementById('portal')}>
                    <ControlButtonsComponent />
                </Portal>

            </React.Fragment>

        </Formik>
    )
}

export default EditTripMainScreen
