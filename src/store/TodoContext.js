import React, { useState, useEffect } from "react";
import TodoItem from "../models/TodoItem";

const TodoContext = React.createContext({
  todoList: [],
  addTodoItem: (todoItemDescription, deadline) => {},
  deleteTodoItem: (id) => {},
  editTodoItem: (id, newItemDescription) => {},
  markTodoItemAsDone: (id, event) => {},
});

export const TodoContextProvider = (props) => {
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem("todoList");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

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

  const handleMarkAsDone = (id, event) => {
    setTodoList((prevTodoList) => {
      const editedList = prevTodoList.map((item) => {
        if (item.id === id) {
          item.isDone = event.target.checked;
        }
        return item;
      });

      return editedList;
    });
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContext.Provider
      value={{
        todoList: todoList,
        deleteTodoItem: deleteItem,
        editTodoItem: updateTodoItem,
        addTodoItem: handleSubmit,
        markTodoItemAsDone: handleMarkAsDone,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
