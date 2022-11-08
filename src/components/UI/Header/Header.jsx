import React from "react";
import classes from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

const Header = ({...prop}) => {
    return(
        <div className={classes.header}>
            <div className={classes.title}>
                <h1>1703 ROOFS</h1>
                <p>Ваш неформальный гид по Санкт-Петербургу</p>
            </div>
            <Navbar />
        </div>
    )
}

export default Header;