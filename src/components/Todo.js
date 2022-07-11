import { useState } from "react";

const Todo = (props) => {
  const { Todos, setTodos } = props;
  const [currentItem, setCurrentItem] = useState("");
  const currentText = (e) => {
    const text = e.target.value;
    setCurrentItem(text);
  };
  const getInput = (e) => {
    e.preventDefault();
    if (currentItem.trim() === "") {
      return;
    }
    const _todos = [...Todos];
    const id = Date.now();
    _todos.push({ id, text: currentItem, completed: false });
    setTodos(_todos);
    setCurrentItem("");
  };
  return (
    <form className="flex" onSubmit={getInput}>
      <input
        type="text"
        onChange={currentText}
        value={currentItem}
        placeholder="Create a Todo"
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default Todo;
