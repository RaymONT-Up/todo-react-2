import styles from "./AddTodoForm.module.css";

import Input from "../UI/Input/Input";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useContext, useRef } from "react";
import TodosContext from "../../store/todos-context.js/TodosContext";
import Textarea from "../UI/Textarea/Textarea";

const AddTodoForm = props => {
  const context = useContext(TodosContext);

  const taskNameRef = useRef();
  const taskDescriptionRef = useRef();

  const submitTaskFormHandler = event => {
    event.preventDefault();

    const name = taskNameRef.current.value;
    const description = taskDescriptionRef.current.value;
    if (name.trim().length > 0) {
      const item = {
        id: Math.random(),
        name,
        description,
        isDone: false,
      };

      context.addItem(item);
    }
    return;
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
          placeholder="Task name"
        />
        <Textarea
          ref={taskDescriptionRef}
          className={styles.textarea}
          placeholder="Task description"
        ></Textarea>
        <Button onClick={submitTaskFormHandler}>Add task</Button>
      </form>
    </Card>
  );
};
export default AddTodoForm;
