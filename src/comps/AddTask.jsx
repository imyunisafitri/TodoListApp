import { TiInputChecked, TiEdit, TiDelete, TiInputCheckedOutline } from "react-icons/ti";
import { useState } from "react";

export default function AddTask({
  activeTasks,
  setActiveTasks,
  completedTasks,
  setCompletedTasks,
}) {
  const [newTask, setNewTask] = useState("");
  const [newDetails, setNewDetails] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const saveTask = () => {
    if (editIndex !== null) {
      const updatedTasks = activeTasks.map((task, index) =>
        index === editIndex ? { ...task, task: newTask, details: newDetails } : task
      );
      setActiveTasks(updatedTasks);
      setEditIndex(null);
    } else {
      if (newTask && newDetails) {
        setActiveTasks([
          ...activeTasks,
          {
            task: newTask,
            details: newDetails,
            date: new Date().toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
          },
        ]);
      }
    }
    setNewTask("");
    setNewDetails("");
  };

  const deleteTask = (index) => {
    const updatedTasks = activeTasks.filter((_, i) => i !== index);
    setActiveTasks(updatedTasks);
  };

  const completeTask = (index) => {
    const taskToComplete = activeTasks[index];
    setCompletedTasks([...completedTasks, taskToComplete]);
    const updatedActiveTasks = activeTasks.filter((_, i) => i !== index);
    setActiveTasks(updatedActiveTasks);
  };

  const deleteCompletedTask = (index) => {
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompletedTasks);
  };

  const editTask = (index) => {
    setNewTask(activeTasks[index].task);
    setNewDetails(activeTasks[index].details);
    setEditIndex(index);
  };

  return (
    <div className="px-4 md:px-10 md:flex md:flex-col">
      {/* Input Form */}
      <div>
        <label className="flex flex-col gap-4 md:flex-row justify-between items-center py-4">
          <input
            className="block w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
            placeholder="Add new Task"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            className="block w-full md:w-2/3 p-2 border border-gray-300 rounded-md"
            placeholder="Details about the task..."
            type="text"
            value={newDetails}
            onChange={(e) => setNewDetails(e.target.value)}
          />
          <button
            className="bg-green-500 text-white w-10 h-10 rounded-md text-2xl"
            onClick={saveTask}
          >
            +
          </button>
        </label>
      </div>

      {/* Active Tasks */}
      <div className="mt-4">
        <h1 className="text-lg md:text-2xl font-bold mb-4">All Active Tasks</h1>
        <div className="flex flex-wrap gap-4">
          {activeTasks.map((task, index) => (
            <div
              key={index}
              className="bg-[#F0D1A8] p-2 rounded-md flex justify-between w-full md:w-auto"
            >
              <div>
                <h1 className="font-bold">{task.task}</h1>
                <p className="opacity-75 text-sm">{task.details}</p>
                <span>{task.date}</span>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => completeTask(index)}>
                  <TiInputCheckedOutline size={24} />
                </button>
                <button onClick={() => editTask(index)}>
                  <TiEdit size={24} />
                </button>
                <button onClick={() => deleteTask(index)}>
                  <TiDelete size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Tasks */}
      <div className="mt-4">
        <h1 className="text-lg font-bold mb-4">Completed Tasks</h1>
        <div className="flex flex-wrap gap-4">
          {completedTasks.map((task, index) => (
            <div key={index} className="bg-[#F2EAEA] p-2 rounded-md relative">
              <h2 className="font-semibold">{task.task}</h2>
              <p className="text-sm opacity-75">{task.details}</p>
              <span className="text-xs text-gray-500">{task.date}</span>
              <button
                className="absolute top-2 right-2 text-red-500"
                onClick={() => deleteCompletedTask(index)}
              >
                <TiDelete size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
