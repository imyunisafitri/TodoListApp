import { useState } from "react";
import AddTask from "./AddTask";
import MyCalendar from "./MyCalendar";


export default function Main() {
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  return (
    <div className="flex flex-col md:flex-row bg-[#FAF7F2] p-4 md:p-10 xl:px-10 xl:py-20 rounded-lg ">
      {/* Calendar and Task Stats - Hidden on Small Screens */}
      <div className="hidden md:block md:w-[35%] lg:w-[25%]">
        <MyCalendar />
        <div className="flex gap-4 mt-4">
          {/* Completed Tasks */}
          <div className="bg-[#F0D1A8] p-2 xl:p-4 rounded-xl text-center w-full">
            <h1 className="uppercase font-bold text-sm md:text-md">Completed Tasks</h1>
            <span className="font-black opacity-75 text-2xl">
              {completedTasks.length}
            </span>
          </div>

          {/* Pending Tasks */}
          <div className="bg-[#C4A49F] p-2 xl:p-4 rounded-xl text-center w-full">
            <h1 className="uppercase font-bold text-sm md:text-md">Pending Tasks</h1>
            <span className="font-black opacity-75 text-2xl">
              {activeTasks.length}
            </span>
          </div>
        </div>
      </div>

      {/* Task Input and List */}
      <div className="w-full md:w-[65%] lg:w-[75%]">
        <AddTask
          activeTasks={activeTasks}
          setActiveTasks={setActiveTasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      </div>
    </div>
  );
}
