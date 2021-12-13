import React from 'react';
import './App.css';
import './output.css';
import UserCard from './components/Card'

function App() {
  return (
    <div className="App bg-gray-800 w-screen h-screen flex">
      <UserCard/>
    </div>
  );
}

export default App;
