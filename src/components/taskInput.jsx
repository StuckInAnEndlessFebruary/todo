//taskInput.jsx
import React from "react";

const TaskInput = ({ newTaskTitle, handleInputChange, handleAddTask }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="flex justify-center border border-teal-500 rounded-lg m-10">
      <ul className="bg-white rounded-lg w-96 text-gray-900 w-full">
        <li className="flex items-center px-6 py-2 rounded-t-lg">
          <input
            className="outline-none w-full m-1"
            type="text"
            placeholder="Enter a task..."
            value={newTaskTitle}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2 mr-2 h-10">
            <option>priority: Low</option>
            <option>priority: Medium</option>
            <option>priority: High</option>
          </select>
          <button
            onClick={handleAddTask}
            className="transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline ml-auto"
          >
            add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TaskInput;
