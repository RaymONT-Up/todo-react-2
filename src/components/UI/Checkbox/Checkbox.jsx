import styles from "./Checkbox.module.css";
const Checkbox = props => {
  const classes = `${styles.checkbox} ${
    !!props.className ? props.className : ""
  }`;

  return (
    <input
      className={classes}
      checked={props.value}
      onChange={props.onChange}
      type="checkbox"
    />
  );
};
export default Checkbox;
