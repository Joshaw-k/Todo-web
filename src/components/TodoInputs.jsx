import React, { useContext } from "react";
import { todosContext } from "../App";

const TodoInputs = () => {
  const { todoRef, handleCreate } = useContext(todosContext);
  return (
    <form className="max-w-md mx-auto" onSubmit={handleCreate}>
      <div className="flex gap-x-3">
        <div>
          <input
            type="text"
            className="px-4 py-3 dark:bg-slate-200"
            name="todo-input"
            ref={todoRef}
          />
        </div>
        <button className="bg-red-500 text-white px-4 py-3" type="submit">
          Add Wahala
        </button>
      </div>
    </form>
  );
};

export default TodoInputs;
