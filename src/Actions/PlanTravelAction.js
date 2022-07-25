import { getDatabase, child, push, ref, set, get, remove, update } from "firebase/database";

import moment from "moment";


export const SaveInitialTrip = (userId) => {

    return (dispatch, getState) => {  // get access to Redux

        const preLoginTrip = getState().main.preLoginTrip; //get current state of preLoginTrip from redux
        if (!preLoginTrip.city) {
            return
        }
        const tripData = {  // create trip data in firebase format 
            city: preLoginTrip.city,
            period: {
                from: preLoginTrip.dateFrom.unix(),
                to: preLoginTrip.dateTo.unix()
            },
            transportations: []
        };

        const db = getDatabase();

        const newTripId = push(child(ref(db), 'trips/' + userId)).key; // create the trip doc and gets it id

        set(ref(db, 'trips/' + userId + '/' + newTripId), tripData) // set tripDate in newTripId
            .then(() => { // result not use yet

            })
            .catch((error) => {
                console.log(error)
            });
    }
}

export const ChangePreLoginTripCity = (newCity) => {
    return {
        type: 'CHANGE_PRELOGIN_TRIP_CITY',
        newCity
    }
}

export const ChangePreLoginTripDateFrom = (newDateFrom) => {
    return {
        type: 'CHANGE_PRELOGIN_TRIP_DATE_FROM',
        newDateFrom
    }
}

export const ChangePreLoginTripDateTo = (newDateTo) => {
    return {
        type: 'CHANGE_PRELOGIN_TRIP_DATE_TO',
        newDateTo
    }
}

export const GetCityData = () => {

    return (dispatch, getState) => {

        const dbRef = ref(getDatabase());

        const userId = getState().auth.userId;

        if (!userId) {
            return
        }

        dispatch({
            type: 'SET_IS_LOADING_CITIES',
            isLoadingCities: true
        })

        get(child(dbRef, `trips/${userId}`)).then((snapshot) => { // get from db/trips/userId

            if (snapshot.exists()) {      // city data
                console.log(snapshot.val());

                let objectCities = snapshot.val();

                let listCitiesId = Object.keys(objectCities)

                let listCities = listCitiesId.map(el => ({
                    id: el,
                    city: objectCities[el].city
                }))
                console.log(listCities)

                dispatch({  // save to Redux
                    type: 'LOADED_CITY_DATA', // including isLoading: false
                    cities: listCities
                })

            } else {
                console.log("No data available");

                dispatch({
                    type: 'LOADED_CITY_DATA',
                    cities: []
                })

            }
        }).catch((error) => {
            console.error(error);
        });
    }
}

export const AddNewCity = (newCity) => {

    return (dispatch, getState) => {

        const tripData = {
            city: newCity,
            period: {
                from: moment().unix(),
                to: moment().unix()
            },
            transportations: []
        };

        const userId = getState().auth.userId;

        const db = getDatabase();

        const newTripId = push(child(ref(db), 'trips/' + userId)).key;

        set(ref(db, 'trips/' + userId + '/' + newTripId), tripData) // 
            .then(() => {

                dispatch(GetCityData()) // call action to get updated list of cities 

            })
            .catch((error) => {
                console.log(error)
            });
    }
}

export const DeleteCity = (cityId) => {

    return (dispatch, getState) => {

        const userId = getState().auth.userId;

        const db = getDatabase();

        remove(ref(db, 'trips/' + userId + '/' + cityId))
            .then(() => {

                dispatch(GetCityData()) // call action to get updated list of cities 

            })
            .catch((error) => {
                console.log(error)
            });

    }
}

export const SetIsLoadingTrip = (isLoadingTrip) => {
    return {
        type: 'SET_IS_LOADING_TRIP',
        isLoadingTrip
    }
}

export const GetTripData = (tripId) => {

    return (dispatch, getState) => {

        const db = getDatabase();

        const userId = getState().auth.userId;

        dispatch(SetIsLoadingTrip(true))

        get(ref(db, 'trips/' + userId + '/' + tripId))

            .then((snapshot) => { // get from db/trips/userId

                if (snapshot.exists()) {      // trip data

                    dispatch({
                        type: 'LOADED_TRIP_DATA',
                        trip: snapshot.val() // sve the snapshot value to redux
                    })

                } else {
                    console.log("No data available");

                    dispatch({   // if not trip save in redux empty data
                        type: 'LOADED_TRIP_DATA',
                        trip: {}
                    })
                }
            }).catch((error) => {
                console.error(error);

                dispatch({  // if was error during request save in redux empty data
                    type: 'LOADED_TRIP_DATA',
                    trip: {}
                })
            });
    }
}

export const SaveTripData = (tripId, tripData) => {

    return (dispatch, getState) => {

        const db = getDatabase();

        const userId = getState().auth.userId; //

        update(ref(db, 'trips/' + userId + '/' + tripId), tripData)

            .then(() => { // get from db/trips/userId

                dispatch(GetTripData(tripId))

            }).catch((error) => {
                console.error(error);

            });
    }
}


