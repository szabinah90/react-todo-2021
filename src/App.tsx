import React from "react";
import List from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <AddTodo />
      <List />
    </>
  );
}

export default App;
