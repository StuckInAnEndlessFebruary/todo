// layout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <aside className="w-60 h-screen bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <nav className="px-5 py-8 overflow-y-auto">
          <ul className="space-y-3">
            <li>
              <Link
                to="/home"
                className="text-gray-600 transition-colors duration-300 transform hover:text-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/myDay"
                className="text-gray-600 transition-colors duration-300 transform hover:text-gray-700"
              >
                My Day
              </Link>
            </li>
            <li>
              <Link
                to="/important"
                className="text-gray-600 transition-colors duration-300 transform hover:text-gray-700"
              >
                Important
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
