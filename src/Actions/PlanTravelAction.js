import axios from "axios";
import moment from "moment";
import { CheckTokenError } from "./AuthenticationAction";
import config from "./config";
import { LoadedExpencesData } from "./ExpencesAction";

export const SaveInitialTrip = (token) => { // pass token for use token before saving

	return async (dispatch, getState) => { // get access to Redux

		const preLoginTrip = getState()?.main?.preLoginTrip; //get current state of preLoginTrip from redux
		if (!preLoginTrip.city) {
			return;
		}
		const preLoginTripData = {
			city: preLoginTrip.city,
			period: {
				from: preLoginTrip.dateFrom,
				to: preLoginTrip.dateTo,
			},
		};

		try {
			const result = await axios.post(
				"/trip/create",
				{ trip: preLoginTripData },
				{ headers: { "x-access-token": token } }
			);
			console.log(result);
            dispatch(SetAlertMessage(result?.data?.message, 'success'));
            

		} catch (error) {
			console.log(error);
			dispatch(CheckTokenError(error))
			dispatch(SetAlertMessage(error?.response?.data?.message));
		}
	};
};

export const SetAlertMessage = (alertMessage, alertSeverity = 'error') => {
	return {
		type: "SET_ALERT_MESSAGE",
		alertMessage,
        alertSeverity
	};
};

export const ChangePreLoginTripCity = (newCity) => {
	return {
		type: "CHANGE_PRELOGIN_TRIP_CITY",
		newCity,
	};
};

export const ChangePreLoginTripDateFrom = (newDateFrom) => {
	return {
		type: "CHANGE_PRELOGIN_TRIP_DATE_FROM",
		newDateFrom,
	};
};

export const ChangePreLoginTripDateTo = (newDateTo) => {
	return {
		type: "CHANGE_PRELOGIN_TRIP_DATE_TO",
		newDateTo,
	};
};

export const GetListTrips = () => {
	return async (dispatch, getState) => {
		dispatch({
			type: "SET_IS_LOADING_LIST_TRIPS",
			isLoadingListTrips: true,
		});

		try {
			const result = await axios.get("/trip/list-trips", config()); //config => header with access token
			let listTrips = result?.data?.listTrips; // recieve list trips

			dispatch({
				type: "LOADED_LIST_TRIPS", // save list trips
				listTrips,
			});
		} catch (error) {
			console.log(error);
			dispatch(CheckTokenError(error))
			dispatch(SetAlertMessage(error?.response?.data?.message));
		}
	};
};

export const AddNewTrip = (newCity) => {

	return async (dispatch, getState) => {

		const tripData = {
			city: newCity, // add city in trip
			period: {
				from: moment(),
				to: moment(),
			},
		};

		try {
			const result = await axios.post(
				"/trip/create",
				{ trip: tripData }, // 'trip:' from backend: ...req.body.trip,
				config() // header with access token
			);
			console.log(result);
            dispatch(SetAlertMessage(result?.data?.message, 'success'));
			dispatch(GetListTrips()); // get updated list trips

		} catch (error) {
			console.log(error);
			dispatch(CheckTokenError(error))
			dispatch(SetAlertMessage(error?.response?.data?.message));
		}
	};
};

export const DeleteTrip = (tripId) => {
	
	return async (dispatch, getState) => {
		dispatch({
			type: "SET_IS_LOADING_LIST_TRIPS",
			isLoadingListTrips: true,
		});

		try {
			const result = await axios.delete(
				`/trip/delete-trip?tripId=${tripId}`,
				config()
			);
            console.log(result.data)
            dispatch(SetAlertMessage(result?.data?.message, 'success'));
			dispatch(GetListTrips()); // get updated list trips

		} catch (error) {
			console.log(error)
			dispatch(CheckTokenError(error))
            dispatch(SetAlertMessage(error?.response?.data?.message))
		}
	};
};

export const SetIsLoadingTrip = (isLoadingTrip) => {
	return {
		type: "SET_IS_LOADING_TRIP",
		isLoadingTrip,
	};
};

export const GetTripData = (tripId) => {
	return async (dispatch, getState) => {
		dispatch({
			type: "SET_IS_LOADING_TRIP",
			isLoadingTrip: true,
		});

		try {
			const result = await axios.get(
				`/trip/trip-data?tripId=${tripId}`,
				config()
			);

			dispatch({
				type: "LOADED_TRIP_DATA",
				trip: result?.data?.trip ?? {},
			});

			dispatch(LoadedExpencesData(result?.data?.trip?.expences ?? []));

		} catch (error) {
			console.log(error)
			dispatch(CheckTokenError(error))
            dispatch(SetAlertMessage(error?.response?.data?.message))
		}
	};
};

export const UpdateTripData = (tripId, tripData) => {
	return async (dispatch, getState) => {
		try {
			const result = await axios.post(
				`/trip/trip-data?tripId=${tripId}`,
				{ trip: tripData },
				config()
			);
			console.log(result);

            dispatch(SetAlertMessage(result?.data?.message, 'success'));
			dispatch(GetTripData(tripId));

		} catch (error) {
			console.log(error)
			dispatch(CheckTokenError(error))
            dispatch(SetAlertMessage(error?.response?.data?.message))
		}
	};
};

export const SetFilterValue = (newFilterValue) => {
	return {
		type: "SET_FILTER_VALUE",
		newFilterValue
	};
};
