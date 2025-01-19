import type { TodoModel } from "../../types";

import styles from "./Todo.module.css";

interface TodoProps {
  todo: TodoModel;
  id: string;
  updateState: (newState: boolean) => void;
}

export const Todo = ({ todo, updateState, id }: TodoProps) => {
  return (
    <div className={styles.container}>
      <input
        id={id}
        name={id}
        type="checkbox"
        onChange={(event) => {
          updateState(event.target.checked);
        }}
      />
      <label htmlFor={id}>{todo.done ? <s>{todo.title}</s> : todo.title}</label>
    </div>
  );
};
