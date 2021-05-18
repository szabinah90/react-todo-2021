import { IconButton } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { createTodo } from "../../redux/actions/thunks";
import { ITodo } from "../../models/todo.interface";
import { connect } from "react-redux";
import { Form, TextField } from "./AddTodo.styled";

const validation = yup.object({
  newTodo: yup.string().max(50, "Max 50 characters").required("Required"),
});

export const AddTodo: React.FC<{ createTodo: any }> = ({ createTodo }) => {
  const formik = useFormik({
    initialValues: { newTodo: "" },
    validationSchema: validation,
    onSubmit: (value) => {
      console.log("BUTTON createTodo");
      createTodo({ title: value.newTodo, completed: false });
      formik.resetForm();
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <TextField
        id="todo"
        name="newTodo" /* FONTOS, HOGY ÚGY LEGYEN ELNEVEZVE, MINT AZ INITAL VALUESBEN A KULCS */
        label="New Todo"
        value={formik.values.newTodo}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.newTodo)}
        helperText={formik.errors.newTodo}
      />
      <IconButton color="primary" aria-label="add" type="submit">
        <AddCircle />
      </IconButton>
    </Form>
  );
};

// @ts-ignore
const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (todo: ITodo) => dispatch(createTodo(todo)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
