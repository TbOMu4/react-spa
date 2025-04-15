import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTodos) {
      try {
        setTodos(JSON.parse(storedTodos));
      } catch (error) {
        console.error("Помилка при зчитуванні даних з localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo = {
      text: input.trim(),
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const handleToggleCompleted = (index) => {
    const updated = todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo));
    setTodos(updated);
  };

  const handleRemoveTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleAddTodo} className="mb-4 flex gap-2">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a task" className="flex-1 border px-3 py-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex justify-between items-center border-2  p-2 rounded 
        `}
          >
            <span className={`cursor-pointer flex-1   p-2 ${todo.completed ? "line-through" : ""}`} onClick={() => handleToggleCompleted(index)} title="Click to mark as completed">
              {todo.text}
            </span>
            <button onClick={() => handleRemoveTodo(index)} className="ml-2 cursor-pointer  text-red-500 hover:text-red-700">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
