import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import Stats from "./components/Stats";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      createdAt: new Date().toLocaleString(),
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

  const filteredTasks = tasks
    .filter((task) =>
      task.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    });

  return (
    <div className="app">
      <Header />
      <TaskForm
        onAddTask={addTask}
        editingTask={editingTask}
        onUpdateTask={updateTask}
      />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Filter
        filter={filter}
        setFilter={setFilter}
      />

      <Stats tasks={tasks} />

      <TaskList
          tasks={filteredTasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
          onEditTask={editTask}
      />
      
      <Footer />
    </div>
  );
}

export default App;