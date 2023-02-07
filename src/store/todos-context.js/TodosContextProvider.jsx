import { useReducer } from "react";
import TodosContext from "./TodosContext";

const ADD_ITEM = "ADD_ITEM";
const TOGGLE_ITEM_DONE = "TOGGLE_ITEM_DONE";

const defaultTodosState = {
  items: [],
};

const TodosReducer = (state, action) => {
  document.state = state;

  if (action.type === ADD_ITEM) {
    return {
      items: state.items.concat(action.item),
    };
  }
  if (action.type === TOGGLE_ITEM_DONE) {
    let updatedItemIndex = state.items.findIndex(item => item.id === action.id);

    const updateItem = {
      ...state.items[updatedItemIndex],
      isDone: !state.items[updatedItemIndex].isDone,
    };

    const updateState = [...state.items];
    updateState[updatedItemIndex] = updateItem;

    console.log(updateState);
    return { items: updateState };
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
  const toggleItemDoneHandler = id => {
    dispatchTodosAction({ type: TOGGLE_ITEM_DONE, id });
  };

  const todosContext = {
    items: todosState.items,
    addItem: addItemsHandler,
    toggleItemDone: toggleItemDoneHandler,
  };

  return (
    <TodosContext.Provider value={todosContext}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
