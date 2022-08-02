import React, { useState, useEffect} from "react";
import FooterComponent from "./Footer/FooterComponent";
import HeaderComponent from "./Header/HeaderComponent";
import { BrowserRouter as Router } from "react-router-dom";
import {myTheme} from "./styles/MuiTheme";

import { ThemeProvider } from "@mui/material/styles";

import ContentRouting from "./Body/ContentRouting";

import { useDispatch } from "react-redux";
import { CheckUserWithBackend } from "./Actions/AuthenticationAction";

import { app } from './firebase-config';
import { Main } from "./styles/MuiStyles";


const AppPlanTravel = () => {

    //const [isAuthDone, setIsAuthDone] = useState(false) // to avoid calling setting user multiple times
 // useRef avoid recreate isAuthDone on every next render
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(CheckUserWithBackend())

    }, []);

    
    return (
        <ThemeProvider theme={myTheme}>
            <Main className="d-flex flex-column flex-column overflow-auto vh-100">
                <Router>
                    <HeaderComponent />
                    
                    <ContentRouting />
                    
                    <FooterComponent />
                </Router>
            </Main>
        </ThemeProvider>
    )

}

export default AppPlanTravel;