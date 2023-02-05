import styles from "./App.module.css";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo list</h1>
      <h2 className={styles.subtitle}>
        Don't forget tasks - write them down in
        <span className={styles.subtitle__accent}> TodoList</span>
      </h2>
      <TodoList />
    </div>
  );
};

export default App;
