import styles from "./TodoItemModal.module.css";
import ModalWindow from "../../../UI/ModalWindow/ModalWindow";
import Checkbox from "../../../UI/Checkbox/Checkbox";

const TodoItemModal = props => {
  return (
    <ModalWindow onClose={props.onClose}>
      <div className={styles.wrapper}>
        <h5 className={styles.title}>{props.name}</h5>
        <Checkbox onChange={props.onChange} value={props.value} />;
        <div className={styles.line}></div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </ModalWindow>
  );
};
export default TodoItemModal;
