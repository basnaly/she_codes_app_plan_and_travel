import React, { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginComponent from "../Authentication/LoginComponent";
import RegisterComponent from "../Authentication/RegisterComponent";
import PreLoginScreen from "./PreLogin/PreLoginScreen";
import MainScreen from "./MainScreen";

import EditTripMainScreen from "./EditTripMainScreen";

const HomeSwitch = () => {

    const userId = useSelector(state => state.auth.userId);

    const navigate = useNavigate();

    useEffect(() => {

        if (!userId) {
            navigate('/')
        }
    }, [])

    return <MainScreen /> // '/home'
    
}

const ContentRouting = () => {

    return (
        <Routes>
            <Route path='/register' element={ <RegisterComponent /> } />
            <Route path='/login' element={ <LoginComponent />} />  
            <Route path='/home' element={ <HomeSwitch /> } />  
            <Route path='/:id/*' element={ <EditTripMainScreen /> } />
            <Route path='/' element={ <PreLoginScreen /> } />
            <Route exact path="*" 
                element={ <Navigate replace to="/" /> } />
        </Routes>
    )
}

export default ContentRouting;