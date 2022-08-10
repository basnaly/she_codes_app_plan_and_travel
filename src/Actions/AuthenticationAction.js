import axios from "axios";

import config from "./config";
import { SaveInitialTrip } from "./PlanTravelAction";

export const SaveUser = (userId, userEmail) => {
	return {
		type: "SAVE_USER",
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

export const RegisterWithBackend = (email, password) => {

	return async (dispatch, getState) => {

		try {
			dispatch({
				type: "SET_IS_AUTH_LOADING",
			});

			const result = await axios.post("/auth/register", {
				email,
				password,
			});

			let token = result?.data?.accessToken;
			sessionStorage.setItem("authToken", token);

			let userId = result?.data?.id;
			let userEmail = result?.data?.email;

			dispatch(SaveUser(userId, userEmail));
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
			let userEmail = result?.data?.email;

			dispatch(SaveUser(userId, userEmail));
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
			let result = await axios.get("/auth/check-user", config);

			let userId = result?.data?.id;
			let userEmail = result?.data?.email;

			dispatch(SaveUser(userId, userEmail));

		} catch (error) {
			console.log(error?.response?.data?.message);
		}
	};
};
