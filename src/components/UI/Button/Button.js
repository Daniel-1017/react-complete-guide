import React from "react";

import styles from "./Button.module.css";

// It will create unique classes of all the styles for this component.

// We use css modules to keep our css in the css files and the js in js files

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
