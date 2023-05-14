import React from "react";
import './TodoItem.css';
import IconCheck from "../Icons/IconCheck";
import IconDelete from "../Icons/IconDelete";

const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <IconCheck className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onChangeState}/>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <IconDelete className="Icon Icon-delete" onClick={props.onDelete}/>
    </li>
  );
};

export { TodoItem };
