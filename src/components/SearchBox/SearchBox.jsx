import { useSelector, useDispatch } from 'react-redux'; 
import { changeFilter } from '../../redux/filters/slice'; 
import { selectNameFilter } from '../../redux/filters/selectors';
import css from "./SearchBox.module.css";

const SearchBox = () => {
    const dispatch = useDispatch(); 
    const filter = useSelector(selectNameFilter); 

    const handleSearchChange = (e) => {
        console.log("e.target", e.target);
        dispatch(changeFilter(e.target.value));
        
    }

    return (
        <div className={css.searchDiv}>
            <p>Find contacts by name or number</p>
            <input
                type="text"
                value={filter} 
                onChange={handleSearchChange}
                className={css.searchInput}
            />
        </div>
    )
}

export default SearchBox;
