// MyDay.jsx
import React, { Component } from "react";
import TaskList from "./taskList";
import TaskInput from "./taskInput";
import { getTasks, saveTask } from "../data/tasks";

class MyDay extends Component {
  state = {
    tasks: getTasks(),
    newTaskTitle: "",
  };

  render() {
    return (
      <div>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-5xl font-black p-5">
          My Day
        </h1>
        <TaskList tasks={this.state.tasks} handleDelete={this.handleDelete} />
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
