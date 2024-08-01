import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [allowUpdate, setAllowUpdate] = useState(true);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Add New Task",
      completed: false,
      edit: false,
    },
    {
      id: 2,
      title: "Edit or Delete This Task",
      completed: false,
      edit: false,
    },
    {
      id: 3,
      title: "Check Done or Undone",
      completed: false,
      edit: false,
    },
  ]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), title: todo, completed: false },
    ]);
  };
  const checkTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    setAllowUpdate((prev) => !prev);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title: todo } : item))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const editTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, edit: !item.edit } : item
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        allowUpdate,
        setAllowUpdate,
        addTodo,
        checkTodo,
        updateTodo,
        deleteTodo,
        editTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
