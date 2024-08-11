// TaskList.jsx
import React from "react";

const TaskList = ({ tasks, handleDelete }) => {
  return (
    <div className="flex justify-center border rounded-lg m-10">
      <ul className="bg-white rounded-lg w-96 text-gray-900 w-full">
        {tasks.map((task) => (
          <li
            key={task.title}
            className="flex items-center justify-between px-6 py-2 border-b border-gray-200 rounded-t-lg"
          >
            <div>
              <input
                onChange={() => {
                  const updatedTasks = this.state.tasks.map((t) => {
                    if (t.title === task.title) {
                      return { ...t, done: !t.done };
                    }
                    return t;
                  });
                  this.setState({ tasks: updatedTasks });
                }}
                type="checkbox"
                className="mr-2"
                checked={task.done}
              />
              {task.title}
            </div>
            <button
              onClick={() => this.handleDelete(task)}
              className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-1 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
