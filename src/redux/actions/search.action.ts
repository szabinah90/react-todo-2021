import { SEARCH } from "../constants/search.constants";

export const setKeyword = (keyword: string) => ({
  type: SEARCH.SET_KEYWORD,
  payload: keyword,
});
export const clearKeyword = () => ({ type: SEARCH.CLEAR_KEYWORD });
