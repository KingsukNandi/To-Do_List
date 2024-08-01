import { useEffect } from "react";
import "./App.css";
import { TodoInput, TodoItems } from "./components/index";
import { TodoProvider, TodoContext } from "./contexts/TodoContext";

function App() {
  // let { todos } = useTodoContext();
  return (
    <TodoProvider>
      <TodoInput />
      <TodoItems />
    </TodoProvider>
  );
}

export default App;
