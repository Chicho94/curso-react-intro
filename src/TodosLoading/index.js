import React from "react";
import "./TodosLoading.css";
import IconCheck from "../Icons/IconCheck";
import IconDelete from "../Icons/IconDelete";

const TodosLoading = () => {
  return (
    <div className="TodoItem-skeleton">
      <IconCheck className={`Icon-skeleton Icon-check-skeleton`} />
      <p className={`TodoItem-p-skeleton`}></p>
      <IconDelete className="Icon-skeleton Icon-delete-skeleton"/>
    </div>
  );
};

export { TodosLoading };
