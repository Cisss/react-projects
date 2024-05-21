// Import CSS module for styling
import styling from "./Navigation.module.css";

import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={styling.navigation}>
            <span className={styling.logo}>
                <Link to="/">
                    <img alt="logo" src={require('../images/happy-cleaning-logo.png')}  width={200}/>
                </Link>
            </span>
            <h1 className={styling.title}>Choose a job</h1>
            <span className={styling.navButton}>
                <Link to="/list" className="button">My jobs</Link>
            </span>
        </nav>
    );
};

export default Navigation;