import React from "react";
import classes from "./Footer.module.css";
/**
 * Подвал страницы
 * 
 * @param {any} props - параметры, передаваемые из родительского элемента
 * @return {import("react").DOMElement}
 */
const Footer = ({...props}) => {
    return (
        <div className={classes.footer}>
            <h2>Обратная связь</h2>
            <p>+7-999-999-99-99</p>
        </div>
    )
}

export default Footer;