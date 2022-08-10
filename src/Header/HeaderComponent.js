import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


import AuthenticationButtons from '../Authentication/AuthenticationButtons';
import { HeaderStyled, IconStyled, LinkHoverStyled } from "../styles/MuiStyles";

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

                <div id="portal" />

                <ul className="d-flex align-items-center me-5 mt-3">
                    <AuthenticationButtons />    
                </ul>
            </div>

        </HeaderStyled>
    )
}

export default HeaderComponent;

