import Card from "../Card/Card";
import ReactDom from "react-dom";
import styles from "./ModalWindow.module.css";

const portalId = document.getElementById("ModalWindow");

const Modal = props => {
  console.log("2", props);

  return (
    <div className={styles.wrapper}>
      <Card className={styles["modal-window"]}> {props.children}</Card>
      <div onClick={props.onClose} className={styles.background}></div>
    </div>
  );
};

const ModalWindow = props => {
  console.log("1", props);
  return ReactDom.createPortal(
    <Modal onClose={props.onClose} {...props} />,
    portalId
  );
};
export default ModalWindow;
