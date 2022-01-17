// import './App.css';
import { Route, Routes } from 'react-router';
import { CreatePost } from './components/index.js'
import { Home, Login, Signup } from './pages'

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/create' element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
