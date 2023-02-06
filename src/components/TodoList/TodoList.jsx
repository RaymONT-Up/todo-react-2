import { useContext } from "react";
import TodosContext from "../../store/todos-context.js/TodosContext";
import Card from "../UI/Card/Card";
import TodoItem from "./TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const todoItemsInfo = [
  {
    id: "1",
    name: "Buy eggs",
    isDone: true,
  },
  {
    id: "2",
    name: "Buy bananas",
    isDone: false,
  },
];

const TodoList = props => {
  const context = useContext(TodosContext);
  debugger;
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
      <ul>{todoItems}</ul>
    </Card>
  );
};
export default TodoList;
