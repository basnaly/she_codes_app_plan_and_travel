import moment from "moment";

const initState = {
    preLoginTrip: {
        city: '',
        dateFrom: moment(),
        dateTo: moment(),
    },
    cities: [], // [{id:'jjj', city:'new jersey'}]
    isLoadingCities: false,
    error: '',
    trip: {},
    isLoadingTrip: false,   
}

const PlanTravelReducer = (state = initState, action) => {
    switch (action.type) {

        case 'SAVE_INITIAL_TRIP':
            return {
                ...state,
                preLoginTrip: action.preLoginTrip
            }

        case 'CHANGE_PRELOGIN_TRIP_CITY':
            return {
                ...state,
                preLoginTrip: {
                    ...state.preLoginTrip,
                    city: action.newCity
                }
            }

        case 'CHANGE_PRELOGIN_TRIP_DATE_FROM':
            return {
                ...state,
                preLoginTrip: {
                    ...state.preLoginTrip,
                    dateFrom: action.newDateFrom
                }
            }

        case 'CHANGE_PRELOGIN_TRIP_DATE_TO':
            return {
                ...state,
                preLoginTrip: {
                    ...state.preLoginTrip,
                    dateTo: action.newDateTo
                }
            }

        case 'SET_IS_LOADING_CITIES':
            return {
                ...state,
                isLoadingCities: action.isLoadingCities
            }

        case 'LOADED_CITY_DATA':
            return {
                ...state,
                cities: action.cities,
                isLoadingCities: false
            }

        case 'SET_IS_LOADING_TRIP':
            return {
                ...state,
                isLoadingTrip: action.isLoadingTrip
            }

        case 'LOADED_TRIP_DATA':
            return {
                ...state,
                trip: action.trip,
                isLoadingTrip: false
            }

        default:
            return state
    }
}

export default PlanTravelReducer;
