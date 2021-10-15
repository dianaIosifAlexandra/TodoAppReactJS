import React, { useState, useEffect, useCallback, useMemo } from "react";
import TodoItem from "../models/TodoItem";

const TodoContext = React.createContext({
  todoList: [],
  addTodoItem: (todoItemDescription, deadline) => {},
  deleteTodoItem: (id) => {},
  editTodoItem: (id, newItemDescription) => {},
  markTodoItemAsDone: (id, event) => {},
  sortList: () => {},
});

export const TodoContextProvider = (props) => {
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem("todoList");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const handleSubmitCallback = useCallback((todoItemDescription, deadline) => {
    setTodoList((prevTodoList) => {
      return [
        ...prevTodoList,
        new TodoItem(
          Math.random().toString(),
          todoItemDescription,
          deadline,
          false
        ),
      ];
    });
  }, []);

  const deleteItemCallback = useCallback((id) => {
    setTodoList((prevTodoList) => {
      return [...prevTodoList.filter((item) => item.id !== id)];
    });
  }, []);

  const updateTodoItemCallback = useCallback((id, newItemDescription) => {
    setTodoList((prevTodoList) => {
      const editedList = prevTodoList.map((item) => {
        if (item.id === id) {
          item.description = newItemDescription;
        }
        return item;
      });

      return editedList;
    });
  }, []);

  const handleMarkAsDoneCallback = useCallback((id, event) => {
    setTodoList((prevTodoList) => {
      const editedList = prevTodoList.map((item) => {
        if (item.id === id) {
          item.isDone = event.target.checked;
        }
        return item;
      });

      return editedList;
    });
  }, []);

  const handleSortListCallback = useCallback((list) => {
    list.sort((todo, nextTodo) => {
      let position = 0;

      if (todo.deadline > nextTodo.deadline) {
        position = 1;
      }
      if (todo.deadline < nextTodo.deadline) {
        position = -1;
      }
      return position;
    });

    return list;
  }, []);

  const valueMemorized = useMemo(
    () => ({
      todoList: todoList,
      deleteTodoItem: deleteItemCallback,
      editTodoItem: updateTodoItemCallback,
      addTodoItem: handleSubmitCallback,
      markTodoItemAsDone: handleMarkAsDoneCallback,
      sortList: handleSortListCallback,
    }),
    [
      deleteItemCallback,
      updateTodoItemCallback,
      handleSubmitCallback,
      handleMarkAsDoneCallback,
      todoList,
      handleSortListCallback,
    ]
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContext.Provider value={valueMemorized}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
