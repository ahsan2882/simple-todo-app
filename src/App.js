import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom';
import About from './myComponents/AboutPage/About';
import Home from './myComponents/HomePage/Home';
import Login from './myComponents/LoginPage/Login';
import Signup from './myComponents/RegisterPage/Signup';
import Todo from './myComponents/TodoPage/Todo';
import React, { useState, createContext } from 'react';
const AuthState = createContext();
const setAuthState = createContext();
function App() {
  const [loginState, setloginState] = useState(false);
  
  return (
    <>
      <AuthState.Provider value={loginState}>
        <setAuthState.Provider value={setloginState}>
          <BRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Signup />} />
              <Route path='/tasks' element={<Todo />} />
            </Routes>
          </BRouter>
        </setAuthState.Provider>
      </AuthState.Provider>
    </>
  );
}

export default App;
export { AuthState, setAuthState };
