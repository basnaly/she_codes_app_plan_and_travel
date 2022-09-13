import React, { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import PreLoginScreen from "./PreLoginScreen";
import MainScreen from "./MainScreen";

import EditTripMainScreen from "./EditTripMainScreen";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";

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
            <Route path='/register' element={ <Register /> } />
            <Route path='/login' element={ <Login />} />  
            <Route path='/home' element={ <HomeSwitch /> } />  
            <Route path='/:id/*' element={ <EditTripMainScreen /> } />
            <Route path='/' element={ <PreLoginScreen /> } />
            <Route exact path="*" 
                element={ <Navigate replace to="/" /> } />
        </Routes>
    )
}

export default ContentRouting;