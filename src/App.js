import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './Todo';
import TodoDetails from './TodoDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/todo' element={<Todo />} />
        <Route path='/todo/:id' element={<TodoDetails />}></Route>
      </Routes>
    </div>
  )
}

export default App;
