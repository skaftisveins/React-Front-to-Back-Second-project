import React, { useReducer } from "react";
import uuid from "";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jill@gmail.com",
        phone: "111-111-1111",
        type: "personal"
      },
      {
        id: 2,
        name: "Bill Johnson",
        email: "bill@gmail.com",
        phone: "111-111-1112",
        type: "personal"
      },
      {
        id: 3,
        name: "Gill Johnson",
        email: "gill@gmail.com",
        phone: "111-111-1113",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
