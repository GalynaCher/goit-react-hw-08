import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom"
import { selectIsLoggedIn } from "../../redux/auth/selectors";

function Navigation() {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const location = useLocation();
    console.log("location",location);

    return (
        <nav>
            {location.pathname !== '/' && (
                <NavLink to="/">
                    Home
                </NavLink>
            )}               
                {isLoggedIn && <NavLink to="/contacts"></NavLink>} {/* Contacts */}
            </nav>
    )
}

export default Navigation;
