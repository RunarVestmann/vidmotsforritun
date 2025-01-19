import { Todo } from "../Todo/Todo";
import type { TodoModel } from "../../types";

import styles from "./TodoList.module.css";

interface TodoListProps {
  todos: TodoModel[];
  updateState: (newState: boolean, id: string) => void;
}

export const TodoList = ({ todos, updateState }: TodoListProps) => {
  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo}
          updateState={(newState) => {
            updateState(newState, todo.id);
          }}
        />
      ))}
    </div>
  );
};
