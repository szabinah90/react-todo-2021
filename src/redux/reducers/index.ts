import { combineReducers } from 'redux'
import todoReducer, {ITodoReducer} from "./todos.reducer";

export interface IRootReducer {
    todo: ITodoReducer;
}

const rootReducer = combineReducers({
    todo: todoReducer
});

export default rootReducer
