import { useState } from "react";
import styles from "./TodoItem.module.css";
import TodoItemPrevInfo from "./TodoItemPrevInfo/TodoItemPrevInfo";
import TodoItemPriority from "./TodoItemPriority/TodoItemPriority";
import TodoItemModal from "./TodoItemModal/TodoItemModal";
import TodoItemCheckbox from "./TodoItemCheckbox/TodoItemCheckbox";
const TodoItem = props => {
  const [modalWindowState, setModalWindowState] = useState(false);

  const modalWindowHandler = () => {
    setModalWindowState(prevState => !prevState);
  };

  return (
    <li className={styles.item}>
      {modalWindowState && (
        <TodoItemModal
          onClose={modalWindowHandler}
          name={props.name}
          description={props.description}
          onChange={props.onToggleItemDone}
          value={props.isDone}
        />
      )}
      <TodoItemPriority />
      <TodoItemPrevInfo
        onModalWindow={modalWindowHandler}
        name={props.name}
        description={props.description}
      />
      <TodoItemCheckbox
        onChange={props.onToggleItemDone}
        value={props.isDone}
      />
    </li>
  );
};
export default TodoItem;
