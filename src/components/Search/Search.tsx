import React from "react";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import { connect } from "react-redux";
import { clearKeyword, setKeyword } from "../../redux/actions/search.action";
import { IRootReducer } from "../../redux/reducers";
import { TextField } from "./Search.styled";

export const Search: React.FC<{
  keyword: string;
  setKeyword: any;
  clearKeyword: any;
}> = ({ keyword, setKeyword, clearKeyword }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  return (
    <TextField
      label="Search..."
      id="search"
      value={keyword}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              color="secondary"
              type="button"
              onClick={() => clearKeyword()}
            >
              <Clear />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

// @ts-ignore
const mapStateToProps = (state: IRootReducer) => ({
  keyword: state.search.keyword,
});
// @ts-ignore
const mapDispatchToProps = (dispatch) => {
  return {
    setKeyword: (searchValue: string) => dispatch(setKeyword(searchValue)),
    clearKeyword: () => dispatch(clearKeyword()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
