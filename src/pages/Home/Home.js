import React, { useState } from "react";
import Header from "../../components/Header/Header";
import AddTodoItem from "../../components/AddTodoItem/AddTodoItem";
import TodoList from "../../components/TodoList/TodoList";

import style from "./Home.module.scss";

const Home = () => {
  const [todolist, setTodoList] = useState([
    {
      id: 1,
      itemDescription: "Make your homework!",
    },
    {
      id: 2,
      itemDescription: "Learn for IOT exam!",
    },
  ]);

  return (
    <div className={style.container}>
      <Header />
      <main>
        <AddTodoItem />
        <TodoList todoList={todolist} />
      </main>
    </div>
  );
};

export default Home;
