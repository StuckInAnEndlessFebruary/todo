import ReactDOM from "react-dom/client";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import MyDay from "./components/myDay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Important from "./components/important";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="/myDay" element={<MyDay></MyDay>} />
          <Route path="/important" element={<Important></Important>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
