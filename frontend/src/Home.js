/*import React from 'react'

function Home() {
  return (
    <div>Home</div>
  )
}

export default Home */
import React, { useState } from 'react';
import './Test.css';
import TaskList from './TaskList'; // Import the TaskList component
import Task from './Task'; // Import the Task component

function Home() {
    const [lists, setLists] = useState([]);
  const [listName, setListName] = useState('');

  const handleAddList = () => {
    if (listName) {
      setLists([...lists, { name: listName, tasks: [] }]);
      setListName('');
    }
  };
  return (
    <div className="App">
      <div className="header">
        <input
          type="text"
          placeholder="Enter list name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
        <button onClick={handleAddList}>Add List</button>
      </div>
      <div className="task-board">
        {lists.map((list, index) => (
          <TaskList key={index} list={list} />
        ))}
      </div>
    </div>
  );
}

export default Home;