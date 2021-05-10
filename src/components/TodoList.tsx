import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IRootReducer } from "../redux/reducers";
// import { getTodos } from "../redux/actions/todos.action";
import { deleteTodo, getTodos, updateTodo } from "../redux/actions/thunks";
import { ITodo } from "../models/todo.interface";
import { Grid, List } from "@material-ui/core";
import { TodoItem } from "./TodoItem/TodoItem";
import {
  completedTodos,
  uncompletedTodos,
} from "../redux/selectors/todos.selectors";

export const TodoList: React.FC<{
  todos: { completed: ITodo[]; uncompleted: ITodo[] };
  getTodos: any;
  updateTodo: any;
  deleteTodo: any;
}> = ({ todos, getTodos, updateTodo, deleteTodo }) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]); // ezt nem muszáj, csak warningolt; egyszer fut meg, mert a fgv ref-je nem fog változni
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <List>
          {todos.uncompleted.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </List>
      </Grid>
      <Grid item xs={6}>
        <List component="nav">
          {todos.completed.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

// @ts-ignore
const mapStateToProps = (state: IRootReducer) => {
  const { todo } = state;
  // ez azért kell, hogy ne a reducerben rendezzünk, mert a statehez nem nyúlunk így
  // szelektorokba szervezzük a logikát
  // több szelektor kombinálásához RESELECT
  return {
    todos: {
      completed: completedTodos(todo),
      uncompleted: uncompletedTodos(todo),
    },
  };
};

// @ts-ignore

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodos()),
    updateTodo: (todo: ITodo) => dispatch(updateTodo(todo)),
    deleteTodo: (id: number) => dispatch(deleteTodo(id)),
  };
  // amíg nem volt Thunk, addig közvetlenül dispatcheltünk: return { getTodos: () => dispatch(getTodos) }
  // mostmár csak akkor, ha lefutott az async hívás (dispatch a mapDispatchToProps paramétere)
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
