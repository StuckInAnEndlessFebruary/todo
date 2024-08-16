import React from "react";
import Checksvg from "./svgs/check";
import TaskInput from "./taskInput";

const Home = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div>
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="flex items-center mb-4">
            <Checksvg />
            <h1 className="max-w-2xl text-3xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Stay Organized <br /> and Achieve Your Goals.
            </h1>
          </div>
          <h1 className="pl-10 text-xl  leading-none tracking-tight md:text-2xl xl:text-3xl dark:text-white">
            Quick Start
          </h1>
          <a
            href="/myDay"
            className="m-5 ml-10 inline-flex items-center font-medium text-teal-600 dark:text-teal-500 hover:underline"
          >
            Start with adding a task for today
            <svg
              class="w-4 h-4 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="/important"
            className="mb-5 ml-10 inline-flex items-center font-medium text-teal-600 dark:text-teal-500 hover:underline"
          >
            Have an important task? Add here
            <svg
              class="w-4 h-4 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="/important"
            className="mb-5 ml-10 inline-flex items-center font-medium text-teal-600 dark:text-teal-500 hover:underline"
          >
            login or signup to sync your tasks
            <svg
              class="w-4 h-4 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="/important"
            className="mb-5 ml-10 inline-flex items-center font-medium text-teal-600 dark:text-teal-500 hover:underline"
          >
            Frequently asked questions
            <svg
              class="w-4 h-4 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
