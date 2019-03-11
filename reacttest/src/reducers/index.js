import { combineReducers } from "redux";
import { contacts, fetching, contactsSearch, seed } from "./contacts";

export default combineReducers({
    contacts, fetching, contactsSearch, seed
});