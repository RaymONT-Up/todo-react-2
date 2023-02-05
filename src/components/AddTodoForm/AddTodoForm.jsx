import styles from "./AddTodoForm.module.css";

const AddTodoForm = props => {
  const submitTaskFormHandler = event => {
    event.preventDefault();

    console.log("test");
  };

  return (
    <form onSubmit={submitTaskFormHandler}>
      <button type="submit">Add Task</button>
    </form>
  );
};
export default AddTodoForm;
