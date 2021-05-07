import { resolveTodos } from "./todos.action";
// a getTodos visszatér egy olyan függvénnyel, aminek a dispatch a paramétere
// (getState is lehet mellette, csak nem használjuk) -- Thunk middleware adja át őket
// dispatch típusát nem tudjuk
export const getTodos = () => async (
  // thunkból jön a dispatch
  dispatch: any,
  getState: any,
  { api }: any
) => {
  try {
    const response = await api.get("/todos");
    dispatch(resolveTodos(response));
  } catch (apiError) {
    console.error(apiError);
  }
};
