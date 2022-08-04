import moment from "moment";

const initState = {
    preLoginTrip: {
        city: '',
        dateFrom: moment(),
        dateTo: moment(),
    },
    listTrips: [], // [{id:'jjj', city:'new jersey'}]
    isLoadingListTrips: false,
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

        case 'SET_IS_LOADING_LIST_TRIPS':
            return {
                ...state,
                isLoadingListTrips: action.isLoadingListTrips
            }

        case 'LOADED_LIST_TRIPS':
            return {
                ...state,
                listTrips: action.listTrips,
                isLoadingListTrips: false
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
