//tasks.js
const tasks = [
  {
    title: "laundry",
    done: true,
  },
  {
    title: "water the plants",
    done: false,
  },
  {
    title: "call landlord",
    done: false,
  },
  {
    title: "write essay",
    done: false,
  },
  {
    title: "buy groceries",
    done: false,
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

  return taskInDb;
}

export function deleteTask(title) {
  let taskInDb = tasks.find((m) => m.title === title);
  tasks.splice(tasks.indexOf(taskInDb), 1);
  return taskInDb;
}
