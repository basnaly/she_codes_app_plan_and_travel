import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Routes, Route } from "react-router";

import AuthenticationButtons from '../Authentication/AuthenticationButtons';
import { HeaderStyled, IconStyled, LinkHoverStyled } from "../styles/MuiStyles";
import FilterTrips from "./FilterTrips";

const HeaderComponent = () => {

    const userId = useSelector(state => state.auth.userId)

    const linkTo = userId ? '/home' : '/';

    const navigate = useNavigate();

    useEffect(() => {

        if (!userId) {
            navigate('/')
        }    

    }, [userId]);

    return (
        <HeaderStyled className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center ps-1">
                <IconStyled 
                    className="icon"
                    data-testid="icon-element">
                    🗺
                </IconStyled>

                <LinkHoverStyled 
                    className="name" to={ linkTo }
                    data-testid="title-link">
                    Plan & Travel
                    </LinkHoverStyled>

            </div>
            <div className="d-flex align-items-center ps-5">

            <Routes>
                <Route path='/home' element={ <FilterTrips /> } />
            </Routes>

                <div id="portal" />

                <ul className="d-flex align-items-center me-1 mt-3">
                    <AuthenticationButtons />    
                </ul>
            </div>

        </HeaderStyled>
    )
}

export default HeaderComponent;

