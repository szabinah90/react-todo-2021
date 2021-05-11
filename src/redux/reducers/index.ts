import { combineReducers } from "redux";
import todoReducer, { ITodoReducer } from "./todos.reducer";
import searchReducer, { ISearchReducer } from "./search.reducer";

export interface IRootReducer {
  todo: ITodoReducer;
  search: ISearchReducer;
}

const rootReducer = combineReducers({
  todo: todoReducer,
  search: searchReducer,
});

export default rootReducer;
