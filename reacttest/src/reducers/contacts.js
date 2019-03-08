const initialState = {
    contacts: [],
    fetching: false,
    contactsSearch: ''
}

export const contacts = (state = initialState.contacts, action) => {
    switch (action.type) {
        case 'FETCH_CONTACTS_SUCCESS':
            return [
                ...action.contacts
            ]
        default:
            return state
    }
}

export const fetching = (state = initialState.fetching, action) => {
    switch (action.type) {
        case 'FETCH_CONTACTS_SUCCESS':
            return false
        case 'FETCH_IN_PROGRESS':
            return true
        default:
            return state
    }
}

export const contactsSearch = (state = initialState.contactsSearch, action) => {
    switch (action.type) {
        case 'SEARCH_CONTACTS':
            return action.text;
        default:
            return state
    }
}