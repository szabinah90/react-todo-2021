import { Checkbox, FormControlLabel, IconButton } from "@material-ui/core";
import { Clear, Edit } from "@material-ui/icons";
import React from "react";
import { ITodo } from "../../models/todo.interface";

export const TodoItemView: React.FC<{
  todo: ITodo;
  updateTodo: any;
  deleteTodo: any;
  setEditMode: any;
}> = ({ todo, updateTodo, deleteTodo, setEditMode }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo({ ...todo, completed: event.target.checked });
  };
  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };
  const handleEditClick = () => {
    setEditMode(true);
  };
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={todo.completed}
            onChange={handleChange}
            name="todoComplete"
            color="primary"
          />
        }
        label={todo.title}
      />
      <div>
        <IconButton
          color="primary"
          aria-label="edit"
          type="button"
          onClick={handleEditClick}
        >
          <Edit />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="delete"
          type="button"
          onClick={handleDeleteClick}
        >
          <Clear />
        </IconButton>
      </div>
    </>
  );
};
