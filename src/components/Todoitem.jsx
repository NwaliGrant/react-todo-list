import styles from "./Todo.module.css";

export default function TodoItem({ item, onDelete, onComplete }) { 
  return (
    <li className={`${styles.todoItem} ${item.completed ? styles.completed : ""}`}>
      <span>{item.text}</span>
      <div className={styles.actions}>
        <button onClick={onComplete} className={styles.completeBtn}>
          {item.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={onDelete} className={styles.deleteBtn}>
          Delete
        </button>
      </div>
    </li>
  );
}
