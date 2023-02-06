import React from "react";
import styles from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  const classes = `${styles.input} ${!!props.className ? props.className : ""}`;

  return <input ref={ref} {...props} className={classes} />;
});

export default Input;
