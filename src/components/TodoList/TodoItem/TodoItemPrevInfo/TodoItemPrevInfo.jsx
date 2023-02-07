import styles from "./TodoItemPrevInfo.module.css";

const TodoItemPrevInfo = props => {
  return (
    <div onClick={props.onModalWindow} className={styles.item__info}>
      <h6 className={styles.item__name}>{props.name}</h6>
      <p className={styles.item__description}>{props.description}</p>
    </div>
  );
};
export default TodoItemPrevInfo;
