//taskList.jsx
import React from "react";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";

const TaskList = ({
  tasks,
  handleDelete,
  handleChange,
  handlePriorityChange,
}) => {
  return (
    <div className="flex justify-center rounded-lg m-10">
      <ul className="bg-white rounded-lg w-96 text-gray-900 w-full">
        {tasks.map((task) => (
          <li
            key={task.title}
            className="flex items-center justify-between px-6 py-2 border-b border-gray-200 rounded-t-lg"
          >
            <div className="flex items-center">
              <input
                onChange={() => handleChange(task)}
                type="checkbox"
                className="mr-2 w-6 h-6 accent-teal-600 rounded-full border-gray-300 transition-transform transform hover:scale-110"
                checked={task.done}
              />
              <EditText
                name="textbox3"
                defaultValue={task.title}
                editButtonProps={{ style: { marginLeft: "5px", width: 16 } }}
                showEditButton
              />
            </div>
            <div className="flex items-center">
              <select
                value={task.priority}
                onChange={(e) => handlePriorityChange(task, e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2 mr-2 h-10"
              >
                <option value="low">priority: Low</option>
                <option value="medium">priority: Medium</option>
                <option value="high">priority: High</option>
              </select>
              <button
                onClick={() => handleDelete(task)}
                className="bg-teal-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline h-10"
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
