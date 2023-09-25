import React, { useContext } from "react";
import { todosContext } from "../App";

const DoneButton = ({ editTodo }) => {
  const { setEditId } = useContext(todosContext);
  return (
    <button
      onClick={() => setEditId(null)}
      className={`${
        editTodo == "" ? "bg-black" : "bg-green-500"
      } py-2 px-4 rounded-md`}
      disabled={editTodo == ""}
    >
      done
    </button>
  );
};

export default DoneButton;
