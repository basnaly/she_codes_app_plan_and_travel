import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

import PasswordInputComponent from "./PasswordInputComponent";
import { LoginWithBackend, SetAuthError } from "../Actions/AuthenticationAction";
import { ErrorStyled, GreenButton, RedButton, TabContentBox } from "../styles/MuiStyles";

const Login = () => {

	const userId = useSelector((state) => state?.auth?.userId);
	const authError = useSelector((state) => state?.auth?.authError);
	const isAuthLoading = useSelector((state) => state?.auth?.isAuthLoading);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const navigate = useNavigate();

    const Submit = () => {

        if (!email || !password) {
            dispatch(SetAuthError('Email and password cannot be empty'))
            return
        }

        dispatch(LoginWithBackend(email, password))
        setPassword('');
    }

    const setEmailWithErrorClean = typedEmail => {
        if (authError !== ''){
            dispatch(SetAuthError('')) // remove the error
        }
        setEmail(typedEmail) // typing into email field
    }

    const Cancel = () => {
        setEmail('');
        setPassword('');
        dispatch(SetAuthError(''));
        navigate('/')
    }

    useEffect(() => {

        if (userId) {
            navigate('/home')
        }

    }, [userId])

	return (

		<TabContentBox
			boxShadow={24}
			p={4}
			className="d-flex flex-column align-items-center"
			data-testid="form-container"
		>
			<Typography className="form d-flex flex-column align-items-center">
				The log in form
			</Typography>

			<ErrorStyled className="d-flex mb-2">{authError}</ErrorStyled>

			<div className="d-flex">
				
				<Typography
					className="d-flex align-items-center justify-content-center"
					id="modal-modal-description"
					sx={{ mt: 2, width: "100%" }}
				>
					<TextField
						className="regist mx-3"
						id="outlined-helperText"
						label="Email"
						type="email"
						color="success"
						value={email}
						onChange={(e) => setEmailWithErrorClean(e.target.value)}
					/>
				</Typography>

				<PasswordInputComponent
					password={password}
                    setPassword={setPassword}
				/>
			</div>

			<div>
				<GreenButton
					data-testid="submit-button"
					variant={"outlined"}
					className="mt-4 mx-3"
					disabled={authError || isAuthLoading}
					onClick={Submit}
				>
					{isAuthLoading ? "Loading" : "Submit"}
				</GreenButton>

				<RedButton
					data-testid="cancel-button"
					variant={"outlined"}
					className="mt-4 mx-3"
					onClick={Cancel}
				>
					Cancel
				</RedButton>
			</div>
		</TabContentBox>
	);
};

export default Login;
