import React, { useContext } from "react";
import { todosContext } from "../App";

const Checkbox = ({ editId, todo }) => {
  const { tabId, handleCheck } = useContext(todosContext);
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        disabled={editId === todo.id}
        onChange={() => handleCheck(todo.id, tabId)}
      />
    </div>
  );
};

export default Checkbox;
