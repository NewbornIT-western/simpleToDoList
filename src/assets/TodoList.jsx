import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["homework", "chores", "shopping"]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") {
      alert("pls enter a task");
      return;
    }
    setTasks((t) => [...t, newTask]);
  }

  function removeTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }

  function taskUp(index) {
    if (index === 0) return;
    setTasks((t) => {
      const newTasks = [...t];
      [newTasks[index - 1], newTasks[index]] = [
        newTasks[index],
        newTasks[index - 1],
      ];
      return newTasks;
    });
  }

  function taskDown(index) {
    if (index === tasks.length - 1) return;
    setTasks((t) => {
      const newTasks = [...t];
      [newTasks[index + 1], newTasks[index]] = [
        newTasks[index],
        newTasks[index + 1],
      ];
      return newTasks;
    });
  }

  return (
    <div className="to-do-list">
      <h1>To Do Listt</h1>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button className="add-button" onClick={addTask}>
        Add Task
      </button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="remove-button" onClick={() => removeTask(index)}>
              Remove
            </button>
            <button className="task-button" onClick={() => taskUp(index)}>
              👆
            </button>
            <button className="task-button" onClick={() => taskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default TodoList;
