import { NavLink } from "react-router-dom";
import svgIcons from "../../img/icons/user-member-avatar-people-image-photo.svg";
import svgIcons1 from "../../img/icons/symbol-defs.svg" 
import css from "./HomePage.module.css";

function HomePage() {
    return (
        <div className={css.homeDiv}>
            <h2 className={css.homeWelcome}>Welcome!</h2>
            <div className={css.homeLogo}>
                <NavLink to="/login">
                    <svg className={css.icon}>
                        <use xlinkHref={`${svgIcons1}#icon-user-member-avatar-people-image-photo`}></use>
                    </svg>
                </NavLink>
            </div>
            <p className={css.homeP}>Here,
                you can easily store, organize, and access all your contacts in one secure place.
            </p>
        </div>    
    )
}

export default HomePage;