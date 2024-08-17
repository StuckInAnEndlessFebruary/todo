import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

const SortBar = ({ onSortChange }) => {
  return (
    <div className="max-w-xs ml-auto m-5 mr-10">
      <div className="relative">
        <select
          id="sort-tasks"
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-600 focus:border-teal-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="none">
            <FontAwesomeIcon icon={faSort} className="mr-2" />
            Sort by
          </option>
          <option value="dueDateAsc">
            <FontAwesomeIcon icon={faSortUp} className="mr-2" />
            Due Date (Ascending)
          </option>
          <option value="dueDateDesc">
            <FontAwesomeIcon icon={faSortDown} className="mr-2" />
            Due Date (Descending)
          </option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <FontAwesomeIcon
            icon={faSort}
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SortBar;
