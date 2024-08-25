import React from "react";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";
import Checkbox from "./checkbox";
import CustomEditIcon from "./svgs/editIcon";

const ImportantTaskList = ({ tasks, handleDelete, handleChange }) => {
  return (
    <div className="flex justify-center rounded-lg m-10">
      <ul className="bg-white rounded-lg w-96 text-gray-900 w-full dark:bg-gray-900 dark:text-gray-200">
        {tasks.map((task) => (
          <li
            key={task.title}
            className="flex items-center justify-between px-6 py-2 border-b border-gray-200 rounded-t-lg dark:bg-gray-900"
          >
            <div className="flex items-center">
              <Checkbox
                checked={task.done}
                onChange={() => handleChange(task)}
              />
              <div className="text-container ml-3">
                {" "}
                {/* Added class */}
                <EditText
                  name="textbox3"
                  defaultValue={task.title}
                  editButtonContent={<CustomEditIcon></CustomEditIcon>}
                  editButtonProps={{
                    style: {
                      width: 16,
                      background: "transparent",
                      border: "none",
                    },
                  }}
                  showEditButton
                  className={`bg-white dark:bg-gray-900 ${
                    task.done ? "line-through text-gray-500" : ""
                  }`}
                  inputClassName="dark:bg-gray-700"
                />
              </div>
            </div>
            <div className="flex items-center">
              <span className="ml-4 text-gray-500">{task.dueDate}</span>{" "}
              {/* Display due date */}
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

export default ImportantTaskList;
