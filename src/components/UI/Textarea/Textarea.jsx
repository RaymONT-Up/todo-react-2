import React from "react";
import styles from "./Textarea.module.css";

const Textarea = React.forwardRef((props, ref) => {
  const classes = `${styles.textarea} ${
    !!props.className ? props.className : ""
  }`;

  return (
    <textarea {...props} className={classes} ref={ref}>
      {props.children}
    </textarea>
  );
});
export default Textarea;
