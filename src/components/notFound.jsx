import React from "react";
import { FlagIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "0 2rem",
      }}
    >
      <div>
        <FlagIcon className="w-20 h-20 mx-auto text-teal-600" />

        <h1
          style={{
            marginTop: "2.5rem",
            fontSize: "2rem",
            lineHeight: "1.5",
            color: "#4B5563",
          }}
        >
          Error 404 <br /> It looks like something went wrong.
        </h1>
        <p
          style={{
            marginTop: "2rem",
            marginBottom: "3.5rem",
            fontSize: "1.125rem",
            fontWeight: "normal",
            color: "#6B7280",
            maxWidth: "20rem",
            margin: "0 auto",
            padding: "10px",
          }}
        >
          Don't worry, our team is already on it. Please try refreshing the page
          or come back later.
        </p>
        <Link to="/home">
          <button class="bg-white hover:bg-teal-600 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-teal-600 rounded shadow dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-teal-600 dark:hover:text-white">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
