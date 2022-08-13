import React from "react";
import { useSelector } from "react-redux";
import { AuthLinkStyled } from "../styles/MuiStyles";

import UserDropdown from "../Header/UserDropdown";

const AuthenticationButtons = () => {

    const userId = useSelector(state => state?.auth?.userId);
    
    if (userId) {
        return <UserDropdown />
    }

    return (
        <div className="d-flex me-3">
            <ol>
                <AuthLinkStyled 
                    data-testid="register-element"
                    to='/register'>
                        Register
                </AuthLinkStyled>
            </ol>
            <ol>
                <AuthLinkStyled 
                    data-testid="login-element"
                    to='/login'>
                        Log in
                </AuthLinkStyled>
            </ol>
        </div>
    )
}

export default AuthenticationButtons;