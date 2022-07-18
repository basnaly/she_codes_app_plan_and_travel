import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthenticationButtons from '../Authentication/AuthenticationButtons';

const HeaderComponent = () => {

    const userId = useSelector(state => state.auth.userId)

    const linkTo = userId ? '/home' : '/'

    return (
        <div className="header d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center ps-1">
                <div className="icon">🗺</div>

                <div>
                    <Link className="name" to={ linkTo }>Plan & Travel</Link>
                </div>
            </div>
            <div className="d-flex align-items-center ps-5">

                <ul className="d-flex align-items-center me-5 mt-3">
                    <AuthenticationButtons />    
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;

