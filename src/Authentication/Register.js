import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

import { RegisterWithBackend, SetAuthError } from "../Actions/AuthenticationAction";
import { validatePassword } from "../constants";

import PasswordInputComponent from "./PasswordInputComponent";
import { ErrorStyled, GreenButton, RedButton, TabContentBox } from "../styles/MuiStyles";

const Register = () => {

	const userId = useSelector((state) => state?.auth?.userId);
	const authError = useSelector((state) => state?.auth?.authError);
	const isAuthLoading = useSelector((state) => state?.auth?.isAuthLoading);

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const Submit = () => {

		if (!username || !email || !password) {
			dispatch(
				SetAuthError("Username, email and password cannot be empty")
			);
			return;
		}

		const isPasswordValid = validatePassword(password);

		if (!isPasswordValid) {
			dispatch(SetAuthError("Password is not valid"));
			return;
		}

		dispatch(RegisterWithBackend(username, email, password));
		setPassword("");
	};

	const setPasswordWithValidation = typedPassword => { 
        
        const passValidation = validatePassword(typedPassword);
        const validationError = 'The password must contain lower and upper case letters, numbers and symbols, 8-12 letters';

        if (!passValidation) {
            dispatch(SetAuthError(validationError))
        } else {
            if (authError !== ''){
                dispatch(SetAuthError(''))
            }
        }
        setPassword(typedPassword)    
    }

    const setEmailWithErrorClean = email => {
        if (authError !== ''){
            dispatch(SetAuthError('')) // remove the error
        }
        setEmail(email) // typing into email field
    }

	const Cancel = () => {
        setEmail('');
        setPassword('');
        dispatch(SetAuthError(''));
        navigate('/')
    }

	useEffect(() => {
		if (userId) {
			navigate("/home");
		}
	}, [userId]);

	return (
		<TabContentBox
			boxShadow={24}
			p={4}
			className="d-flex flex-column align-items-center"
			data-testid="form-container"
		>
			<Typography className="form d-flex flex-column align-items-center">
                The register form
			</Typography>

			<ErrorStyled className="d-flex mb-2">{authError}</ErrorStyled>

			<div className="d-flex">

				<Typography
					className="d-flex align-items-center justify-content-center" // children
					id="modal-modal-description"
					sx={{ mt: 2, width: "100%" }}
				>
					<TextField
						className="regist mx-3"
						id="outlined-helperText"
						label="Username"
						type="username"
						color="success"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Typography>

				<Typography
					className="d-flex align-items-center justify-content-center" // children
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
					setPassword={setPasswordWithValidation}
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

export default Register;
