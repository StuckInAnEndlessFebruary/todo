import React from "react";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";
import Favorite from "./favorite";
import Checkbox from "./checkbox";

const TaskList = ({
  tasks,
  handleDelete,
  handleChange,
  handleFavoriteToggle,
}) => {
  return (
    <div className="flex justify-center rounded-lg m-10">
      <ul className="bg-white rounded-lg w-96 text-gray-900 w-full dark:text-gray-200 dark:bg-gray-900">
        {tasks.map((task) => (
          <li
            key={task.title}
            className="flex items-center justify-between px-6 py-2 border-b border-gray-200 rounded-t-lg"
          >
            <div className="flex items-center">
              <Checkbox
                checked={task.completed}
                onChange={() => handleChange(task)}
              />
              <div className="text-container ml-3">
                {" "}
                {/* Added class */}
                <EditText
                  name="textbox3"
                  defaultValue={task.title}
                  editButtonProps={{ style: { width: 16 } }}
                  showEditButton
                  className={`bg-white dark:bg-gray-900 ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                />
              </div>
            </div>
            <div className="flex items-center">
              <Favorite
                id={`favorite-${task.title}`}
                isFavorite={task.isFavorite}
                onFavoriteToggle={() => handleFavoriteToggle(task)}
              />
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
