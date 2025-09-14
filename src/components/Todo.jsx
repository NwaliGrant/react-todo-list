import { useState, useEffect } from "react";
import TodoItem from "./TodoItem.jsx";  
import Form from "./Form.jsx";
import styles from "./Todo.module.css";

export default function Todo() { 
  // ✅ Initialize from localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // ✅ Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ✅ Add new todo
  const addTodo = (newTodo) => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo, completed: false }]);
  };

  // ✅ Delete by index
  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  // ✅ Toggle complete
  const handleComplete = (indexToComplete) => {
    const updatedTodos = todos.map((todo, index) =>
      index === indexToComplete ? { ...todo, completed: !todo.completed } : todo
    );

    // Move completed to bottom
    updatedTodos.sort((a, b) => a.completed - b.completed);
    setTodos(updatedTodos);
  };

  // ✅ Count remaining tasks
  const remainingTasks = todos.filter(todo => !todo.completed).length;

  return (
    <div>
      <Form addTodo={addTodo} />

      <ol className={styles.List}>
        <h3>Welcome to my Todo List 💥💥💥</h3>      

        {todos.length === 0 ? (
          <p className={styles.emptyMsg}>No tasks yet, add one! 🚀</p>
        ) : (
          todos.map((item, index) => (
            <TodoItem 
              key={index} 
              item={item} 
              onDelete={() => handleDelete(index)}  
              onComplete={() => handleComplete(index)} 
            />
          ))
        )}
      </ol>

      {/* ✅ Task Counter */}
      <p className={styles.counter}>
        {remainingTasks} {remainingTasks === 1 ? "task" : "tasks"} remaining
      </p>
    </div>
  );
}
