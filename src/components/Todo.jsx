import React, { useContext, useState } from "react";
import { todosContext } from "../App";
import Checkbox from "./checkbox";
import Delete from "./Delete";
import EditButton from "./EditButton";
import DoneButton from "./DoneButton";
import TitleButton from "./TiltleButton";
import EditInput from "./EditInput";

const Todo = ({ todo }) => {
  const { editId } = useContext(todosContext);

  const [editTodo, setEditTodo] = useState("");
  return (
    <div
      className="flex justify-between gap-x-5 items-center py-2"
      key={todo.id}
    >
      <div className="flex gap-x-3 items-center">
        <Checkbox todo={todo} editId={editId} />
        <div>
          {editId === todo.id ? (
            <EditInput todo={todo} setEditTodo={setEditTodo} />
          ) : (
            <TitleButton todo={todo} />
          )}
        </div>
      </div>
      <div className="flex items-center gap-x-3 text-white">
        {editId === todo.id ? (
          <DoneButton editTodo={editTodo} />
        ) : (
          <EditButton todo={todo} />
        )}
        <Delete todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
