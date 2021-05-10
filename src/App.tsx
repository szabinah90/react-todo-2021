import React from "react";
import List from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { StylesProvider } from "@material-ui/core/styles";

function App() {
  return (
    <StylesProvider injectFirst>
      <AddTodo />
      <List />
    </StylesProvider>
  );
}

export default App;
