
import AppBar from "../AppBar/AppBar";
// import css from "./Layout.module.css";

const Layout = ({children}) => {
    return (
        <div>
            <AppBar />
            {children}
        </div>
    )
};

export default Layout;