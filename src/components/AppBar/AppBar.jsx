import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <header>
            <Navigation />
          {  isLoggedIn && <UserMenu />}
        </header>
    )
};

export default AppBar;