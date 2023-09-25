import React, { useContext } from "react";
import { todosContext } from "../App";

const EditButton = ({ todo }) => {
  const { setEditId } = useContext(todosContext);
  return (
    <button
      className={`${
        todo.completed ? "bg-black" : "bg-blue-500"
      } py-2 px-4 rounded-md`}
      onClick={() => setEditId(todo.id)}
      disabled={todo.completed}
    >
      edit
    </button>
  );
};

export default EditButton;
