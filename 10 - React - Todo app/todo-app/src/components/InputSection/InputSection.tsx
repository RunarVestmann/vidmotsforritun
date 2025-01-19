import { useState } from "react";
import styles from "./InputSection.module.css";

interface InputSectionProps {
  addTodo: (todoTitle: string) => void;
  clearDoneTodos: () => void;
}

export const InputSection = ({
  addTodo,
  clearDoneTodos,
}: InputSectionProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.container}>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            addTodo(inputValue);
            setInputValue("");
          }
        }}
      />
      <button
        disabled={!inputValue}
        onClick={() => {
          addTodo(inputValue);
          setInputValue("");
        }}
      >
        Add todo
      </button>

      <button onClick={clearDoneTodos}>Clear done</button>
    </div>
  );
};
