import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import style from "./TodoList.module.scss";

const TodoList = ({ todoList, deleteTodoItem, updateEditedTodoItem }) => {
  const onDeleteTodoItem = (id) => {
    deleteTodoItem(id);
  };

  const updateTodoItemDescription = (id, newItemDescription) => {
    updateEditedTodoItem(id, newItemDescription);
  };

  return (
    <div className={style.todoListContainer}>
      <Card>
        <CardContent>
          <List>
            {todoList.map((todoItem) => (
              <TodoItem
                todoItem={todoItem}
                key={todoItem.id}
                deletetodoItem={onDeleteTodoItem}
                updateTodoItem={updateTodoItemDescription}
              />
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoList;
