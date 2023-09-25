import React, { useContext } from "react";
import Todo from "./Todo";
import { todosContext } from "../App";

const Todos = () => {
  const { todos } = useContext(todosContext);
  return (
    <div>
      {!!todos.length ? (
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <p className="text-red-500 text-center">There is no todo.</p>
      )}
    </div>
  );
};

export default Todos;
