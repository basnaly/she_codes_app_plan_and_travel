import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import LogoutComponent from "./LogoutComponent";

const AuthenticationButtons = () => {

    const userId = useSelector(state => state.auth.userId);
    
    if (userId) {
        return <LogoutComponent />
    }

    return (
        <React.Fragment>
            <ol>
                <Link className="log" to='/register'>Register</Link>
            </ol>
            <ol>
                <Link className="log" to='/login'>Log in</Link>
            </ol>
        </React.Fragment>
    )
}

export default AuthenticationButtons;