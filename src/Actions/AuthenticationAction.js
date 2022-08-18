import axios from "axios";

import config from "./config";
import { SaveInitialTrip, SetAlertMessage } from "./PlanTravelAction";

export const SaveUser = (userId, username, userEmail) => {
	return {
		type: "SAVE_USER",
		username,
		userId,
		userEmail,
	};
};

export const SetAuthError = (authError) => {
	return {
		type: "SET_AUTH_ERROR",
		authError,
	};
};

export const RegisterWithBackend = (username, email, password) => {

	return async (dispatch, getState) => {

		try {
			dispatch({
				type: "SET_IS_AUTH_LOADING",
			});

			const result = await axios.post("/auth/register", {
				username,
				email,
				password,
			});

			let token = result?.data?.accessToken;
			sessionStorage.setItem("authToken", token);

			let userId = result?.data?.id;
			let userUsername = result?.data?.username;
			let userEmail = result?.data?.email;

			dispatch(SaveUser(userId, userUsername, userEmail));
			dispatch(SaveInitialTrip(token));

		} catch (error) {
			console.log(error);
			dispatch(SetAuthError(error?.response?.data?.message));
		}
	};
};

export const LoginWithBackend = (email, password) => {
	return async (dispatch, getState) => {
		try {
			dispatch({
				type: "SET_IS_AUTH_LOADING",
			});

			let result = await axios.post("/auth/login", { email, password });

			let token = result?.data?.accessToken;
			sessionStorage.setItem("authToken", token);

			let userId = result?.data?.id;
			let userUsername = result?.data?.username;
			let userEmail = result?.data?.email;

			dispatch(SaveUser(userId, userUsername, userEmail));
			dispatch(SaveInitialTrip(token));

		} catch (error) {
			console.log(error);
			dispatch(SetAuthError(error?.response?.data?.message));
		}
	};
};

export const CheckUserWithBackend = () => {

	return async (dispatch, getState) => {
		try {
			let result = await axios.get("/auth/check-user", config());

			let userId = result?.data?.id;
			let userUsername = result?.data?.username;
			let userEmail = result?.data?.email;

			dispatch(SaveUser(userId, userUsername, userEmail));

		} catch (error) {
			console.log(error?.response?.data?.message);
			dispatch(SetAlertMessage(error?.response?.data?.message));
		}
	};
};

export const CheckTokenError = (error) => {

	return (dispatch, getState) => {

		if (error.response.status === 401 || error.response.status === 403) {
			sessionStorage.removeItem('authToken')
        	dispatch(SaveUser(undefined, undefined, undefined))
			dispatch({
				type: "RESET_USER_DATA"
			})
		}

		console.log(error.response.status)
	}
}

export const ChangePassword = (oldPassword, newPassword) => {

	return async (dispatch, getState) => {

		try {
			const result = await axios.post("/auth/change-password",
			{ oldPassword, password: newPassword }, config())

			console.log(result.data)
            	dispatch(SetAlertMessage(result?.data?.message, 'success'));

		} catch(error) {
				console.log(error);
				dispatch(SetAlertMessage(error?.response?.data?.message));
			};
	}

}

export const DeleteUserAccount = () => {

	return async (dispatch, getState) => {

		try {
			const result = await axios.delete("auth/delete-account", config())

			sessionStorage.removeItem('authToken')
        	dispatch(SaveUser(undefined, undefined, undefined))

			dispatch({
				type: "RESET_USER_DATA",
			});

			console.log(result.data)
            	dispatch(SetAlertMessage(result?.data?.message, 'success'));
			

		} catch (error) {
				console.log(error);
				dispatch(SetAlertMessage(error?.response?.data?.message));
		}
	}
}