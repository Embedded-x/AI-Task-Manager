import TaskItem from "./TaskItem";

function TaskList({
    tasks,
    onDeleteTask
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
                />
            ))
        )}
      </div>
    );
  }
  
  export default TaskList;