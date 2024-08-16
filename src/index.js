import ReactDOM from "react-dom/client";
import Home from "./components/home";
import MyDay from "./components/myDay";
import Important from "./components/important";
import Layout from "./components/layout";
import NotFound from "./components/notFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/myDay" element={<MyDay />} />
            <Route path="/important" element={<Important />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
