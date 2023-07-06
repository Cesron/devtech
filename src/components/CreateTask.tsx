import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../actions/toDoActions";

const CreateTask = () => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          addToDo({
            id: Math.floor(Math.random() * 1000),
            title: title,
            status: "not-started",
          })
        );
      }}
    >
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        type="text"
        placeholder="Title task"
        defaultValue={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="text-white mt-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add task
      </button>
    </form>
  );
};

export default CreateTask;
