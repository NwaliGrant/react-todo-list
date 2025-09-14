import { useState } from "react";
import style from "./Form.module.css"

export default function Form({ addTodo }) {
  const [todo, setTodo] = useState(""); // local input state

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    addTodo(todo);   // send todo back to parent
    setTodo("");     // clear input
  }; 

  return (
    <form className={style.todoform} onSubmit={handleSubmit}>
      <input className={style.modernInput}
        onChange={(e) => setTodo(e.target.value)} 
        value={todo} 
        type="text" 
        placeholder="Add a task" 
      />
      <button className={style.modernbtn} type="submit">Add</button>
    </form>
  );
}
