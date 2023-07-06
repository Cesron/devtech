import { Provider } from "react-redux";
import "./App.css";
import { toDoStore } from "./store/toDo.store";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Provider store={toDoStore}>
      <div className="grid place-content-center h-screen">
        <CreateTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
