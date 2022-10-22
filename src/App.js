import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import AddUser from './components/AddUser/AddUser';
import Headers from './components/Headers/Headers';
import Update from './components/Update/Update';

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Users></Users>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/users' element={<Users></Users>}/>
        <Route path='/addUser' element={<AddUser></AddUser>} />
        <Route path='/update/:id' element={<Update></Update>} />
      </Routes>
    </div>
  );
}

export default App;
