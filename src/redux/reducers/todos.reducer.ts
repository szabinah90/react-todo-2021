import { TODOS } from "../constants/todo.constants";
import { ITodo } from "../../models/todo.interface";

export interface ITodoReducer {
  items: ITodo[];
}

const initialState: ITodoReducer = {
  items: [],
};

interface ITodoAction {
  type: TODOS;
  payload: any;
}

const todoReducer = (state = initialState, action: ITodoAction) => {
  switch (action.type) {
    case TODOS.GET:
      console.log("REDUCER GET");
      return { ...state, items: [] };
    case TODOS.RESOLVE_TODOS:
      console.log("REDUCER RESOLVE_TODOS");
      return {
        ...state,
        items: [...action.payload],
      };
    case TODOS.RESOLVE_TODO:
      console.log("REDUCER RESOLVE_TODO");
      const filteredItems = state.items.filter(
        (i) => action.payload.id !== i.id
      );
      const newState = {
        ...state,
        items: [...filteredItems, action.payload],
      };
      return newState;
    case TODOS.CREATE:
      console.log("REDUCER CREATE");
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case TODOS.DELETE:
      console.log("REDUCER DELETE");
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    default:
      return state;
  }
};
export default todoReducer;
