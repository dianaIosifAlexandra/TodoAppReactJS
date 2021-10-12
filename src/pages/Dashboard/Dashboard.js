import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import AddTodoItem from "../../components/AddTodoItem/AddTodoItem";
import TodoList from "../../components/TodoList/TodoList";
import TodoItem from "../../models/TodoItem";

import style from "./Dashboard.module.scss";

const Dashboard = () => {
  const today = new Date();
  const [todoList, setTodoList] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("todoList");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const deadlineIsToday = (deadline) => {
    let deadlineIsToday = false;
    const deadlineDate = new Date(deadline);

    if (
      deadlineDate.getDate() === today.getDate() &&
      deadlineDate.getMonth() === today.getMonth() &&
      deadlineDate.getFullYear() === today.getFullYear()
    ) {
      deadlineIsToday = true;
    }

    return deadlineIsToday;
  };

  const todoListToday = todoList.filter((item) =>
    deadlineIsToday(item.deadline)
  );
  const todoListAnytime = todoList.filter(
    (item) => !deadlineIsToday(item.deadline)
  );

  const handleSubmit = (todoItemDescription, deadline) => {
    setTodoList((prevTodoList) => {
      return [
        ...prevTodoList,
        new TodoItem(
          Math.random().toString(),
          todoItemDescription,
          new Date(deadline).toString(),
          false
        ),
      ];
    });
  };

  const deleteItem = (id) => {
    setTodoList((prevTodoList) => {
      return [...prevTodoList.filter((item) => item.id !== id)];
    });
  };

  const updateTodoItem = (id, newItemDescription) => {
    console.log("id: ", id);
    console.log("newItemDescription: ", newItemDescription);
    setTodoList((prevTodoList) => {
      const editedList = prevTodoList.map((item) => {
        if (item.id === id) {
          item.description = newItemDescription;
        }
        return item;
      });

      return editedList;
    });
  };

  useEffect(() => {
    // storing input TODO list
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className={style.container}>
      <Header />
      <main>
        <AddTodoItem submit={handleSubmit} />
        <TodoList
          todoList={todoListToday}
          deleteTodoItem={deleteItem}
          updateEditedTodoItem={updateTodoItem}
          listTitle="Todo items for today"
        />
        <TodoList
          todoList={todoListAnytime}
          deleteTodoItem={deleteItem}
          updateEditedTodoItem={updateTodoItem}
          listTitle="Todo items for anytime"
        />
      </main>
    </div>
  );
};

export default Dashboard;
