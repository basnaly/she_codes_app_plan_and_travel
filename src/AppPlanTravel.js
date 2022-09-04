import React, { useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";

import FooterComponent from "./Footer/FooterComponent";
import HeaderComponent from "./Header/HeaderComponent";
import ContentRouting from "./Body/ContentRouting";

import {myTheme} from "./styles/MuiTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Main } from "./styles/MuiStyles";

import { CheckUserWithBackend } from "./Actions/AuthenticationAction";
import AlertMessage from "./Body/AlertMessage";
import { useDispatch } from "react-redux";

const AppPlanTravel = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(CheckUserWithBackend())

    }, []);
 
    return (
        <ThemeProvider theme={myTheme}>
            <Main className="d-flex flex-column flex-column overflow-auto vh-100">
                <Router>
                    
                    <HeaderComponent />

                    <AlertMessage />   

                    <ContentRouting />
                    
                    <FooterComponent />
                    
                </Router>
            </Main>
        </ThemeProvider>
    )

}

export default AppPlanTravel;