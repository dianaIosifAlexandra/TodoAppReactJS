import React, { useContext } from "react";
import TodoList from "../../components/TodoList/TodoList";
import TodoContext from "../../store/TodoContext";

import style from "./MyList.module.scss";

const MyList = () => {
  const todoContext = useContext(TodoContext);

  const isAnytimeDeadline = (deadline) => {
    let isAnytime = false;
    if (deadline === "Anytime") {
      isAnytime = true;
    }

    return isAnytime;
  };

  const anytimeTodoList = todoContext.sortList(
    todoContext.todoList.filter((todoItem) =>
      isAnytimeDeadline(todoItem.deadline)
    )
  );
  const todoList = todoContext.sortList(
    todoContext.todoList.filter(
      (todoItem) => !isAnytimeDeadline(todoItem.deadline)
    )
  );

  return (
    <div className={style.myListContainer}>
      <TodoList todoList={todoList} listTitle="Todo items" />
      <TodoList todoList={anytimeTodoList} listTitle="Anytime todo items" />
    </div>
  );
};

export default MyList;
