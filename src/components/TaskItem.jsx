import "../styles/TaskItem.css";

function TaskItem({ task, onDeleteTask, onToggleTask, onEditTask }) {
  return (
    <div className="task-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />

        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.text}
        </span>

        {task.completed && (
          <span className="badge">
            ✅ Completed
          </span>
        )}
      </div>

      <div className="task-buttons">
        <button onClick={() => onEditTask(task)}>
          ✏️ Edit
        </button>

        <button onClick={() => onDeleteTask(task.id)}>
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;