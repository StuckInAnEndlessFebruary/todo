import http from "./httpService";
import data from "../config.json";

const { apiUrl } = data;

const apiEndpoint = apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

export function signIn(credentials) {
  return http.post(`${apiUrl}/auth`, {
    email: credentials.username,
    password: credentials.password,
  });
}
