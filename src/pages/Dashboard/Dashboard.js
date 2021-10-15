import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import AddTodoItem from "../../components/AddTodoItem/AddTodoItem";
import TodoList from "../../components/TodoList/TodoList";

import style from "./Dashboard.module.scss";
import TodoContext from "../../store/TodoContext";

const Dashboard = () => {
  const todoContext = useContext(TodoContext);

  const today = new Date();

  const deadlineIsToday = (deadline) => {
    let deadlineIsToday = false;
    const deadlineDate = new Date(deadline);

    if (
      deadlineDate.getDate() <= today.getDate() &&
      deadlineDate.getMonth() <= today.getMonth() &&
      deadlineDate.getFullYear() <= today.getFullYear()
    ) {
      deadlineIsToday = true;
    }

    return deadlineIsToday;
  };

  // console.log("sortList: ", sortList(todoList));

  const todoListToday = todoContext.sortList(
    todoContext.todoList.filter((item) => deadlineIsToday(item.deadline))
  );
  const todoListAnytime = todoContext.sortList(
    todoContext.todoList.filter((item) => !deadlineIsToday(item.deadline))
  );

  return (
    <div className={style.container}>
      <Header />
      <main>
        <AddTodoItem />
        <TodoList todoList={todoListToday} listTitle="Overdue todo items" />
        <TodoList todoList={todoListAnytime} listTitle="Left todo items" />
      </main>
    </div>
  );
};

export default Dashboard;
