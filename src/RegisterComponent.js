import React from "react";

import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import AuthenticationForm from "./AuthenticationForm";


const RegisterComponent = () => {

    const navigate = useNavigate();

    const validatePassword = (password) => {

        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
    
        const found = password.match(regularExpression); 
        
        return !!found 
    }

    const Submit = (email, password, setPassword, setLoading, setError) => {
        
        const authentication = getAuth(); //save to variable to avoid redundant request to google 

        if (!email || !password) {
            setError('Email and password cannot be empty')
            return
        }

        const isPasswordValid = validatePassword(password)
        if (!isPasswordValid) { 
            setError('Password is not valid')
            return
        }

        setLoading(true);

        createUserWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                navigate('/home')
                let userId = response.user.uid
                let userEmail = response.user.email
                console.log(userId);
                console.log(userEmail);
                setLoading(false)
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password') {
                    setError('Please check the Password and Email');
                }
                if (error.code === 'auth/invalid-email') {
                    setError('Please check the Password and Email');
                }
                if (error.code === 'auth/user-not-found') {
                    setError('Please check the Password and Email');
                }
                if (error.code === 'auth/email-already-in-use') {
                    setError('Email Already in Use');
                }
                setLoading(false)
            })
    }

    return <AuthenticationForm Submit={ Submit}
                            title={ 'The register form' }
                            validatePassword={validatePassword}/>

}

export default RegisterComponent;