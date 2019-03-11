import { createSelector } from 'reselect'

const getContacts = (state) => state.contacts
const getSearchText = (state) => state.contactsSearch

export const getFilteredContacts = createSelector(
    [ getContacts, getSearchText ],
    (contacts, text) => {
        const contactsSearch = text.toLowerCase();
        return contacts.filter(contact => {
            const { first, last } = contact.name;

            return (
                first.toLowerCase().includes(contactsSearch) ||
                last.toLowerCase().includes(contactsSearch)
            );
        });
    }
)