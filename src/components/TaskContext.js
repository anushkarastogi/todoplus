import React from 'react';

const TaskContext = React.createContext();

export function useTasks() {
  return React.useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const markTaskAsCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, markTaskAsCompleted, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
}
