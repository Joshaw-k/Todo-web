import React, { useContext } from "react";
import { todosContext } from "../App";
const tabs = [
  { name: "All", id: 1 },
  { name: "Completed", id: 2 },
  { name: "Uncompleted", id: 3 },
];
const Tabs = () => {
  const { tabId, setTabId, handleTab } = useContext(todosContext);
  return (
    <div class="border-b border-gray-200 dark:border-gray-700">
      <nav class="-mb-0.5 flex justify-center space-x-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            class={`py-4 px-1 inline-flex items-center gap-2 border-b-[3px] ${
              tabId === tab.id ? "border-[#7ECA9C]" : "border-transparent"
            } text-sm whitespace-nowrap text-gray-200 hover:text-[#7ECA9C] dark:text-black`}
            onClick={() => {
              setTabId(tab.id);
              handleTab(tab.id);
            }}
          >
            {tab.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
