// MyDay.jsx
import React, { Component } from "react";
import TaskList from "./taskList";
import TaskInput from "./taskInput";
import { getTasks, saveTask } from "../data/tasks";
import { ProgressBar } from "./progressBar";
import SearchBar from "./searchBar";
class MyDay extends Component {
  state = {
    tasks: getTasks(),
    newTaskTitle: "",
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
    // Update the task's priority
    const updatedTasks = this.state.tasks.map((t) =>
      t.title === task.title ? { ...t, priority: newPriority } : t
    );
    this.setState({ tasks: updatedTasks });
  };

  render() {
    return (
      <div className="w-full">
        <h1 className="bg-clip-text  text-5xl  p-5">My Day</h1>
        <SearchBar></SearchBar>
        <TaskList
          tasks={this.state.tasks}
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
