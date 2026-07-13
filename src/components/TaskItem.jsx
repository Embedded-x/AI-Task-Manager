import "../styles/TaskItem.css";

function TaskItem({ task, onDeleteTask, onToggleTask }) {
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
        </div>
  
        <div className="task-buttons">
          <button>Edit</button>
  
          <button onClick={() => onDeleteTask(task.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
  
  export default TaskItem;