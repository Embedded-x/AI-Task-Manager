import "../styles/Stats.css";

function Stats({ tasks }) {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
  
    return (
      <div className="stats">
        <p>📋 Total: {total}</p>
        <p>✅ Completed: {completed}</p>
        <p>⏳ Pending: {pending}</p>
      </div>
    );
  }
  
  export default Stats;