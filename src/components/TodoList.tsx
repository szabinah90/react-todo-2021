import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IRootReducer } from "../redux/reducers";
// import { getTodos } from "../redux/actions/todos.action";
import { getTodos } from "../redux/actions/thunks";
import { ITodo } from "../models/todo.interface";
import { Checkbox, List, ListItem, ListItemText } from "@material-ui/core";

export const TodoList: React.FC<{ todos: ITodo[]; getTodos: any }> = ({
  todos,
  getTodos,
}) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]); // ezt nem muszáj, csak warningolt; egyszer fut meg, mert a fgv ref-je nem fog változni
  return (
    <List component="nav" aria-label="main mailbox folders">
      {todos.map((todo) => (
        <ListItem key={todo.id} button>
          <Checkbox />
          <ListItemText>{todo.title}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

// @ts-ignore
const mapStateToProps = (state: IRootReducer) => {
  const { todo } = state;
  return { todos: todo.items };
};

// @ts-ignore

const mapDispatchToProps = (dispatch) => {
  return { getTodos: () => dispatch(getTodos()) };
  // amíg nem volt Thunk, addig közvetlenül dispatcheltünk: return { getTodos: () => dispatch(getTodos) }
  // mostmár csak akkor, ha lefutott az async hívás (dispatch a mapDispatchToProps paramétere)
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
