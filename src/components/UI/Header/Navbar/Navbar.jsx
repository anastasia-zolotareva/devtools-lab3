import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
/**
 * Навигация
 * 
 * @param {any} props - параметры, передаваемые из родительского элемента
 * @return {import("react").DOMElement}
 */
const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <Link to="/">Главная</Link>
            <Link to="/services">Впечатления</Link>
            <Link to="/aboutus">Информация</Link>
        </div>
    )
}

export default Navbar;