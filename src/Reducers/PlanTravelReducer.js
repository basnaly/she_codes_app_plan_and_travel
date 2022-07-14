import moment from "moment";

const initState = {
    preLoginTrip: {
        city: '',
        dateFrom: moment(),
        dateTo: moment(),
    },
    isLoading: false,
    error: '',
    cities: [], // [{id:'jjj', city:'new jersey'}]
}

const PlanTravelReducer = (state = initState, action) => {
    switch (action.type) {

        case 'SAVE_INITIAL_TRIP':
            return {
                ...state,
                preLoginTrip: action.preLoginTrip
            }

        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
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

        case 'GET_CITY_DATA':
            return {
                ...state,
                cities: action.cities,
                isLoading: false
            }

        default:
            return state
    }
}

export default PlanTravelReducer;
