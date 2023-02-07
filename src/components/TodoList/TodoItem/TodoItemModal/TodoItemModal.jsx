import styles from "./TodoItemModal.module.css";
import ModalWindow from "../../../UI/ModalWindow/ModalWindow";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import Line from "../../../UI/Line/Line";

const TodoItemModal = props => {
  return (
    <ModalWindow onClose={props.onClose}>
      <div className={styles.wrapper}>
        <button onClick={props.onClose} className={styles.close}>
          ✖
        </button>
        <h5 className={styles.title}>{props.name}</h5>
        <Line />

        <label className={styles.label}>
          Done:
          <Checkbox
            className={styles.checkbox}
            onChange={props.onChange}
            value={props.value}
          />
        </label>
        <Line />
        <div className={styles.description}>{props.description}</div>
      </div>
    </ModalWindow>
  );
};
export default TodoItemModal;
