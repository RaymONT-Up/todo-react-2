import styles from "./Checkbox.module.css";
const Checkbox = props => {
  const classes = `${styles.label} ${!!props.className ? props.className : ""}`;

  return (
    <label className={classes}>
      <input
        className={styles.input}
        checked={props.value}
        onChange={props.onChange}
        type="checkbox"
      />
      <span className={styles.checkbox}></span>
    </label>
  );
};
export default Checkbox;
