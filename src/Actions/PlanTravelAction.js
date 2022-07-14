import { getDatabase, child, push, ref, set, get, remove, update } from "firebase/database";
import { getAuth } from 'firebase/auth';
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
        const auth = getAuth(); 
        console.log(auth.currentUser)
        
        if (!auth.currentUser) { 
            return
        }

        dispatch({
            type: 'SET_IS_LOADING',
            isLoading: true
        })

        const userId = auth.currentUser.uid; // take userId and save
        get(child(dbRef, `trips/${userId}`)).then((snapshot) => { // get from db/trips/userId
            if (snapshot.exists()) {      // city data
                console.log(snapshot.val());

                let objectCities = snapshot.val();
                console.log(objectCities)

                let listCitiesId = Object.keys(objectCities)
                console.log(listCitiesId)

                let listCities = listCitiesId.map(el => ({
                    id: el,
                    city: objectCities[el].city
                }))
                console.log(listCities)

                dispatch({  // save to Redux
                    type: 'GET_CITY_DATA', // including isLoading: false
                    cities: listCities
                })

            } else {
                console.log("No data available");

                dispatch({
                    type: 'GET_CITY_DATA',
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
