import { createStore, combineReducers } from 'redux';
import LoginReducer from "./reducers/LoginReducer";

const rootReducer = combineReducers({
    LoginReducer,
});

export default createStore(
    rootReducer,
);
