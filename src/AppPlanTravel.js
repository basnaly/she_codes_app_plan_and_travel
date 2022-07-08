import React from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { BrowserRouter as Router } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import ContentRouting from "./ContentRouting";

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

    
    return (
        <ThemeProvider theme={theme}>
            <div className="main">
                <Router>
                    <HeaderComponent />
                    <ContentRouting />
                    <FooterComponent />
                </Router>
            </div>
        </ThemeProvider>
    )

}

export default AppPlanTravel;