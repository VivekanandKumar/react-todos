import { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoItem from "./TodoItem";
import "../App.css";
const App = () => {
  const [Todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("Todos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  }, [Todos]);
  return (
    <div className="main">
      <h1>Todo App</h1>
      <Todo Todos={Todos} setTodos={setTodos} />
      {Todos.length < 1 ? (
        <h4 style={{ color: "lightgray", textAlign: "center" }}>
          Empty Todo List !!
        </h4>
      ) : (
        <>
          <h3>Your Todo's</h3>
          <hr />
          <div className="todos-list">
            <TodoItem Todos={Todos} setTodos={setTodos} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
