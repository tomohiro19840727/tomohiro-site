import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Blog from './components/Blog'
import Profile from './components/Profile'
import Setblog from './components/Setblog'
import Sleep from './components/Sleep'
import Cosplay from './components/Cosplay'
import Awake from './components/Awake'


function App() {
  const [isAuth, setIsAuth ] = useState(localStorage.getItem("isAuth"));

  return (
   <Router>
     <Navbar  isAuth={isAuth} />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Profile' element={<Profile />}></Route>
      <Route path='/login' element={<Login setIsAuth={setIsAuth} />}></Route>
      <Route path='/logout' element={<Logout setIsAuth={setIsAuth} />}></Route>
      <Route path='/setblog' element={<Setblog isAuth={isAuth} />}></Route>
      <Route path='/blog' element={<Blog />}></Route>
      <Route path='/sleep' element={<Sleep />}></Route>
      <Route path='/cosplay' element={<Cosplay />}></Route>
      <Route path='/awake' element={<Awake />}></Route>
    </Routes>
   </Router>
  )
}

export default App
