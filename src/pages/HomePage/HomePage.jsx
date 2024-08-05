import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

function HomePage() {

    return (
        <div className={css.homeDiv}>
            {/* <h2 className={css.homeWelcome}>Welcome!</h2> */}
            <div className={css.homeLogo}>
                <NavLink to="/login">
                    Contact Book
                </NavLink>
            </div>
            <p className={css.homeP}>Here,
                you can easily store, organize, and access all your contacts in one secure place.
            </p>
        </div>    
    )
}

export default HomePage;