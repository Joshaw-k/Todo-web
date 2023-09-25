import React, { useContext } from "react";
import { todosContext } from "../App";

const Delete = ({ todo }) => {
  const { handleDelete } = useContext(todosContext);
  return (
    <button
      className="bg-red-500 py-2 px-4 rounded-md"
      onClick={() => handleDelete(todo.id)}
    >
      delete
    </button>
  );
};

export default Delete;
