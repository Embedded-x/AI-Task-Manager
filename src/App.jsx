import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
  
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );
  
    setTasks(updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
  
      return task;
    });
  
    setTasks(updatedTasks);
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
  
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  return (
    <div>
      <Header />
      <TaskForm
        onAddTask={addTask}
        editingTask={editingTask}
        onUpdateTask={updateTask}
      />
      <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
          onEditTask={editTask}
      />
    </div>
  );
}

export default App;