import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { selectIsLoading, selectError } from "../../redux/contacts/selectors.js";
import { fetchContacts } from "../../redux/contacts/operations.js";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactPage.module.css";



function ContactsPage() {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
   
    return (
        <div >
            <div className={css.contactPageDiv}>
                <h2 className={css.contactPageH2}>Phonebook</h2>
                <ContactForm />
                <SearchBox />
            </div>
            {isLoading && !error && <p>Request in progress...</p>}
            <ContactList />
        </div>
    )
}

export default ContactsPage;