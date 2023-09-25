import React, { useContext } from "react";
import { todosContext } from "../App";

const EditInput = ({ todo, setEditTodo }) => {
  const { tabId, handleEdit } = useContext(todosContext);
  return (
    <div>
      <input
        type="text"
        value={todo.title}
        onChange={(e) => {
          setEditTodo(e.target.value);
          handleEdit(e, tabId);
        }}
      />
    </div>
  );
};

export default EditInput;
