export const contactsFetched = (contacts) => ({
    type: 'FETCH_CONTACTS_SUCCESS',
    contacts
});

export const contactsFetching = () => ({
    type: 'FETCH_IN_PROGRESS'
});