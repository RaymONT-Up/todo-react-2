import styles from "./TodoItemToggle.module.css";

const TodoItemToggle = props => {
  console.log(props);

  return (
    <button className={styles.button}>
      {props.isDone ? "done" : "not done"}
    </button>
  );
};
export default TodoItemToggle;
