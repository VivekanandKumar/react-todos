import { useEffect, useState } from "react";
import "./App.css";
import Items from "./Items";
const App = () => {
  const [currentItem, setCurrentItem] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const text = e.target.value;
    setCurrentItem(text);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (currentItem.trim() === "") {
      return alert("Enter a todo..");
    }
    const newItem = {
      id: Date.now(),
      text: currentItem,
      completed: false,
    };
    setItems([...items, newItem]);
    setCurrentItem("");
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setItems(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);
  return (
    <div className="outer">
      <div className="inner">
        <h2>Todo App</h2>
        <form className="input-wrapper">
          <input value={currentItem} onChange={handleChange} />
          <button type="submit" onClick={handleClick}>
            Add
          </button>
        </form>
        <div className="list-wrapper">
          <Items listItem={items} updateItem={setItems} />
        </div>
      </div>
    </div>
  );
};

export default App;
