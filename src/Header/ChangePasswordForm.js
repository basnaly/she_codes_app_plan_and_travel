import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PasswordInputComponent from "../Authentication/PasswordInputComponent";
import { ChangePassword, SetAuthError } from "../Actions/AuthenticationAction";

import { ErrorStyled, GreenButton, RedButton, UserMenuStyled } from "../styles/MuiStyles";
import { Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@mui/material";
import { validatePassword } from "../constants";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const ChangePasswordForm = () => {

	const authError = useSelector((state) => state?.auth?.authError);
	const isAuthLoading = useSelector((state) => state?.auth?.isAuthLoading);

	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");

	const dispatch = useDispatch();

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const openChangePasswordDialog = () => setIsDialogOpen(true);

	const CloseDialog = () => {
		setIsDialogOpen(false);
		setOldPassword("");
		setNewPassword("");
		dispatch(SetAuthError(""));
	};

	const setPasswordWithValidation = (newPassword) => {
		const passValidation = validatePassword(newPassword);
		const validationError =
			"The password must contain lower and upper case letters, numbers and symbols, 8-12 letters";

		if (!passValidation) {
			dispatch(SetAuthError(validationError));
		} else {
			if (authError !== "") {
				dispatch(SetAuthError(""));
			}
		}
		setNewPassword(newPassword);
	};

	const Submit = () => {
		if (!oldPassword || !newPassword) {
			dispatch(SetAuthError("The old or new password cannot be empty"));
			return;
		}
		dispatch(ChangePassword(oldPassword, newPassword))
		setIsDialogOpen(false);
	};

	return (
		<React.Fragment>
			<UserMenuStyled 
				className="d-flex flex-column align-items-center justify-content-center py-2 px-3"
				onClick={openChangePasswordDialog}>
					Change password
			</UserMenuStyled>

			<Dialog 
				className="d-flex flex-column align-items-center"
				data-testid="delete-dialog-element"
				open={isDialogOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={CloseDialog}
				aria-labelledby="modal-modal-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle
					className="d-flex flex-column align-items-center pb-1 m-1"
					id="modal-modal-title"
					variant="h6"
					component="h2"	
				>
					Change password
				</DialogTitle>

				<ErrorStyled 
					className="d-flex align-items-center text-center px-3 mb-3">
						{authError}
				</ErrorStyled>

				<DialogContent className="d-flex align-items-center py-2">
					<PasswordInputComponent
						password={oldPassword}
						setPassword={setOldPassword}
						label={'Old password'}
						mt={0}
					/>

					<PasswordInputComponent
						password={newPassword}
						setPassword={setPasswordWithValidation}
						label={'New password'}
						mt={0}
					/>
				</DialogContent>

				<DialogActions className="d-flex align-items-center justify-content-center mt-0 mb-3">
					<GreenButton
						className="d-flex align-items-center mt-3 mx-3"
						data-testid="submit-button"
						variant={"outlined"}
						disabled={authError || isAuthLoading}
						onClick={Submit}
					>
						{isAuthLoading ? "Loading" : "Submit"}
					</GreenButton>

					<RedButton
						className="d-flex align-items-center mt-3 mx-3"
						data-testid="cancel-button"
						onClick={CloseDialog}
						variant={"outlined"}	
					>
						Cancel
					</RedButton>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};

export default ChangePasswordForm;
