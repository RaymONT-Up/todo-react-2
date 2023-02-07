// import styles from "./TodoItemCheckbox.module.css";

import Checkbox from "../../../UI/Checkbox/Checkbox";

const TodoItemCheckbox = props => {
  return <Checkbox onChange={props.onChange} value={props.value} />;
};
export default TodoItemCheckbox;
