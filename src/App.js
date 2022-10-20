import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import AddUser from './components/AddUser/AddUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/users' element={<Users></Users>}/>
        <Route path='addUser' element={<AddUser></AddUser>} />
      </Routes>
    </div>
  );
}

export default App;
