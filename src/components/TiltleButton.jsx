import React from "react";

const TitleButton = ({ todo }) => {
  return (
    <div>
      <span
        className={`todo-title text-[#7ECA9C] ${todo.completed && "checked"}`}
      >
        {todo.title}
      </span>
    </div>
  );
};

export default TitleButton;
