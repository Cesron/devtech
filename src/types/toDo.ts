export type ToDoStatus = "not-started" | "in-progress" | "completed";

export type ToDo = {
  id: number;
  title: string;
  status: ToDoStatus;
};

export type ToDoState = {
  toDos: ToDo[];
};
