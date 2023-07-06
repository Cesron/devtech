import { Action } from "../actions/toDoActions";
import { ToDoState } from "../types/toDo";
import { createStore } from "redux";

const intialState: ToDoState = {
  toDos: [],
};

const toDoReducer = (
  state: ToDoState = intialState,
  action: Action
): ToDoState => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
      };
    }
    case "COMPLETE_TODO": {
      return {
        ...state,
        toDos: state.toDos.map((toDo) => {
          return toDo.id === action.payload
            ? { ...toDo, status: "completed" }
            : toDo;
        }),
      };
    }

    default:
      return state;
  }
};

export const toDoStore = createStore(toDoReducer);
