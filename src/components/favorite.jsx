import React from "react";

const Favorite = ({ id, isFavorite, onFavoriteToggle }) => {
  return (
    <div className="flex items-center gap-4 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md cursor-pointer">
      <input
        type="checkbox"
        checked={isFavorite}
        id={id}
        name="favorite-checkbox"
        value="favorite-button"
        onChange={onFavoriteToggle}
        className="hidden"
      />
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isFavorite ? "currentColor" : "none"}
          stroke={isFavorite ? "currentColor" : "#545b66"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`feather feather-heart ${
            isFavorite
              ? "text-teal-600 animate-pulse"
              : "text-gray-400 dark:text-gray-900"
          }`}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        {/* <div className="ml-2">
          <span className={`block ${isFavorite ? "hidden" : "block"}`}></span>
          <span className={`block ${isFavorite ? "block" : "hidden"}`}></span>
        </div> */}
      </label>
      <style jsx>{`
        @keyframes heartButton {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.3);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse {
          animation: heartButton 1s;
        }
      `}</style>
    </div>
  );
};

export default Favorite;
