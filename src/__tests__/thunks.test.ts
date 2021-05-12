import * as thunks from "../redux/actions/thunks";
import * as actions from "../redux/actions/todos.action";
import { INewTodo, ITodo } from "../models/todo.interface";

const todos: ITodo[] = [
  {
    id: 0,
    title: "Buy food for Sam",
    completed: true,
  },
  {
    id: 1,
    title: "Start washing machine",
    completed: false,
  },
];
// @ts-ignore
describe("thunks", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();
  const api = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(() => {
    dispatch.mockReset();
    getState.mockReset();
    api.get.mockReset();
    api.post.mockReset();
    api.put.mockReset();
    api.delete.mockReset();
  });

  describe("set initial state", () => {
    test("it gets the full list of todos from the api", async () => {
      api.get.mockResolvedValue(todos);
      await thunks.getTodos()(dispatch, getState, { api });
      expect(api.get).toHaveBeenCalledTimes(1);
      expect(api.get).toHaveBeenNthCalledWith(1, "/todos");
      expect(dispatch).toHaveBeenCalledWith(actions.resolveTodosAction(todos));
    });
  });

  describe("addTodo", () => {
    test("it adds a todo item to the existing array", async () => {
      const newItem: INewTodo = { title: "Do dishes", completed: false };
      const resolvedItem: ITodo = { ...newItem, id: 2 };

      api.post.mockResolvedValue(resolvedItem);
      await thunks.createTodo(newItem)(dispatch, getState, { api });
      expect(api.post).toHaveBeenCalledTimes(1);
      expect(api.post).toHaveBeenNthCalledWith(1, "/todos", { body: newItem });
      expect(dispatch).toHaveBeenCalledWith(
        actions.addTodoAction(resolvedItem)
      );
    });
  });

  describe("updateTodo", () => {
    test("it updates a todo", async () => {
      const updatedItem: ITodo = { ...todos[1], title: "Updated Title" };

      api.put.mockResolvedValue(updatedItem);
      await thunks.updateTodo(updatedItem)(dispatch, getState, { api });
      expect(api.put).toHaveBeenCalledTimes(1);
      expect(api.put).toHaveBeenNthCalledWith(1, `/todos/${updatedItem.id}`, {
        body: updatedItem,
      });
      expect(dispatch).toHaveBeenCalledWith(
        actions.resolveTodoAction(updatedItem)
      );
    });
  });

  describe("deleteTodo", () => {
    test("it deletes a todo", async () => {
      const idToDelete: number = 1;

      await thunks.deleteTodo(idToDelete)(dispatch, getState, { api });
      expect(api.delete).toHaveBeenCalledTimes(1);
      expect(api.delete).toHaveBeenNthCalledWith(1, `/todos/${idToDelete}`);
      expect(dispatch).toHaveBeenCalledWith(
        actions.deleteTodoAction(idToDelete)
      );
    });
  });
});
