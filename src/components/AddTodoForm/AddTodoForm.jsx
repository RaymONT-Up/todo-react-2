import styles from "./AddTodoForm.module.css";

import Input from "../UI/Input/Input";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useContext, useRef } from "react";
import TodosContext from "../../store/todos-context.js/TodosContext";

const AddTodoForm = props => {
  const context = useContext(TodosContext);
  const taskNameRef = useRef();

  const submitTaskFormHandler = event => {
    event.preventDefault();

    const name = taskNameRef.current.value;
    const item = {
      id: Math.random(),
      name,
      isDone: false,
    };

    context.addItem(item);
  };

  return (
    <Card className={styles.card}>
      <form onSubmit={submitTaskFormHandler}>
        <Input
          ref={taskNameRef}
          className={styles.input}
          type="text"
          required
          min="1"
          placeholder="Write the task"
        />
        <Button onClick={submitTaskFormHandler}>Add task</Button>
      </form>
    </Card>
  );
};
export default AddTodoForm;
