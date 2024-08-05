import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = state => state.contacts.items; // Contacts selector

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const filteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        const selector = contacts.filter(contact => 
            contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.number.includes(filter)
        );
        // console.log("selector", selector);
    return selector;
})