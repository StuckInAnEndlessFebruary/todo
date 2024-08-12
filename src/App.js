import logo from "./logo.svg";
import "./App.css";
import MyDay from "./components/myDay";
import Sidebar from "./components/sidebar";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <MyDay></MyDay>
    </div>
  );
}

export default App;
