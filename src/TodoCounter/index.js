import React, { useContext } from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

const TodoCounter = () => {
  const {completed, total} = useContext(TodoContext);

  return <h1 className="TodoCounter">Has completado <span>{completed}</span> de <span>{total}</span> TODOS</h1>;
};

export { TodoCounter };
