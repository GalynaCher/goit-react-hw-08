import { NavLink } from "react-router-dom";
// import css from "./AuthNav.module.css";

const AuthNav = () => {
    return (
        <div>
           <NavLink to="/register">Registration   </NavLink> 
         <NavLink to="/login">Login</NavLink>
        </div>
    )
};

export default AuthNav;