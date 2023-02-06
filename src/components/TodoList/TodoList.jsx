import { useContext } from "react";
import TodosContext from "../../store/todos-context.js/TodosContext";
import Card from "../UI/Card/Card";
import TodoItem from "./TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = props => {
  const context = useContext(TodosContext);
  const todoItems = context.items.map(item => {
    return (
      <TodoItem
        name={item.name}
        key={item.id}
        id={item.id}
        description={item.description}
        isDone={item.isDone}
      />
    );
  });

  return (
    <Card>
      <ul>
        {todoItems.length > 0 ? (
          todoItems
        ) : (
          <p className={styles.paragraph}>
            Task list is empty, please add tasks
          </p>
        )}
      </ul>
    </Card>
  );
};
export default TodoList;
