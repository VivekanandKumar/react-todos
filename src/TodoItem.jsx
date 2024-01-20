const TodoItem = ({ Todos, setTodos }) => {

    /**
     * Function for delete a Todo
     * @param {Number} id of Todo-Item
     */
    const deleteTodoHandler = (id) => {
        let _todos = [...Todos];
        _todos = _todos.filter(todo => todo.id !== id);
        setTodos(_todos);
    }

    /**
     * Function for toggle between Todo Item Completed or Not.
     * @param {Number} id of Todo-Item
     */
    const handleOnComplete = (id) => {
        const _todos = [...Todos];
        const index = _todos.findIndex(todo => todo.id === id);
        if (index > -1) {
            _todos[index].isCompleted = !_todos[index].isCompleted;
            setTodos(_todos);
        }

    }

    return (
        Todos.map(({ id, text, isCompleted }) => {
            return (
                <div key={id} className="px-3 my-2 py-1 text-sm rounded-md bg-blue-300 text-blue-900 flex justify-between align-center duration-200">
                    <div className="flex align-center gap-2">
                        <input checked={isCompleted} onChange={() => { handleOnComplete(id) }} id={id} type="checkbox" className="accent-pink-500 w-4 h-6" />
                        <label className={isCompleted ? 'text-pink-500' : ''} htmlFor={id}>{text}</label>
                    </div>

                    <svg onClick={() => deleteTodoHandler(id)} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="blue" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div >
            )
        })
    )
}
export default TodoItem;