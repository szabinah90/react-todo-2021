import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { ITodo } from "../../models/todo.interface";
import { IconButton } from "@material-ui/core";
import { Check, Clear } from "@material-ui/icons";
import { Form, TextField } from "./TodoItemEdit.styled";

const validation = yup.object({
  todoTitle: yup.string().max(50, "Max 50 characters").required("Required"),
});

export const UpdateTodo: React.FC<{
  todo: ITodo;
  setEditMode: any;
  updateTodo: any;
}> = ({ todo, updateTodo, setEditMode }) => {
  const formik = useFormik({
    initialValues: { todoTitle: todo.title },
    validationSchema: validation,
    onSubmit: (value) => {
      console.log("on submit");
      updateTodo({ ...todo, title: value.todoTitle });
      setEditMode(false);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <TextField
        name="todoTitle" /* FONTOS, HOGY ÚGY LEGYEN ELNEVEZVE, MINT AZ INITAL VALUESBEN A KULCS */
        label="Edit Todo"
        value={formik.values.todoTitle}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.todoTitle)}
        helperText={formik.errors.todoTitle}
      />
      <div>
        <IconButton color="primary" aria-label="add" type="submit">
          <Check />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="add"
          type="button"
          onClick={() => setEditMode(false)}
        >
          <Clear />
        </IconButton>
      </div>
    </Form>
  );
};
