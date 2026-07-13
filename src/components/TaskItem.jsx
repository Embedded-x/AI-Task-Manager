import "../styles/TaskItem.css";

function TaskItem({
    task,
    onDeleteTask
}) {
    return (
      <div className="task-item">
        <span>{task.text}</span>
  
        <div className="task-buttons">
          <button>Edit</button>
          <button
            onClick={() => onDeleteTask(task.id)}
        >
            Delete
          </button>
        </div>
      </div>
    );
  }
  
  export default TaskItem;