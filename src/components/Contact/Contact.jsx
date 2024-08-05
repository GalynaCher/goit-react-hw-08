import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux"; 
import toast from 'react-hot-toast';
import { deleteContact } from "../../redux/contacts/operations"; 
import css from "./Contact.module.css";

export const Contact = ({ contact }) => { 

    const dispatch = useDispatch(); 

    const handleDelete = () => { 
        console.log("handleDelete >> contact", contact);
        dispatch(deleteContact(contact.id));
        toast.success (`Contact ${contact.name} successfully deleted!`);
    }

    return (
        <div className={css.contactDiv}>
            <div className={css.contactDivP}>
                <p>
                    <RiContactsFill style={{ marginRight: '8px' }} />
                    <span className={css.contactSpan}>{contact.name}</span>
                </p> 
                <p>
                    <FaPhoneAlt style={{marginRight: '8px'}} />
                    <span className={css.contactSpan}>{contact.number}</span>
                </p>
            </div>
            <button onClick={handleDelete}>Delete</button> 
        </div>
    )
}
