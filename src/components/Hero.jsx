import React from "react";
import TodoInputs from "./TodoInputs";
import Todos from "./Todos";
import Tabs from "./Tabs";

const Hero = () => {
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
