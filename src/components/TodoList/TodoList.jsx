import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import style from "./TodoList.module.scss";

const TodoList = ({ todoList, deleteTodoItem }) => {
  const onDeleteTodoItem = (id) => {
    deleteTodoItem(id);
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
              />
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoList;
