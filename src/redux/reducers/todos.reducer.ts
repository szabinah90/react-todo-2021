import { TODOS } from "../constants/todo.constants";
import { ITodo } from "../../models/todo.interface";

export interface ITodoReducer {
  items: ITodo[];
}

const initialState = {
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
    case TODOS.RESOLVE:
      return { ...state, items: [...action.payload] };
    default:
      return state;
  }
};
export default todoReducer;
