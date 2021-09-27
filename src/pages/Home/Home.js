import React from "react";
import Header from "../../components/Header/Header";
import AddTodoItem from "../../components/AddTodoItem/AddTodoItem";

import style from "./Home.module.scss";

const Home = () => {
  //   const todoList = [
  //     {
  //       id: 1,
  //       itemDescription: "Make your homework!",
  //     },
  //     {
  //       id: 2,
  //       itemDescription: "Learn for IOT exam!",
  //     },
  //   ];

  return (
    <div className={style.container}>
      <Header />
      <main>
        <AddTodoItem />
      </main>
    </div>
  );
};

export default Home;
