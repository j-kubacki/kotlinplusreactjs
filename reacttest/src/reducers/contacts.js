export const contacts = (state = { fetching: false, contacts: []}, action) => {
    switch (action.type) {
        case 'FETCH_CONTACTS_SUCCESS':
            return Object.assign({}, state, {
                fetching: false,
                contacts: action.contacts
            })
            //return [false, ...action.contacts]
        case 'FETCH_IN_PROGRESS':
            return [true]
        default:
            return state
    }
}