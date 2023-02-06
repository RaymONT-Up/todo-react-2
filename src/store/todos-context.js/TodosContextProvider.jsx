import { useReducer } from "react";
import TodosContext from "./TodosContext";

const ADD_ITEM = "ADD_ITEM";

const defaultTodosState = {
  items: [],
};

const TodosReducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    return {
      items: [...state.items, action.item],
    };
  }

  return defaultTodosState;
};

const TodosContextProvider = props => {
  const [todosState, dispatchTodosAction] = useReducer(
    TodosReducer,
    defaultTodosState
  );

  const addItemsHandler = item => {
    dispatchTodosAction({ type: ADD_ITEM, item });
  };

  const todosContext = {
    items: todosState.items,
    addItem: addItemsHandler,
  };

  return (
    <TodosContext.Provider value={todosContext}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
