import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import MyDay from "./components/myDay";
import Home from "./components/home";
import Sidebar from "./components/sidebar";
import Layout from "./components/layout";
import "tailwindcss/tailwind.css";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import "@material-tailwind/react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!</h1>
        <p>Welcome to your new React app.</p>
      </header>
    </div>
  );
}

export default App;
