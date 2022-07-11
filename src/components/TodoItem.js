const TodoItem = (props) => {
  const { Todos, setTodos } = props;
  const todoToggle = (id) => {
    const _copyTodos = [...Todos];
    _copyTodos.find((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return setTodos(_copyTodos);
    });
  };
  const itemDelete = (id) => {
    const result = Todos.filter((item) => item.id !== id);
    setTodos(result);
  };
  return Todos.map((item) => {
    return (
      <div className="flex justify-between items-center" key={item.id}>
        <span className="todo-item flex items-center">
          <input
            checked={item.completed}
            onChange={() => {
              todoToggle(item.id);
            }}
            type="checkbox"
          />
          <p className={item.completed ? `todo-text completed` : `todo-text`}>
            {item.text}
          </p>
        </span>
        <i
          class="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            itemDelete(item.id);
          }}
        />
      </div>
    );
  });
};

export default TodoItem;
