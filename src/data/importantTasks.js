const tasks = [
  {
    title: "laundry",
    done: true,
    dueDate: "2024-08-18", // Add due date
  },
  {
    title: "buy medications",
    done: false,
    dueDate: "2024-08-19", // Add due date
  },

  {
    title: "study for exam",
    done: false,
    dueDate: "2024-08-22", // Add due date
  },
];

export function getTasks() {
  return tasks;
}

export function getTask(title) {
  return tasks.find((m) => m.title === title);
}

export function saveTask(task) {
  let taskInDb = {};
  taskInDb.title = task.title;
  taskInDb.done = false;
  taskInDb.dueDate = task.dueDate; // Save due date

  return taskInDb;
}

export function deleteTask(title) {
  let taskInDb = tasks.find((m) => m.title === title);
  tasks.splice(tasks.indexOf(taskInDb), 1);
  return taskInDb;
}
