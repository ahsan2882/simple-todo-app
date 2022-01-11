import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom';
import About from './myComponents/AboutPage/About';
import Home from './myComponents/HomePage/Home';
import Login from './myComponents/LoginPage/Login';
import Signup from './myComponents/RegisterPage/Signup';
import Todo from './myComponents/TodoPage/Todo';

function App() {
  return (
    <>
      <BRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/tasks' element={<Todo />} />
        </Routes>
      </BRouter>
    </>
  );
}

export default App;
