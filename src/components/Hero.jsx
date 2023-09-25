import React, { useContext, useState } from "react";
import TodoInputs from "./TodoInputs";
import Todos from "./Todos";
import { todosContext } from "../App";
import Tabs from "./Tabs";

const Hero = () => {
  const { todos, handleTab, tabId, setTabId } = useContext(todosContext);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid gap-y-16">
        <TodoInputs />
        <Tabs />
        <Todos />
      </div>
    </div>
  );
};

export default Hero;
