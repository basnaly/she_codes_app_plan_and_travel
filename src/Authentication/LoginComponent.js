import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { LoginWithBackend, SetAuthError } from '../Actions/AuthenticationAction'
import AuthenticationForm from "./AuthenticationForm";

const LoginComponent = () => {

    const userId = useSelector(state => state.auth.userId)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const Submit = (email, password, setPassword) => {

        if (!email || !password) {
            dispatch(SetAuthError('Email and password cannot be empty'))
            return
        }

        dispatch(LoginWithBackend(email, password))
        setPassword('');

    }

    useEffect(() => {

        if (userId) {
            navigate('/home')
        }

    }, [userId])

    return <AuthenticationForm Submit={ Submit}
                                title={ 'The log in form' }/>
}

export default LoginComponent;