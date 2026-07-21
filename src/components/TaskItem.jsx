import "../styles/TaskItem.css";

function TaskItem({
  task,
  onDeleteTask,
  onToggleTask,
  onEditTask,
}) {
  return (
    <div className="task-item">
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          className="task-checkbox"
        />

        <div className="task-details">
          <div className="task-header">
            <h3
              className={task.completed ? "completed" : ""}
            >
              {task.text}
            </h3>

            <span
              className={`priority ${task.priority.toLowerCase()}`}
            >
              {task.priority}
            </span>
          </div>

          <div className="task-meta">
            📅 {task.createdAt}
          </div>

          {task.completed && (
            <span className="badge">
              ✅ Completed
            </span>
          )}
        </div>
      </div>

      <div className="task-buttons">
        <button
          className="edit-btn"
          onClick={() => onEditTask(task)}
        >
          ✏️ Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDeleteTask(task.id)}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;