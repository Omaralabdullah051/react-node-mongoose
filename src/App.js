import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Todo from './Todo';
import TodoDetails from './TodoDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/todo' element={<Todo />} />
        <Route path='/todo/:id' element={<TodoDetails />}></Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;
