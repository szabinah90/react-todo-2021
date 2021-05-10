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
      return { ...state, items: [] };
    case TODOS.RESOLVE_TODOS:
      return {
        ...state,
        items: [...action.payload],
      };
    case TODOS.RESOLVE_TODO:
      const filteredItems = state.items.filter(
        (i) => action.payload.id !== i.id
      );
      const newState = {
        ...state,
        items: [...filteredItems, action.payload],
      };
      return newState;
    case TODOS.CREATE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};
export default todoReducer;
