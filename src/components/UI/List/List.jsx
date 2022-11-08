import React from "react";
import classes from "./List.module.css";

const List = ({...props}) => {
    return (
        <div className={classes.list}>
            <div className={classes.element}>
                <p>element 1</p>
            </div>
            <div className={classes.element}>
                <p>element 2</p>
            </div>
            <div className={classes.element}>
                <p>element 3</p>
            </div>
            <div className={classes.element}>
                <p>element 4</p>
            </div>
            <div className={classes.element}>
                <p>element 5</p>
            </div>
        </div>
    )
}

export default List;