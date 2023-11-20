import React from "react";

import classes from "./Input.css";

const Input = (props) => {
    return <input className={classes.input} {...props} />;
};

export default Input;