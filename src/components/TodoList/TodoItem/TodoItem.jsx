import styles from "./TodoItem.module.css";

const TodoItem = props => {
  console.log(props);
  return (
    <li>
      {props.name}
      {props.completed ? "Completed" : "Not Completed"}
    </li>
  );
};
export default TodoItem;
