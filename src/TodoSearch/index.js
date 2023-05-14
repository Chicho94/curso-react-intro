import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const handleChange = (value) => {
    setSearchValue(value);
  };

  return (
    <input
      onChange={(event) => handleChange(event.target.value)}
      className="TodoSearch"
      placeholder="search your todos"
      value={searchValue}
    />
  );
};

export { TodoSearch };
