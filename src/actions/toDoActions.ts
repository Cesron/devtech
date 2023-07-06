import { ToDo } from "../types/toDo";

export type AddToDoAction = {
  type: "ADD_TODO";
  payload: ToDo;
};

export type CompleteToDoAction = {
  type: "COMPLETE_TODO";
  payload: number;
};

export type Action = AddToDoAction | CompleteToDoAction;

export const addToDo = (toDo: ToDo): AddToDoAction => ({
  type: "ADD_TODO",
  payload: toDo,
});

export const completeToDo = (id: number): CompleteToDoAction => ({
  type: "COMPLETE_TODO",
  payload: id,
});
