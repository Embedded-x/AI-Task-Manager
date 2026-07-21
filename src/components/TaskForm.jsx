import { useState , useEffect } from "react";
import "../styles/TaskForm.css";

function TaskForm({ onAddTask, editingTask, onUpdateTask, }) {
  const [task, setTask] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask.text);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (task.trim() === "") return;
  
    if (editingTask) {
      onUpdateTask({
        ...editingTask,
        text: task,
      });
    } else {
      onAddTask(task);
    }
  
    setTask("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">
       {editingTask ? "✏️ Update Task" : "➕ Add Task"} 
      </button>
    </form>
  );
}

export default TaskForm;