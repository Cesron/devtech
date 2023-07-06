import { useSelector } from "react-redux";
import { ToDoState } from "../types/toDo";
import { useDispatch } from "react-redux";
import { completeToDo } from "../actions/toDoActions";

const TaskList = () => {
  const todos = useSelector((state: ToDoState) => state.toDos);
  const dispatch = useDispatch();

  if (!todos || !todos.length) return <p>No tasks</p>;

  return (
    <>
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow my-1"
          >
            <p>{todo.title}</p>

            <p
              className={
                todo.status === "completed" ? "text-green-500" : "text-red-500"
              }
            >
              {todo.status}
            </p>

            {todo.status !== "completed" && (
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {
                  dispatch(completeToDo(todo.id));
                }}
              >
                Set completed
              </button>
            )}
          </div>
        );
      })}
    </>
  );
};

export default TaskList;
