import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import ControlButtonsComponent from "../Body/ControlButtonsComponent";
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
                    <Routes>
                        <Route path='/home' element={ <React.Fragment /> } />
                        <Route path='/login' element={ <React.Fragment /> } />
                        <Route path='/register' element={ <React.Fragment /> } />
                        <Route path='/' element={ <React.Fragment /> } />
                        <Route path='/:id/*' element={ <ControlButtonsComponent />} />   
                    </Routes>
                    <AuthenticationButtons />    
                </ul>
            </div>

        </div>
    )
}

export default HeaderComponent;

