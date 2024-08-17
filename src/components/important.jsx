import React, { useState, useEffect } from "react";
import ImportantTaskInput from "./importantTaskInput";
import ImportantTaskList from "./importantTaskList";
import { getTasks, saveTask } from "../data/importantTasks"; // Update import
import { ProgressBar } from "./progressBar";
import SearchBar from "./searchBar";
import SortBar from "./sortBar"; // Import SortBar
import useNotification from "./useNotification";
import Todo2Svg from "./svgs/todo2";

const Important = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("none"); // Add sortOrder state

  useNotification(tasks);

  const handleDelete = (task) => {
    const updatedTasks = tasks.filter((t) => t.title !== task.title);
    setTasks(updatedTasks);
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
    });

  return (
    <div className="w-full">
      <div className="flex items-center">
        <h1 className="bg-clip-text text-5xl p-5">Important Tasks</h1>
        <Todo2Svg />
      </div>
      <SearchBar onSearchChange={handleSearchChange} />
      <SortBar onSortChange={handleSortChange} /> {/* Add SortBar */}
      <ImportantTaskList
        tasks={filteredTasks}
        handleDelete={handleDelete}
        handleChange={handleChange}
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
