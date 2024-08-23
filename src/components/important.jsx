import React, { useState } from "react";
import ImportantTaskInput from "./importantTaskInput";
import ImportantTaskList from "./importantTaskList";
import { getTasks, saveTask } from "../data/importantTasks";
import SearchBar from "./searchBar";
import SortBar from "./sortBar"; // Import SortBar
import useNotification from "./useNotification";
import Todo2Svg from "./svgs/todo2";
import Pagination from "./pagination"; // Import Pagination
import { ToastContainer, toast } from "react-toastify";

const Important = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("none");
  const [currentPage, setCurrentPage] = useState(1); // Add currentPage state
  const pageSize = 4; // Set the desired page size

  useNotification(tasks);

  const handleDelete = (task) => {
    const updatedTasks = tasks.filter((t) => t.title !== task.title);
    setTasks(updatedTasks);
    toast.error("Task Deleted", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleChange = (task) => {
    const updatedTasks = tasks.map((t) => {
      if (t.title === task.title) {
        return { ...t, done: !t.done };
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleAddTask = (title, dueDate) => {
    if (title) {
      const newTask = saveTask({ title, dueDate });
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTaskTitle("");
      toast.success("Task Added successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "dueDateAsc") {
        return new Date(a.dueDate) - new Date(b.dueDate);
      } else if (sortOrder === "dueDateDesc") {
        return new Date(b.dueDate) - new Date(a.dueDate);
      } else {
        return 0;
      }
    })
    .slice((currentPage - 1) * pageSize, currentPage * pageSize); // Apply pagination

  return (
    <div className="w-full">
      <div className="flex items-center">
        <h1 className="bg-clip-text text-5xl p-5 dark:text-gray-200">
          Important Tasks
        </h1>
        <Todo2Svg />
      </div>
      <SearchBar onSearchChange={handleSearchChange} />
      <SortBar onSortChange={handleSortChange} />
      <ImportantTaskList
        tasks={filteredTasks}
        handleDelete={handleDelete}
        handleChange={handleChange}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(tasks.length / pageSize)}
        onPageChange={setCurrentPage} // Update current page when pagination changes
      />
      <ImportantTaskInput
        newTaskTitle={newTaskTitle}
        handleInputChange={(e) => setNewTaskTitle(e.target.value)}
        handleAddTask={handleAddTask}
      />
    </div>
  );
};

export default Important;
