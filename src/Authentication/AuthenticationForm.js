import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

import PasswordInputComponent from "./PasswordInputComponent";
import { SetAuthError } from "../Actions/AuthenticationAction";
import { ErrorStyled, GreenButton, RedButton, TabContentBox } from "../styles/MuiStyles";

const AuthenticationForm = ({Submit, title, validatePassword = () => true }) => {

    const userId = useSelector(state => state.auth.userId);
    const authError = useSelector(state => state.auth.authError);
    const isAuthLoading = useSelector(state => state.auth.isAuthLoading);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {

        if (userId) {
            navigate('/home')
        }
    }, [userId])
    
    const Cancel = () => {
        setEmail('');
        setPassword('');
        dispatch(SetAuthError(''));
    }

    const setPasswordWithValidation = password => { 
        
        const passValidation = validatePassword(password);
        const validationError = 'The password must contain lower and upper case letters, numbers and symbols, 6-10 letters';

        if (!passValidation) {
            dispatch(SetAuthError(validationError))
        } else {
            if (authError !== ''){
                dispatch(SetAuthError(''))
            }
        }
        setPassword(password)    
    }

    const setEmailWithErrorClean = email => {
        if (authError !== ''){
            dispatch(SetAuthError('')) // remove the error
        }
        setEmail(email) // typing into email field
    }

    return (

        <TabContentBox boxShadow={24} p={4} className="d-flex flex-column align-items-center"
            data-testid="form-container">
            <Typography className="form d-flex flex-column align-items-center">
                { title }
            </Typography>

            <ErrorStyled className="d-flex mb-2">{authError}</ErrorStyled>

            <div className="d-flex">
                <Typography className="d-flex align-items-center justify-content-center"
                    id="modal-modal-description" sx={{ mt: 2, width: '100%' }}>
                    <TextField className="regist mx-3"
                        id="outlined-helperText"
                        label="Email"
                        type="email"
                        color="success"
                        value={email}
                        onChange={(e) => setEmailWithErrorClean(e.target.value)}
                    />
                </Typography>

                <PasswordInputComponent password={password}
                                    setPassword={setPasswordWithValidation} />
            </div>

            <div>
                <GreenButton
                    data-testid="submit-button"
                    variant={'outlined'}
                    className="mt-4 mx-3"
                    disabled={authError || isAuthLoading}
                    onClick={() => Submit(email, password, setPassword)}>
                    {isAuthLoading ? 'Loading' : 'Submit'}
                </GreenButton>

                <RedButton 
                    data-testid="cancel-button"
                    onClick={Cancel}
                    variant={'outlined'}
                    className="mt-4 mx-3">
                    Cancel
                </RedButton>
            </div>
        </TabContentBox>
    )
}

export default AuthenticationForm;



