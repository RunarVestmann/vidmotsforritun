import type { TodoModel } from "./types";

const STATE_KEY = "todos";

export const getInitialState = (): TodoModel[] => {
  try {
    const todosString = localStorage.getItem(STATE_KEY);
    if (!todosString) return [];
    return JSON.parse(todosString) as TodoModel[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const storeState = (todos: TodoModel[]) => {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(todos));
  } catch {
    // Ignore any errors in case storing the value fails
  }
};
