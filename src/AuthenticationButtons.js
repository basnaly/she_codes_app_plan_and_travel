import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AuthenticationButtons = () => {


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