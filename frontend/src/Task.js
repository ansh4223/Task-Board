import React from 'react';

function Task({ text, onDelete }) {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', text);
  };

  return (
    <div className="task" draggable="true" onDragStart={handleDragStart}>
      <span>{text}</span>
      <button onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;

