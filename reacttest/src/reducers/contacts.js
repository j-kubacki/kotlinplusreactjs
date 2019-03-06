export const contacts = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CONTACTS_SUCCESS':
            return [
                ...action.contacts
            ]
        default:
            return state
    }
}

export const fetching = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_CONTACTS_SUCCESS':
            return false
        case 'FETCH_IN_PROGRESS':
            return true
        default:
            return state
    }
}