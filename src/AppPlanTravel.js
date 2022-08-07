import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import FooterComponent from "./Footer/FooterComponent";
import HeaderComponent from "./Header/HeaderComponent";
import ContentRouting from "./Body/ContentRouting";

import {myTheme} from "./styles/MuiTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Main } from "./styles/MuiStyles";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { SetAlertMessage } from "./Actions/PlanTravelAction";
import { CheckUserWithBackend } from "./Actions/AuthenticationAction";

const AppPlanTravel = () => {

    const alertMessage = useSelector(state => state?.main?.alertMessage) 
    const dispatch = useDispatch();

    const alertSeverity = useSelector(state => state?.main?.alertSeverity)

    useEffect(() => {

        dispatch(CheckUserWithBackend())

    }, []);

    
    return (
        <ThemeProvider theme={myTheme}>
            <Main className="d-flex flex-column flex-column overflow-auto vh-100">
                <Router>
                    
                    <HeaderComponent />

                    { alertMessage &&
                        <Alert severity={alertSeverity} 
                            className="mx-auto my-1"
                            onClose={() => dispatch(SetAlertMessage())}
                            elevation={6}
                        >

                            <AlertTitle>{alertSeverity}</AlertTitle>
                            {alertMessage}
                        </Alert>
                    }    

                    <ContentRouting />
                    
                    <FooterComponent />
                </Router>
            </Main>
        </ThemeProvider>
    )

}

export default AppPlanTravel;