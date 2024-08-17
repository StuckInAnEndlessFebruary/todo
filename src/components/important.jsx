import React, { useState, useEffect } from "react";
import ImportantTaskInput from "./importantTaskInput";
import ImportantTaskList from "./importantTaskList";
import { getTasks, saveTask } from "../data/importantTasks";
import { ProgressBar } from "./progressBar";
import SearchBar from "./searchBar";
import useNotification from "./useNotification";

const Important = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleAddTask = (title, dueDate) => {
    if (title) {
      const newTask = saveTask({ title, dueDate });
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTaskTitle("");
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      <h1 className="bg-clip-text text-5xl p-5">Important Tasks</h1>
      <SearchBar onSearchChange={handleSearchChange} />
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
