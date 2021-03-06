import React from "react";
import { useSelector } from "react-redux";
import { AuthLinkStyled } from "../styles/MuiStyles";

import LogoutComponent from "./LogoutComponent";

const AuthenticationButtons = () => {

    const userId = useSelector(state => state.auth.userId);
    
    if (userId) {
        return <LogoutComponent />
    }

    return (
        <React.Fragment>
            <ol>
                <AuthLinkStyled className="log" to='/register'>Register</AuthLinkStyled>
            </ol>
            <ol>
                <AuthLinkStyled className="log" to='/login'>Log in</AuthLinkStyled>
            </ol>
        </React.Fragment>
    )
}

export default AuthenticationButtons;