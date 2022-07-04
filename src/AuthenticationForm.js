import React from "react";

import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material";
import TextField from '@mui/material/TextField';

import PasswordInputComponent from "./PasswordInputComponent";


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

const AuthenticationForm = ({Submit, title }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/home')
        }
    }, [])

    const Cancel = () => {
        setEmail('');
        setPassword('');
        setError('');
        setLoading(false);
    }

    return (

        <Box sx={style} className="d-flex flex-column align-items-center">
            <Typography className="form d-flex flex-column align-items-center">
                { title }
            </Typography>

            <div className="error d-flex mb-2">{error}</div>

            <div className="d-flex">
                <Typography className="d-flex align-items-center justify-content-center"
                    id="modal-modal-description" sx={{ mt: 2, width: '100%' }}>
                    <TextField className="regist mx-3"
                        id="outlined-helperText"
                        label="Email"
                        color="success"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Typography>

                <PasswordInputComponent password={password}
                                    setPassword={setPassword} />

            </div>

            <div>
                <SubmitButton
                    variant={'outlined'}
                    className="mt-4 mx-3"
                    onClick={() => Submit(email, password, setPassword, setLoading, setError)}>
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



