import {getAll} from "../api/ContactsApi";

export const contactsFetched = (contacts) => ({
    type: 'FETCH_CONTACTS_SUCCESS',
    contacts
});

export const contactsFetching = () => ({
    type: 'FETCH_IN_PROGRESS'
});

export const searchContacts = (text) => ({
    type: 'SEARCH_CONTACTS',
    text
});

export const changeSeed = seed => ({
    type: "CHANGE_SEED",
    seed
});

export const fetchContacts = () => (dispatch, getState) => {
    dispatch(contactsFetching());
    getAll("https://randomuser.me/api/?format=json&results=10&seed=", getState().seed)
        .then(contacts => dispatch(contactsFetched(contacts)));
};

export const changeSeedAndFetch = seed => dispatch => {
    dispatch(changeSeed(seed));
    dispatch(fetchContacts());
};