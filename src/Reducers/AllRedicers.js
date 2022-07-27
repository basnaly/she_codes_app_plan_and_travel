import { combineReducers } from "redux";
import AuthenticationReducer from "./AuthenticationReducer";
import PlanTravelReducer from "./PlanTravelReducer";
import ExpencesReducer from "./ExpencesReducer";

const AllReducers = combineReducers({
    auth: AuthenticationReducer,
    main: PlanTravelReducer,
    expences: ExpencesReducer,
});

export default AllReducers;