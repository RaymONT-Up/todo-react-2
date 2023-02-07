import { useState } from "react";
import styles from "./TodoItem.module.css";
import TodoItemPrevInfo from "./TodoItemPrevInfo/TodoItemPrevInfo";
import TodoItemPriority from "./TodoItemPriority/TodoItemPriority";
import TodoItemToggle from "./TodoItemToggle/TodoItemToggle";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import TodoItemModal from "./TodoItemModal/TodoItemModal";
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
          isDone={props.isDone}
        />
      )}
      <TodoItemPriority />
      <TodoItemPrevInfo
        onModalWindow={modalWindowHandler}
        name={props.name}
        description={props.description}
      />
      <TodoItemToggle isDone={props.isDone} />
    </li>
  );
};
export default TodoItem;
