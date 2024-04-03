import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const users = [
  { name: "Vijay Kumar", id: 1 },
  { name: "Nikhil Patil", id: 2 },
  { name: "Samir Shah", id: 3 }
];

const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);

function App() {
  return (
    <>
    <h1>Display Array User </h1>
      <h3>User names</h3>
      <ul>{userItems}</ul>
    </>
  );
}

export default App
