import React, { Component } from "react";
import TaskList from "./taskList";
import SearchBar from "./searchBar";
import TodoSvg from "./svgs/todo";
import Pagination from "./pagination";
import SortBar from "./sortBar"; // Import SortBar
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../services/todoService";
import { getTasks, deleteTask, saveTask } from "../services/todoService";

class Favorites extends Component {
  state = {
    tasks: [],
    searchQuery: "", // Add searchQuery state
    currentPage: 1, // Initialize current page to 1
    pageSize: 4, // Set the desired page size
    sortOrder: "none", // Add sortOrder state
  };

  async componentDidMount() {
    const { data: tasks } = await getTasks();
    const favoriteTasks = tasks.filter((task) => task.isFavorite);
    this.setState({ tasks: favoriteTasks });
  }

  handleDelete = async (task) => {
    await deleteTask(task.id);
    const tasks = this.state.tasks.filter((t) => t.id !== task.id);
    this.setState({ tasks: tasks });
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

  handleChange = (task) => {
    const updatedTasks = this.state.tasks.map((t) => {
      if (t.title === task.title) {
        return { ...t, done: !t.done };
      }
      return t;
    });
    this.setState({ tasks: updatedTasks });
  };

  handleFavoriteToggle = (task) => {
    const updatedTasks = this.state.tasks.map((t) =>
      t.title === task.title ? { ...t, isFavorite: !t.isFavorite } : t
    );
    this.setState({ tasks: updatedTasks });
  };

  handlePriorityChange = (task, newPriority) => {
    const updatedTasks = this.state.tasks.map((t) =>
      t.title === task.title ? { ...t, priority: newPriority } : t
    );
    this.setState({ tasks: updatedTasks });
  };

  handleSearchChange = (query) => {
    this.setState({ searchQuery: query });
  };

  handleSortChange = (order) => {
    this.setState({ sortOrder: order });
  };

  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  render() {
    const { tasks, currentPage, pageSize, searchQuery, sortOrder } = this.state;
    const filteredTasks = tasks
      .filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOrder === "alphaAsc") {
          return a.title.localeCompare(b.title);
        } else if (sortOrder === "alphaDesc") {
          return b.title.localeCompare(a.title);
        } else {
          return 0;
        }
      })
      .slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
      <div className="w-full">
        <div className="flex items-center">
          <h1 className="bg-clip-text text-5xl p-5 dark:text-gray-200 ">
            Favorites
          </h1>
          <TodoSvg></TodoSvg>
        </div>
        <SearchBar onSearchChange={this.handleSearchChange} />
        <SortBar onSortChange={this.handleSortChange} />
        <TaskList
          tasks={filteredTasks}
          handleDelete={this.handleDelete}
          handleChange={this.handleChange}
          handleFavoriteToggle={this.handleFavoriteToggle}
          handlePriorityChange={this.handlePriorityChange}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(tasks.length / pageSize)}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Favorites;
