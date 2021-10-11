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
    new Date("June 12, 2020 17:30").toString(),
    false
  ),
  new TodoItem(
    2,
    "Learn for IOT exam!",
    new Date("July 12, 2021 19:30").toString(),
    false
  ),
];

const Home = () => {
  const [todoList, setTodoList] = useState(TODOLIST);

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
    // setTodoList((prevTodoList) => {
    //   const editedList = prevTodoList.map((item) => {
    //     console.log(item);
    //     if (item.id === id) {
    //       item.description = newItemDescription;
    //     }
    //   });

    //   return editedList;
    // });
  };

  return (
    <div className={style.container}>
      <Header />
      <main>
        <AddTodoItem submit={handleSubmit} />
        {/* todoItemDescription= {} */}
        <TodoList
          todoList={todoList}
          deleteTodoItem={deleteItem}
          updateEditedTodoItem={updateTodoItem}
        />
      </main>
    </div>
  );
};

export default Home;
