import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import svgIcons from "../../img/icons/symbol-defs.svg";
import css from "./UserMenu.module.css";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

const styles = {
        icon: {
            fill: '#155ba0',
            transition: 'fill 0.3s ease',
        },
        iconHover: {
            fill: '#9c27b0',
            filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
        },
  };

    return (
        <div className={css.divLogout}>
            <p>Welcome, {user.name}</p>
                <NavLink to="/" className={css.navLink}>
                <svg className={css.icon}
                    style={styles.icon}
                    width="20"
                    height="20"
                    onClick={() => dispatch(logout())}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.fill = styles.iconHover.fill;
                        e.currentTarget.style.filter = styles.iconHover.filter;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.fill = styles.icon.fill;
                        e.currentTarget.style.filter = 'none'; 
                    }}
                >
                        <use xlinkHref={`${svgIcons}#icon-exit`}></use> {/* logout */}
                    </svg>
                </NavLink>
        </div>
    )
};

export default UserMenu;
