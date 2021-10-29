import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Lara Croft",
                email: "lcroft@gmail.com",
                phone: "123-333-123", 
                type:"personal"
            }, 
            {
                id: 2,
                name: "Mark Leric",
                email: "ml@gmail.com",
                phone: "333-333-333", 
                type:"personal"
            },
            {
                id: 3,
                name: "Victor Smith",
                email: "victors@gmail.com",
                phone: "777-333-333", 
                type: "professional"
            },
        ] 
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add contact
    const addContact = contact => {
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    //Delete contact

    //Set current contacft

    //Clear current contact

    //Update contact

    //Filter contact

    //Clear filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            addContact
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;