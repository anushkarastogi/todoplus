import React from 'react';
import { useTasks } from '../TaskContext';
import "./ToDoList.css"
function ToDoList() {
  const { tasks, addTask, markTaskAsCompleted, removeTask } = useTasks();
  const completedTasks = tasks.filter((task) => task.completed).length;
  const [newTask, setNewTask] = React.useState('');
  const [error, setError] = React.useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') {
      setError('Task name is required');
      return;
    }
    const task = { id: Date.now(), name: newTask, completed: false };
    addTask(task);
    setNewTask('');
    setError('');
  };

  const handleCheckboxChange = (taskId) => {
    markTaskAsCompleted(taskId);
  };

  const handleRemoveTask = (taskId) => {
    removeTask(taskId);
  };

  return (
    <div className="todo-list">
      <h1 style={{ textAlign: 'center', fontStyle: 'italic' }}>To-Do List</h1>
      <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Total Tasks: {tasks.length}</p>
      <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Completed Tasks: {completedTasks}</p>
      <form onSubmit={handleAddTask}>
      <div className="search-container">
  <input
    type="text"
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)}
    placeholder="Enter a new task"
    style={{ textAlign: 'center', fontStyle: 'italic' }}
  />
  <button type="submit" className="add-task-button">Add Task</button>
</div>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(task.id)}
            />
            {task.name}
            <button onClick={() => handleRemoveTask(task.id)} className="remove-task-button">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
