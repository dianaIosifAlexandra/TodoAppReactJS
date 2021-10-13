import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import style from "./TodoList.module.scss";
import TodoContext from "../../store/TodoContext";

const TodoList = ({ todoList, listTitle }) => {
  const todoContext = useContext(TodoContext);
  const onDeleteTodoItem = (id) => {
    todoContext.deleteTodoItem(id);
  };

  const updateTodoItemDescription = (id, newItemDescription) => {
    todoContext.editTodoItem(id, newItemDescription);
  };

  const handleMarkAsDone = (id, event) => {
    todoContext.markTodoItemAsDone(id, event);
  };

  return (
    <div className={style.todoListContainer}>
      <Card>
        <div className={style.listTitle}>{listTitle}</div>
        <CardContent>
          <List>
            {todoList.map((todoItem) => (
              <TodoItem
                todoItem={todoItem}
                key={todoItem.id}
                deletetodoItem={onDeleteTodoItem}
                updateTodoItem={updateTodoItemDescription}
                markTodoItemAsDone={handleMarkAsDone}
                isDone={todoContext.todoItmeIsDone}
              />
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoList;
