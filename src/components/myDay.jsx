import React, { Component } from "react";
import TaskList from "./taskList";
import TaskInput from "./taskInput";
import { getTasks, saveTask } from "../data/tasks";
import { ProgressBar } from "./progressBar";
import SearchBar from "./searchBar";
import TodoSvg from "./svgs/todo";
import axios from "axios";
import Pagination from "./pagination";

const apiEndPoint = "https://jsonplaceholder.typicode.com/todos?_limit=50";

class MyDay extends Component {
  state = {
    tasks: [],
    newTaskTitle: "",
    searchQuery: "", // Add searchQuery state
    currentPage: 1, // Initialize current page to 1
    pageSize: 4, // Set the desired page size
  };

  async componentDidMount() {
    const { data: tasks } = await axios.get(apiEndPoint);
    this.setState({ tasks });
  }

  handleDelete = async (task) => {
    await axios.delete(apiEndPoint + "/" + task.id);
    const tasks = this.state.tasks.filter((t) => t.id !== task.id);
    this.setState({ tasks: tasks });
  };

  handleAddTask = async () => {
    const obj = { title: this.state.newTaskTitle };
    if (obj) {
      const { data: newTask } = await axios.post(apiEndPoint, obj);
      const updatedTasks = [...this.state.tasks, newTask];
      this.setState({ tasks: updatedTasks, newTaskTitle: "" });
    }
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

  handlePriorityChange = (task, newPriority) => {
    const updatedTasks = this.state.tasks.map((t) =>
      t.title === task.title ? { ...t, priority: newPriority } : t
    );
    this.setState({ tasks: updatedTasks });
  };

  handleSearchChange = (query) => {
    this.setState({ searchQuery: query });
  };
  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  render() {
    const { tasks, currentPage, pageSize, searchQuery } = this.state;
    const filteredTasks = tasks
      .filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
      <div className="w-full">
        <div className="flex items-center">
          <h1 className="bg-clip-text text-5xl p-5 dark:text-gray-200 ">
            My Day
          </h1>
          <TodoSvg></TodoSvg>
        </div>
        <SearchBar onSearchChange={this.handleSearchChange} />
        <TaskList
          tasks={filteredTasks}
          handleDelete={this.handleDelete}
          handleChange={this.handleChange}
          handlePriorityChange={this.handlePriorityChange}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(tasks.length / pageSize)}
          onPageChange={this.handlePageChange}
        />
        <TaskInput
          newTaskTitle={this.state.newTaskTitle}
          handleInputChange={(e) => {
            const newValue = e.target.value;
            this.setState({ newTaskTitle: newValue });
          }}
          handleAddTask={this.handleAddTask}
        />
      </div>
    );
  }
}

export default MyDay;
