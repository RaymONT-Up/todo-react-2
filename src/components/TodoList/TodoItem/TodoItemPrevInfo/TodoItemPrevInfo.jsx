import { useEffect, useRef, useState } from "react";
import styles from "./TodoItemPrevInfo.module.css";

const TodoItemPrevInfo = props => {
  // const itemInfoRef = useRef();
  // const [itemInfoWidth, setItemInfoWidth] = useState(null);

  // useEffect(() => {
  //   document.getElementsByClassName(styles.item__info).forEach(item => {

  //   })
  // }, [itemInfoRef, itemInfoWidth]);
  // console.log(itemInfoWidth);

  return (
    <div
      // ref={itemInfoRef}
      onClick={props.onModalWindow}
      className={styles.item__info}
    >
      <h6 className={styles.item__name}>{props.name}</h6>
      <p className={styles.item__description}>{props.description}</p>
    </div>
  );
};
export default TodoItemPrevInfo;
