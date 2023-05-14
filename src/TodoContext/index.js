import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completed = todos.filter((item) => item.completed).length;
  const total = todos.length;

  const searchTodos = todos.filter((todo) => {
    let todoText = todo.text.toLowerCase();
    let searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (todoText) => {
    const newTodo = { id: todos.length + 1, text: todoText, completed: false };

    let todoList = [...todos, newTodo];
    saveTodos(todoList);
  };

  const changeTodoState = (id) => {
    let todoList = [...todos];
    const todoIndex = todoList.findIndex((todo) => todo.id === id);
    todoList[todoIndex].completed = !todoList[todoIndex].completed;
    saveTodos(todoList);
  };

  const onDelete = (id) => {
    let todoList = [...todos];
    const todoIndex = todoList.findIndex((todo) => todo.id === id);
    todoList.splice(todoIndex, 1);
    saveTodos(todoList);
  };

  return (
    <TodoContext.Provider
      value={{
        completed,
        total,
        searchValue,
        setSearchValue,
        searchTodos,
        changeTodoState,
        onDelete,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
