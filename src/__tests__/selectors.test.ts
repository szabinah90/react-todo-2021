import { ITodoReducer } from "../redux/reducers/todos.reducer";
import * as selectors from "../redux/selectors/todos.selectors";

const state: ITodoReducer = {
  items: [
    { id: 0, title: "Első", completed: false },
    { id: 1, title: "Második", completed: true },
    { id: 2, title: "Harmadik", completed: false },
  ],
};

// @ts-ignore
describe("selectors", () => {
  describe("sortedTodos", () => {
    test("it returns all todos sorted descending by id", () => {
      const result = selectors.sortedTodos(state);
      expect(result[0].id).toEqual(2);
    });
  });

  describe("filteredTodos", () => {
    test("it returns a filtered array by a search keyword", () => {
      const result = selectors.filteredTodos({
        todo: state,
        search: { keyword: "ELSŐ" },
      });
      expect(result).toHaveLength(1);
      expect(result[0].id).toEqual(0);
    });
  });

  describe("completedTodos", () => {
    test("it returns only the completed todos (match)", () => {
      const result = selectors.completedTodos({
        todo: state,
        search: { keyword: "" },
      });
      expect(result).toHaveLength(1);
      expect(result[0].id).toEqual(1);
    });

    test("it returns only the completed todos (no match)", () => {
      const result = selectors.completedTodos({
        todo: state,
        search: { keyword: "ELSŐ" },
      });
      expect(result).toHaveLength(0);
    });
  });

  describe("uncompletedTodos", () => {
    test("it returns only the uncompleted todos (match)", () => {
      const result = selectors.uncompletedTodos({
        todo: state,
        search: { keyword: "" },
      });
      expect(result).toHaveLength(2);
    });

    test("it returns only the uncompleted todos (no match)", () => {
      const result = selectors.uncompletedTodos({
        todo: state,
        search: { keyword: "második" },
      });
      expect(result).toHaveLength(0);
    });
  });

  describe("completedTodosCount", () => {
    test("it returns the number of completed items", () => {
      const result = selectors.completedTodosCount({
        todo: state,
        search: { keyword: "" },
      });
      expect(result).toEqual(1);
    });
  });

  describe("uncompletedTodosCount", () => {
    test("it returns the number of completed items", () => {
      const result = selectors.uncompletedTodosCount({
        todo: state,
        search: { keyword: "" },
      });
      expect(result).toEqual(2);
    });
  });
});
