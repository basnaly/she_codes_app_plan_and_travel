import React from "react";
import { Link } from "react-router-dom";
import { getAuth } from 'firebase/auth';
import LogoutComponent from "./LogoutComponent";

const AuthenticationButtons = () => {

        const auth = getAuth();
        console.log(auth.currentUser)     
    
    if (auth.currentUser) {
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