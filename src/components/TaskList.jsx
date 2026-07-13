function TaskList({ tasks }) {
    return (
      <div>
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          tasks.map((task) => (
            <p key={task.id}>
              {task.text}
            </p>
          ))
        )}
      </div>
    );
  }
  
  export default TaskList;