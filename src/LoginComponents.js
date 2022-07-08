import React from "react";
import { useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AuthenticationForm from "./AuthenticationForm";

const LoginComponent = () => {

    const navigate = useNavigate();

    const Submit = (email, password, setPassword, setLoading, setError) => {

        const authentication = getAuth();

        if (!email || !password) {
            setError('Email and password cannot be empty')
            return
        }

        setLoading(true);

        signInWithEmailAndPassword(authentication, email, password)
            .then((response) => { //
                navigate('/home')
            
                let userId = response.user.uid
                let userEmail = response.user.email
                console.log(userId);
                console.log(userEmail);
                
            })
            .catch((error) => {
                console.log(error.code)

                if (error.code === 'auth/wrong-password') {
                    setError('Please check the Email and Password');
                }
                if (error.code === 'auth/invalid-email') {
                    setError('Please check the Email and Password');
                }
                if (error.code === 'auth/user-not-found') {
                    setError('Please check the Email and Password');
                }
                setLoading(false);
                setPassword('');
            })

    }

    return <AuthenticationForm Submit={ Submit}
                                title={ 'The log in form' }/>
}

export default LoginComponent;