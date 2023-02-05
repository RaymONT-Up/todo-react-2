import styles from "./App.module.css";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To Do</h1>

      <AddTodoForm />

      <TodoList />
    </div>
  );
};

export default App;
