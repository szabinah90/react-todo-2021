import React, { useState } from "react";
import { ITodo } from "../../models/todo.interface";
import { TodoItemView } from "../TodoItemView/TodoItemView";
import { ListItem } from "./TodoItem.styled";
import { UpdateTodo } from "../TodoItemEdit/TodoItemEdit";

// ha nem parentből akarom megkapni propssal, akkor connectelni kell a storet, mint a TodoList-ben
export const TodoItem: React.FC<{
  todo: ITodo;
  updateTodo: any;
  deleteTodo: any;
}> = (props) => {
  const [editMode, setEditMode] = useState<true | false>(false);
  return (
    <ListItem button>
      {editMode ? (
        <UpdateTodo
          todo={props.todo}
          updateTodo={props.updateTodo}
          setEditMode={setEditMode}
        />
      ) : (
        // spreadeli a propsokat, tudni fogja, hogy melyik-melyik, mert egyformán van elnevezve
        <TodoItemView {...props} setEditMode={setEditMode} />
      )}
    </ListItem>
  );
};
