import { createStore, combineReducers } from 'redux';
import LoginReducer from "./reducers/LoginReducer";
import EmployeeReducers from "./reducers/EmployeeReducers";

const rootReducer = combineReducers({
    LoginReducer,
    EmployeeReducers,
});

export default createStore(
    rootReducer,
);
