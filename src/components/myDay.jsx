import React, { Component } from "react";
import TaskList from "./taskList";
import TaskInput from "./taskInput";
import { getTasks, saveTask } from "../data/tasks";
import { ProgressBar } from "./progressBar";
import SearchBar from "./searchBar";
import TodoSvg from "./svgs/todo";

class MyDay extends Component {
  state = {
    tasks: getTasks(),
    newTaskTitle: "",
    searchQuery: "", // Add searchQuery state
  };

  handleDelete = (task) => {
    const tasks = this.state.tasks.filter((t) => t.title !== task.title);
    this.setState({ tasks: tasks });
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

  render() {
    const filteredTasks = this.state.tasks.filter((task) =>
      task.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <div className="w-full">
        <div className="flex items-center">
          <h1 className="bg-clip-text text-5xl p-5">My Day</h1>
          <TodoSvg></TodoSvg>
        </div>
        <SearchBar onSearchChange={this.handleSearchChange} />
        <TaskList
          tasks={filteredTasks}
          handleDelete={this.handleDelete}
          handleChange={this.handleChange}
          handlePriorityChange={this.handlePriorityChange}
        />
        <TaskInput
          newTaskTitle={this.state.newTaskTitle}
          handleInputChange={(e) => {
            const newValue = e.target.value;
            this.setState({ newTaskTitle: newValue });
          }}
          handleAddTask={() => {
            const newTaskTitle = this.state.newTaskTitle;
            if (newTaskTitle) {
              const newTask = saveTask({ title: newTaskTitle });
              const updatedTasks = [...this.state.tasks, newTask];
              this.setState({ tasks: updatedTasks, newTaskTitle: "" });
            }
          }}
        />
      </div>
    );
  }
}

export default MyDay;
