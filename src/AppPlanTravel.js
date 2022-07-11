import React, { useState, useEffect} from "react";
import FooterComponent from "./Footer/FooterComponent";
import HeaderComponent from "./Header/HeaderComponent";
import { BrowserRouter as Router } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import ContentRouting from "./Body/ContentRouting";

import { useDispatch } from "react-redux";
import { SaveUser } from "./Actions/AuthenticationAction";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { CircularProgress } from '@mui/material';

import { app } from './firebase-config';

const theme = createTheme({
    palette: {
        neutral: {
          main: 'transparent',
          contrastText: '#fff',
        },
      },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '20px',
                    color: 'black',
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '30px',
                    marginTop: '-10px',
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {  
                input: {
                    fontFamily: 'Aladin, cursive',
                    fontSize: '22px',
                    color: 'black',
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {  
                notchedOutline: {
                    color: 'forestgreen',
                }
            }
        },
    }
});


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
        <ThemeProvider theme={theme}>
            <div className="main">
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