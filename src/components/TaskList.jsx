import TaskItem from "./TaskItem";

function TaskList({
    tasks,
    onDeleteTask,
    onToggleTask
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
                />
            ))
        )}
      </div>
    );
  }
  
  export default TaskList;