import React from "react";

const TodosContext = React.createContext({
  items: [],
  addItem: item => {},
  toggleItemDone: id => {},
});
export default TodosContext;
