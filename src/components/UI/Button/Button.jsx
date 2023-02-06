import styles from "./Button.module.css";

const Button = props => {
  const classes = `${styles.button} ${
    !!props.className ? props.className : ""
  }`;

  return (
    <button {...props} className={classes}>
      {props.children}
    </button>
  );
};
export default Button;
