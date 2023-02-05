import styles from "./TodoItem.module.css";
import TodoItemPriority from "./TodoItemPriority/TodoItemPriority";
import TodoItemToggle from "./TodoItemToggle/TodoItemToggle";

const TodoItem = props => {
  console.log(props);
  return (
    <li className={styles.item}>
      <TodoItemPriority />
      <div className={styles.item__info}>
        <h6 className={styles.item__name}>{props.name}</h6>
        <p className={styles.item__description}>{props.description}</p>
      </div>
      <TodoItemToggle isDone={props.isDone} />
    </li>
  );
};
export default TodoItem;
