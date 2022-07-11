import { combineReducers } from "redux";
import AuthenticationReducer from "./AuthenticationReducer";
import PlanTravelReducer from "./PlanTravelReducer";

const AllReducers = combineReducers({
    auth: AuthenticationReducer,
    main: PlanTravelReducer,
});

export default AllReducers;