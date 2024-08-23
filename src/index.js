import ReactDOM from "react-dom/client";
import Home from "./components/home";
import MyDay from "./components/myDay";
import Important from "./components/important";
import FAQ from "./components/FAQ";
import Layout from "./components/layout";
import NotFound from "./components/notFound";
import Account from "./components/account";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "@material-tailwind/react";
import DarkModeToggle from "./components/darkModeToggle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://3bee024c7165e2b16b287c1ae3e9cf32@o4507825747132416.ingest.us.sentry.io/4507825760501760",
  integrations: [],
});

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <DarkModeToggle />
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/myDay" element={<MyDay />} />
            <Route path="/important" element={<Important />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
