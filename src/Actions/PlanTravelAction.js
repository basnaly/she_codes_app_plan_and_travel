import axios from "axios";
import {
	getDatabase,
	child,
	push,
	ref,
	set,
	get,
	remove,
	update,
} from "firebase/database";

import moment from "moment";
import config from "./config";
import { LoadedExpencesData } from "./ExpencesAction";

export const SaveInitialTrip = (token) => {
	// pass token for use token before saving

	return async (dispatch, getState) => {
		// get access to Redux

		const preLoginTrip = getState().main.preLoginTrip; //get current state of preLoginTrip from redux
		if (!preLoginTrip.city) {
			return;
		}
		const tripData = {
			city: preLoginTrip.city,
			period: {
				from: preLoginTrip.dateFrom(),
				to: preLoginTrip.dateTo(),
			},
			transportations: [],
		};

		try {
			const result = await axios.post(
				"/trip/create",
				{ trip: tripData },
				{ headers: { "x-access-token": token } }
			);
			console.log(result);

		} catch (e) {
			console.log(e);
		}
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
			const result = await axios.get("/trip/list-trips", config); //config => header with access token
			let listTrips = result.data.listTrips; // recieve list trips

			dispatch({
				type: "LOADED_LIST_TRIPS", // save list trips
				listTrips,
			});

		} catch (e) {
			console.log(e);
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
            const addNewTrip = await axios.post(
				"/trip/create",
				{ trip: tripData }, // 'trip:' from backend: ...req.body.trip,
				config // header with access token
			);
                console.log(addNewTrip)
            dispatch(GetListTrips()); // get updated list trips
        }
        catch (e) {
			console.log(e);
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
            const deleteTrip = await axios.delete(
                `/trip/delete-trip?tripId=${tripId}`,
                config
            )
            dispatch(GetListTrips()); // get updated list trips
        }
        catch (e) {
			console.log(e);
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
	return (dispatch, getState) => {
		const db = getDatabase();

		const userId = getState().auth.userId;

		dispatch(SetIsLoadingTrip(true));

		get(ref(db, "trips/" + userId + "/" + tripId))
			.then((snapshot) => {
				// get from db/trips/userId

				if (snapshot.exists()) {
					// trip data

					dispatch({
						type: "LOADED_TRIP_DATA",
						trip: snapshot.val(), // save the snapshot value to redux
					});

					dispatch(LoadedExpencesData(snapshot.val().expences));
				} else {
					console.log("No data available");

					dispatch({
						// if not trip save in redux empty data
						type: "LOADED_TRIP_DATA",
						trip: {},
					});
				}
			})
			.catch((error) => {
				console.error(error);

				dispatch({
					// if was error during request save in redux empty data
					type: "LOADED_TRIP_DATA",
					trip: {},
				});
			});
	};
};

export const SaveTripData = (tripId, tripData) => {
	return (dispatch, getState) => {
		const db = getDatabase();

		const userId = getState().auth.userId; //

		update(ref(db, "trips/" + userId + "/" + tripId), tripData)
			.then(() => {
				// get from db/trips/userId

				dispatch(GetTripData(tripId));
			})
			.catch((error) => {
				console.error(error);
			});
	};
};
