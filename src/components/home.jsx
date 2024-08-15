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
          <TaskInput></TaskInput>
        </div>
      </div>
    </section>
  );
};

export default Home;
