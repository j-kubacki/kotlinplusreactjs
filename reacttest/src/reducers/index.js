import { combineReducers } from "redux";
import { contacts, fetching } from "./contacts";

export default combineReducers({
    contacts, fetching
});