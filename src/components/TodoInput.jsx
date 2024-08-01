import React, { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

function TodoInput() {
  const { addTodo } = useTodoContext();
  const [todo, setTodo] = useState("");
  const handleAddTodo = () => {
    addTodo(todo);
    setTodo("");
  };
  return (
    <div className="neu flex justify-between items-center">
      <input
        type="text"
        placeholder="Add a new to-do"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        className="bg-transparent p-2 m-2"
      />
      <button
        className={
          (todo.length <= 0 ? "opacity-40" : "") +
          " p-3 flex justify-center items-center cursor-pointer"
        }
        onClick={() => {
          handleAddTodo();
        }}
        disabled={todo.length <= 0}
      >
        <span className="material-symbols-outlined">add_circle</span>
      </button>
    </div>
  );
}

export default TodoInput;
