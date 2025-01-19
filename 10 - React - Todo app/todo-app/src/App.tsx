import { useState } from "react";
import type { TodoModel } from "./types";
import { TodoList } from "./components/TodoList/TodoList";

import styles from "./App.module.css";
import { getInitialState, storeState } from "./utils";
import { InputSection } from "./components/InputSection/InputSection";

const generateId = (todos: TodoModel[]) => {
  let highestId = 0;

  for (const { id } of todos) {
    const numericId = Number(id);
    if (numericId > highestId) {
      highestId = numericId;
    }
  }

  return String(highestId + 1);
};

function App() {
  const [todos, setTodos] = useState<TodoModel[]>(getInitialState());

  const addTodo = (todoTitle: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.concat({
        done: false,
        title: todoTitle,
        id: generateId(prevTodos),
      });

      storeState(updatedTodos);

      return updatedTodos;
    });
  };

  const clearDoneTodos = () => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((prevTodo) => !prevTodo.done);
      storeState(updatedTodos);
      return updatedTodos;
    });
  };

  return (
    <div className={styles.container}>
      <InputSection addTodo={addTodo} clearDoneTodos={clearDoneTodos} />
      <TodoList
        todos={todos}
        updateState={(newState, id) => {
          setTodos((prevTodos) =>
            prevTodos.map((prevTodo) => {
              if (prevTodo.id === id) {
                return {
                  ...prevTodo,
                  done: newState,
                };
              }
              return prevTodo;
            })
          );
        }}
      />
    </div>
  );
}

export default App;
