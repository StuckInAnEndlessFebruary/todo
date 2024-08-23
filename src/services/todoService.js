import http from "./httpService";
import data from "../config.json";

const { apiUrl } = data;
const apiEndpoint = apiUrl + "/todos";

function taskUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getTasks() {
  return http.get(apiEndpoint + "?_limit=20");
}

export function getTask(taskId) {
  return http.get(taskUrl(taskId));
}

export function saveTask(task) {
  if (task._id) {
    const body = { ...task };
    delete body._id;
    return http.put(taskUrl(task._id), body);
  }

  return http.post(apiEndpoint, task);
}

export function deleteTask(taskId) {
  return http.delete(taskUrl(taskId));
}
