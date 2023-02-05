import Card from "../UI/Card/Card";
import TodoItem from "./TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const todoItemsInfo = [
  {
    id: "1",
    name: "Buy eggs",
    description: "But 2 eggs for my food",
    isDone: true,
  },
  {
    id: "2",
    name: "Buy bananas",
    description: "Banana is good for healthy",
    isDone: false,
  },
];

const TodoList = props => {
  const todoItems = todoItemsInfo.map(item => {
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
