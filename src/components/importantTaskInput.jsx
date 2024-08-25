import React, { useState } from "react";

const ImportantTaskInput = ({
  newTaskTitle,
  handleInputChange,
  handleAddTask,
}) => {
  const [dueDate, setDueDate] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask(newTaskTitle, dueDate);
    }
  };

  return (
    <div className="flex justify-center border border-teal-500 rounded-lg m-10">
      <ul className="bg-white rounded-lg w-96 text-gray-900 w-full dark:bg-gray-800 dark:text-gray-200">
        <li className="flex items-center px-6 py-2 rounded-t-lg">
          <input
            className="outline-none w-full m-1 dark:bg-gray-800"
            type="text"
            placeholder="Enter a task..."
            value={newTaskTitle}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <input
            type="date"
            className="bg-white text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2 mr-2 h-10 dark:bg-gray-600 dark:text-gray-200"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button
            onClick={() => handleAddTask(newTaskTitle, dueDate)}
            className="transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline bg-gray-200 text-gray-700 rounded-md px-4 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline ml-auto dark:bg-gray-600 dark:text-white"
          >
            add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ImportantTaskInput;
