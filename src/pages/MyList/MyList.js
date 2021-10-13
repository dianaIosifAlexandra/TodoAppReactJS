import React, { useContext } from "react";
import TodoList from "../../components/TodoList/TodoList";
import TodoContext from "../../store/TodoContext";

import style from "./MyList.module.scss";

const MyList = () => {
  const todoContext = useContext(TodoContext);
  return (
    <div className={style.myListContainer}>
      <TodoList todoList={todoContext.todoList} listTitle="Todo" />
    </div>
  );
};

export default MyList;
