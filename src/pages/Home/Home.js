import React, { useState } from "react";
import Header from "../../components/Header/Header";
import AddTodoItem from "../../components/AddTodoItem/AddTodoItem";
import TodoList from "../../components/TodoList/TodoList";
import TodoItem from "../../models/TodoItem";

import style from "./Home.module.scss";

const TODOLIST = [
  new TodoItem(
    1,
    "Make your homework!",
    new Date("June 12, 2022 17:30").toString(),
    false
  ),
  new TodoItem(
    2,
    "Learn for IOT exam!",
    new Date("July 12, 2022 19:30").toString(),
    false
  ),
  new TodoItem(
    3,
    "Learn for IOT exam!",
    new Date("October 11, 2021 20:30").toString(),
    false
  ),
];

const Home = () => {
  const today = new Date();
  const [todoList, setTodoList] = useState(TODOLIST);

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

export default Home;
