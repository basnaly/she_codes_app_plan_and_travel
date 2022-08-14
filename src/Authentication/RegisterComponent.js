import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

import { RegisterWithBackend, SetAuthError } from "../Actions/AuthenticationAction";
import AuthenticationForm from "../Authentication/AuthenticationForm";

const RegisterComponent = () => {

	const [username, setUsername] = useState("");

	const userId = useSelector((state) => state?.auth?.userId);

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const validatePassword = (password) => {
		
		var regularExpression =
			/^(?=.*[0-9])(?=.*[!@#$%^&*-_])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*-_]{8,12}$/;

		const found = password.match(regularExpression);

		return !!found;
	};

	const Submit = (email, password, setPassword) => {
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

	useEffect(() => {
		if (userId) {
			navigate("/home");
		}
	}, [userId]);

	return (
		<AuthenticationForm
			Submit={Submit}
			title={"The register form"}
			validatePassword={validatePassword}
		>
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
		</AuthenticationForm>
	);
};

export default RegisterComponent;
