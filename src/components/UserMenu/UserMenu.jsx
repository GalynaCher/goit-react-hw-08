import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { IoExit } from "react-icons/io5";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={css.divLogout}>
            <p>Welcome, {user.name}</p>
                <NavLink to="/" className={css.navLink} onClick={() => dispatch(logout())}>
                    <IoExit className={css.icon} />
                </NavLink>
        </div>
    )
};

export default UserMenu;
