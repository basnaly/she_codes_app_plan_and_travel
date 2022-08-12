import React, { useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { RegisterWithBackend, SetAuthError } from '../Actions/AuthenticationAction';
import AuthenticationForm from "../Authentication/AuthenticationForm";

const RegisterComponent = () => {

    const userId = useSelector(state => state?.auth?.userId)
    
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const validatePassword = (password) => {

        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*-_])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*-_]{8,12}$/;
    
        const found = password.match(regularExpression); 
        
        return !!found 
    }

    const Submit = (email, password, setPassword) => {
        
        if (!email || !password) {
            dispatch(SetAuthError('Email and password cannot be empty'))
            return
        }

        const isPasswordValid = validatePassword(password)
        if (!isPasswordValid) { 
            dispatch(SetAuthError('Password is not valid'))
            return
        }

        dispatch(RegisterWithBackend(email, password))
        setPassword('');
    }

    useEffect(() => {

        if (userId) {
            navigate('/home')
        }

    }, [userId])

    return <AuthenticationForm Submit={ Submit}
                            title={ 'The register form' }
                            validatePassword={validatePassword}/>

}

export default RegisterComponent;