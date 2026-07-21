import TaskItem from "./TaskItem";

function TaskList({
    tasks,
    onDeleteTask,
    onToggleTask,
    onEditTask,
}) {
    return (
      <div>
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
            tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDeleteTask={onDeleteTask}
                    onToggleTask={onToggleTask}
                    onEditTask={onEditTask}
                />
            ))
        )}
      </div>
    );
  }
  
  export default TaskList;