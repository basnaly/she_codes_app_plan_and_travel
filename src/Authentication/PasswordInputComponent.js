import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordInputComponent = ({ password, setPassword, label = "Password", mt = 2 }) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<FormControl
			sx={{ mt: mt, width: "100%" }}
			variant="outlined"
			className="d-flex align-items-center justify-content-center"
			data-testid="password-container"
		>
			<InputLabel
				htmlFor="outlined-adornment-password"
				color="success"
				className="mx-3"
			>
				{label}
			</InputLabel>

			<OutlinedInput
				inputProps={{ "data-testid": "password-input" }}
				id="outlined-adornment-password"
				type={showPassword ? "text" : "password"}
				color="success"
				className="mx-3"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							data-testid="password-text"
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							edge="end"
							color="success"
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				label="Password"
			/>
		</FormControl>
	);
};

export default PasswordInputComponent;
