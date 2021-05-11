import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import List from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import Search from "./components/Search/Search";
import { Container } from "@material-ui/core";

function App() {
  return (
    <StylesProvider injectFirst>
      <Container maxWidth="lg">
        <Search />
        <List />
        <AddTodo />
      </Container>
    </StylesProvider>
  );
}

export default App;
