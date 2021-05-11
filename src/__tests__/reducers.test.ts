// @ts-ignore
import todoReducer, { ITodoReducer } from "../redux/reducers/todos.reducer";
import * as todoActions from "../redux/actions/todos.action";
import * as searchActions from "../redux/actions/search.action";
import searchReducer, {
  ISearchReducer,
} from "../redux/reducers/search.reducer";

const state: ITodoReducer = {
  items: [
    { id: 0, title: "1.todo", completed: false },
    { id: 1, title: "2. todo", completed: true },
  ],
};

describe("reducers", () => {
  describe("todos", () => {
    test("it returns an empty todo array after app init", () => {
      // @ts-ignore
      const nextState = todoReducer(undefined, { type: "@@redux/INIT" });
      expect(nextState).toEqual({ items: [] });
    });

    test("it resolves all todos", () => {
      const nextState = todoReducer(
        state,
        todoActions.resolveTodosAction(state.items)
      );
      expect(nextState.items).toHaveLength(2);
      // @ts-ignore
      expect(nextState.items).toContainEqual(...state.items);
    });

    test("it resolves/updates a todo", () => {
      const nextState = todoReducer(
        state,
        todoActions.resolveTodoAction({
          id: 0,
          title: "1. todo",
          completed: true,
        })
      );
      expect(nextState.items).toContainEqual({
        id: 0,
        title: "1. todo",
        completed: true,
      });
    });

    test("it adds a todo item", () => {
      const newState = todoReducer(
        state,
        todoActions.addTodoAction({ id: 2, title: "3. todo", completed: false })
      );
      expect(newState.items).toHaveLength(3);
    });

    test("it deletes a todo item", () => {
      const newState = todoReducer(state, todoActions.deleteTodoAction(0));
      expect(newState.items).toHaveLength(1);
      expect(newState.items[0].id).toEqual(1);
    });
  });

  describe("search", () => {
    test("it sets a search keyword", () => {
      const state: ISearchReducer = { keyword: "" };
      const newState = searchReducer(state, searchActions.setKeyword("keres"));
      expect(newState.keyword).toEqual("keres");
    });

    test("it clears the search keyword", () => {
      const state: ISearchReducer = { keyword: "keres" };
      const newState = searchReducer(state, searchActions.clearKeyword());
      expect(newState.keyword).toEqual("");
    });
  });
});
