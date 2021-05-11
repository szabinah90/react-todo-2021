import styled from "styled-components";
import { TextField as MuiTextField } from "@material-ui/core";

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TextField = styled(MuiTextField)`
  width: 300px;
`;
