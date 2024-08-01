import React, { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

function TodoItems() {
  let { todos, checkTodo, updateTodo, deleteTodo, editTodo } = useTodoContext();
  console.log(todos);
  // const [edit, setEdit] = useState(false);
  // const [todo, setTodo] = useState("");
  return (
    <div className="my-20">
      {todos.length > 0 &&
        todos.map((item) => (
          <div key={item.id} className="neu flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={item.completed}
                name={item.id}
                id={item.id}
                onChange={() => {
                  checkTodo(item.id);
                }}
                className=""
              />
              <input
                type="text"
                value={item.title}
                readOnly={!item.edit}
                onChange={(e) => {
                  // setTodo(e.target.value);
                  updateTodo(item.id, e.target.value);
                }}
                className={
                  (item.edit ? "bg-white bg-opacity-5 " : "") +
                  " bg-transparent p-2 rounded-md m-2" +
                  (item.completed ? " line-through opacity-60" : "")
                }
              />
            </div>
            <div className="flex">
              <button
                onClick={() => {
                  editTodo(item.id);
                }}
                className={
                  (item.title.length <= 0 || item.completed
                    ? "opacity-40"
                    : "") + " flex justify-center items-center m-3 "
                }
                disabled={item.title.length <= 0 || item.completed}
              >
                {!item.edit ? (
                  <span className="material-symbols-outlined">edit</span>
                ) : (
                  <span className="material-symbols-outlined">save</span>
                )}
              </button>
              <button
                onClick={() => {
                  deleteTodo(item.id);
                }}
              >
                <span className="material-symbols-outlined flex justify-center items-center m-3 ">
                  delete
                </span>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TodoItems;
