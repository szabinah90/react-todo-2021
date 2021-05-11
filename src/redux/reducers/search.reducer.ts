import { SEARCH } from "../constants/search.constants";

export interface ISearchReducer {
  keyword: string;
}

const initialState: ISearchReducer = {
  keyword: "",
};

interface ISearchAction {
  type: SEARCH;
  payload?: string;
}

const searchReducer = (
  state: ISearchReducer = initialState,
  action: ISearchAction
) => {
  switch (action.type) {
    case SEARCH.SET_KEYWORD:
      return { keyword: action.payload };
    case SEARCH.CLEAR_KEYWORD:
      return { keyword: "" };
    default:
      return state;
  }
};
export default searchReducer;
