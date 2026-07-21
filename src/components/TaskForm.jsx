import { useState, useEffect } from "react";
import "../styles/TaskForm.css";

function TaskForm({ onAddTask, editingTask, onUpdateTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask.text);
      setPriority(editingTask.priority || "Medium");
    } else {
      setTask("");
      setPriority("Medium");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    if (editingTask) {
      onUpdateTask({
        ...editingTask,
        text: task,
        priority,
      });
    } else {
      onAddTask({
        text: task,
        priority,
      });
    }

    setTask("");
    setPriority("Medium");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <div className="priority-container">
        <label>Priority:</label>

        <div className="priority-buttons">
          <button
            type="button"
            className={`priority-btn high ${
              priority === "High" ? "active" : ""
            }`}
            onClick={() => setPriority("High")}
          >
            🔥 High
          </button>

          <button
            type="button"
            className={`priority-btn medium ${
              priority === "Medium" ? "active" : ""
            }`}
            onClick={() => setPriority("Medium")}
          >
            ⚡ Medium
          </button>

          <button
            type="button"
            className={`priority-btn low ${
              priority === "Low" ? "active" : ""
            }`}
            onClick={() => setPriority("Low")}
          >
            🌿 Low
          </button>
        </div>
      </div>

      <button className="submit-btn" type="submit">
        {editingTask ? "✏️ Update Task" : "➕ Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;