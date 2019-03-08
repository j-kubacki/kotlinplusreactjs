import { combineReducers } from "redux";
import { contacts, fetching, contactsSearch } from "./contacts";

export default combineReducers({
    contacts, fetching, contactsSearch
});