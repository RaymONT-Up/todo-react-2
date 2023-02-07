import styles from "./TodoItemModal.module.css";
import ModalWindow from "../../../UI/ModalWindow/ModalWindow";

const TodoItemModal = props => {
  return (
    <ModalWindow onClose={props.onClose}>
      <div className={styles.wrapper}>
        <h5 className={styles.title}>{props.name}</h5>
        <div className={styles.line}></div>
        <div className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          voluptatum ea saepe laborum provident perspiciatis dolor sequi itaque
          ipsum doloribus nemo magni maiores, molestiae omnis, iusto voluptatem
          cum delectus adipisci.Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Facere voluptatum ea saepe laborum provident
          perspiciatis dolor sequi itaque ipsum doloribus nemo magni maiores,
          molestiae omnis, iusto voluptatem cum delectus adipisci.Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Facere voluptatum ea
          saepe laborum provident perspiciatis dolor sequi itaque ipsum
          doloribus nemo magni maiores, molestiae omnis, iusto voluptatem cum
          delectus adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Facere voluptatum ea saepe laborum provident perspiciatis dolor
          sequi itaque ipsum doloribus nemo magni maiores, molestiae omnis,
          iusto voluptatem cum delectus adipisci.Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Facere voluptatum ea saepe laborum
          provident perspiciatis dolor sequi itaque ipsum doloribus nemo magni
          maiores, molestiae omnis, iusto voluptatem cum delectus
          adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Facere voluptatum ea saepe laborum provident perspiciatis dolor sequi
          itaque ipsum doloribus nemo magni maiores, molestiae omnis, iusto
          voluptatem cum delectus adipisci.Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Facere voluptatum ea saepe laborum
          provident perspiciatis dolor sequi itaque ipsum doloribus nemo magni
          maiores, molestiae omnis, iusto voluptatem cum delectus
          adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Facere voluptatum ea saepe laborum provident perspiciatis dolor sequi
          itaque ipsum doloribus nemo magni maiores, molestiae omnis, iusto
          voluptatem cum delectus adipisci.Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Facere voluptatum ea saepe laborum
          provident perspiciatis dolor sequi itaque ipsum doloribus nemo magni
          maiores, molestiae omnis, iusto voluptatem cum delectus
          adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Facere voluptatum ea saepe laborum provident perspiciatis dolor sequi
          itaque ipsum doloribus nemo magni maiores, molestiae omnis, iusto
          voluptatem cum delectus adipisci.Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Facere voluptatum ea saepe laborum
          provident perspiciatis dolor sequi itaque ipsum doloribus nemo magni
          maiores, molestiae omnis, iusto voluptatem cum delectus
          adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Facere voluptatum ea saepe laborum provident perspiciatis dolor sequi
          itaque ipsum doloribus nemo magni maiores, molestiae omnis, iusto
          voluptatem cum delectus adipisci. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Facere voluptatum ea saepe laborum
          provident perspiciatis dolor sequi itaque ipsum doloribus nemo magni
          maiores, molestiae omnis, iusto voluptatem cum delectus adipisci.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          voluptatum ea saepe laborum provident perspiciatis dolor sequi itaque
          ipsum doloribus nemo magni maiores, molestiae omnis, iusto voluptatem
          cum delectus adipisci. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Facere voluptatum ea saepe laborum provident
          perspiciatis dolor sequi itaque ipsum doloribus nemo magni maiores,
          molestiae omnis, iusto voluptatem cum delectus adipisci. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Facere voluptatum ea
          saepe laborum provident perspiciatis dolor sequi itaque ipsum
          doloribus nemo magni maiores, molestiae omnis, iusto voluptatem cum
          delectus adipisci. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Facere voluptatum ea saepe laborum provident perspiciatis dolor
          sequi itaque ipsum doloribus nemo magni maiores, molestiae omnis,
          iusto voluptatem cum delectus adipisci.Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Facere voluptatum ea saepe laborum
          provident perspiciatis dolor sequi itaque ipsum doloribus nemo magni
          maiores, molestiae omnis, iusto voluptatem cum delectus adipisci.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          voluptatum ea saepe laborum provident perspiciatis dolor sequi itaque
          ipsum doloribus nemo magni maiores, molestiae omnis, iusto voluptatem
          cum delectus adipisci.Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Facere voluptatum ea saepe laborum provident
          perspiciatis dolor sequi itaque ipsum doloribus nemo magni maiores,
          molestiae omnis, iusto voluptatem cum delectus adipisci.
        </div>
      </div>
    </ModalWindow>
  );
};
export default TodoItemModal;
