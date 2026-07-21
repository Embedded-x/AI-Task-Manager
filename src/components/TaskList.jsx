import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

function TaskList({
  tasks,
  onDeleteTask,
  onToggleTask,
  onEditTask,
}) {

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h2>📋 No Tasks Found</h2>
        <p>Add your first task to get started.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
}

export default TaskList;