import React, { useState, useEffect} from "react";
import FooterComponent from "./Footer/FooterComponent";
import HeaderComponent from "./Header/HeaderComponent";
import { BrowserRouter as Router } from "react-router-dom";
import {myTheme} from "./styles/MuiTheme";

import { ThemeProvider } from "@mui/material/styles";

import ContentRouting from "./Body/ContentRouting";

import { useDispatch } from "react-redux";
import { SaveUser } from "./Actions/AuthenticationAction";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { CircularProgress } from '@mui/material';

import { app } from './firebase-config';

const AppPlanTravel = () => {

    const [isAuthDone, setIsAuthDone] = useState(false) // to avoid calling setting user multiple times
 // useRef avoid recreate isAuthDone on every next render
    const dispatch = useDispatch();

    useEffect(() => {

        const auth = getAuth(); //take an auth
        onAuthStateChanged(auth, (authUser) => { // if token changes
            if (authUser && !isAuthDone) { // if user exists and auth is not done 
                dispatch(SaveUser(authUser.uid, authUser.email))  
            }
            if (!isAuthDone) { // waiting for response from firebase
                setIsAuthDone(true) //
            } 
        });
    }, []);

    
    return (
        <ThemeProvider theme={myTheme}>
            <div className="main d-flex flex-column flex-column overflow-auto vh-100">
                <Router>
                    <HeaderComponent />
                    {
                       !isAuthDone 
                       ? <CircularProgress color="success" size="80px"
                            className="m-auto" />
                       : <ContentRouting />
                    }
                    <FooterComponent />
                </Router>
            </div>
        </ThemeProvider>
    )

}

export default AppPlanTravel;