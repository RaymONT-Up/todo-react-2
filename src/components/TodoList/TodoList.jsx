import TodoItem from "./TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const todoItemsInfo = [
  { id: "1", name: "Buy eggs", completed: true },
  { id: "2", name: "Buy bananas", completed: false },
];

const TodoList = props => {
  const todoItems = todoItemsInfo.map(item => {
    return (
      <TodoItem
        name={item.name}
        key={item.id}
        id={item.id}
        completed={item.completed}
      />
    );
  });

  return (
    <div>
      <ul>{todoItems}</ul>
    </div>
  );
};
export default TodoList;
