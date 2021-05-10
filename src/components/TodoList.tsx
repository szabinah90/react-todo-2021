import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IRootReducer } from "../redux/reducers";
// import { getTodos } from "../redux/actions/todos.action";
import { getTodos, updateTodo } from "../redux/actions/thunks";
import { ITodo } from "../models/todo.interface";
import { List } from "@material-ui/core";
import { TodoItem } from "./TodoItem";
import { sortedTodos } from "../redux/selectors/todos.selectors";

export const TodoList: React.FC<{
  todos: ITodo[];
  getTodos: any;
  updateTodo: any;
}> = ({ todos, getTodos, updateTodo }) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]); // ezt nem muszáj, csak warningolt; egyszer fut meg, mert a fgv ref-je nem fog változni
  return (
    <List component="nav">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} />
      ))}
    </List>
  );
};

// @ts-ignore
const mapStateToProps = (state: IRootReducer) => {
  const { todo } = state;
  // ez azért kell, hogy ne a reducerben rendezzünk, mert a statehez nem nyúlunk így
  // szelektorokba szervezzük a logikát
  // több szelektor kombinálásához RESELECt
  return { todos: sortedTodos(todo) };
};

// @ts-ignore

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodos()),
    updateTodo: (todo: ITodo) => dispatch(updateTodo(todo)),
  };
  // amíg nem volt Thunk, addig közvetlenül dispatcheltünk: return { getTodos: () => dispatch(getTodos) }
  // mostmár csak akkor, ha lefutott az async hívás (dispatch a mapDispatchToProps paramétere)
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
