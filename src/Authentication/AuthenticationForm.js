import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material";
import TextField from '@mui/material/TextField';

import PasswordInputComponent from "./PasswordInputComponent";
import { SetAuthError } from "../Actions/AuthenticationAction";

const SubmitButton = styled(Button)({
    textTransform: 'none',
    color: 'forestgreen',
    border: '1px solid black',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '3px 12px',
    fontFamily: 'Aladin',
})

const CancelButton = styled(Button)({
    textTransform: 'none',
    color: 'red',
    border: '1px solid black',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '3px 12px',
    fontFamily: 'Aladin',
})

const style = {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    border: '2px solid forestgreen',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    backgroundColor: '#ffffff60',
};

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

        <Box sx={style} className="d-flex flex-column align-items-center">
            <Typography className="form d-flex flex-column align-items-center">
                { title }
            </Typography>

            <div className="error d-flex mb-2">{authError}</div>

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
                <SubmitButton
                    variant={'outlined'}
                    className="mt-4 mx-3"
                    disabled={authError}
                    onClick={() => Submit(email, password, setPassword)}>
                    Submit
                </SubmitButton>

                <CancelButton onClick={Cancel}
                    variant={'outlined'}
                    className="mt-4 mx-3">
                    Cancel
                </CancelButton>
            </div>
        </Box>
    )
}

export default AuthenticationForm;



