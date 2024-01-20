import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const App = () => {
    const [Todos, setTodos] = useState([]);
    const [currentItem, setCurrentItem] = useState("");

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("Todos"));
        if (todos?.length) {
            setTodos(todos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(Todos));
    }, [Todos]);

    const handleInputChange = (e) => {
        e.preventDefault();
        const text = e.target.value.trim();
        setCurrentItem(text);
    }

    const addTodo = () => {
        if (currentItem) {
            const _Todo = [...Todos];
            const todo = {
                text:currentItem,
                id: new Date().valueOf(),
                isCompleted: false
            }
            _Todo.push(todo);
            setTodos(_Todo);
            setCurrentItem("");
        }
    }



    return (
        <div className="bg-gray-700 w-100 h-screen duration-300">
            <div className="flex justify-center">
                <div className="w-full max-w-sm px-4 py-3 rounded-md shadow-md bg-gray-800 mt-5">
                    <header>
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">To-Do List</h1>
                        <div className="border border-gray-600 rounded-lg p-3 flex justify-between gap-3">
                            <input onChange={handleInputChange} value={currentItem} className="flex-auto text-white bg-gray-800 placeholder-gray-400 outline-none " type="text" placeholder="What's in your mind..." />
                            <button onClick={addTodo} className="px-4 py-3 text-sm font-medium text-gray-100 uppercase transition-colors duration-300 rounded-md hover:bg-gray-400 focus:outline-none bg-gray-600">Add</button>
                        </div>
                    </header>
                    <main className="mt-4 duration-200">
                        <TodoItem Todos={Todos} setTodos={setTodos} />
                    </main>
                </div>
            </div>
        </div>
    )
}
export default App;