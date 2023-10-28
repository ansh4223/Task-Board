import React, { useState } from 'react';
import Task from './Task';

function TaskList({ list, onDrop }) {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState(list.tasks);

  const handleAddTask = () => {
    if (taskName) {
      setTasks([...tasks, taskName]);
      setTaskName('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedText = event.dataTransfer.getData('text/plain');
    if (droppedText) {
      setTasks([...tasks, droppedText]);
      onDrop(droppedText);
    }
  };

  return (
    <div
      className="task-list"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2>{list.name}</h2>
      <div className="task-container">
        {tasks.map((task, index) => (
          <Task key={index} text={task} onDelete={() => handleDeleteTask(index)} />
        ))}
      </div>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskList;
