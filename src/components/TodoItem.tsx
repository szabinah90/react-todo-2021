import React from "react";
import { ITodo } from "../models/todo.interface";
import { Checkbox, ListItem, FormControlLabel } from "@material-ui/core";

// ha nem parentből akarom megkapni propssal, akkor connectelni kell a storet, mint a TodoList-ben
export const TodoItem: React.FC<{ todo: ITodo; updateTodo: any }> = ({
  todo,
  updateTodo,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo({ ...todo, completed: event.target.checked });
  };
  return (
    <ListItem button>
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
    </ListItem>
  );
};
