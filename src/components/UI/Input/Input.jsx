import styles from "./Input.module.css";
const Input = props => {
  return (
    <input
      {...props}
      className={`${styles.input} ${!!props.className ? props.className : ""}`}
    />
  );
};
export default Input;
