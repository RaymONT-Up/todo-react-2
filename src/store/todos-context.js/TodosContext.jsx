import React from "react";

const TodosContext = React.createContext({
  items: [],
  addItem: item => {},
});
export default TodosContext;
