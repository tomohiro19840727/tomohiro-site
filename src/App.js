import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Blog from './components/Blog'
import Profile from './components/Profile'
import Setblog from './components/Setblog'
import PostDetail from './components/PostDetail'
import Webapp from "./components/Webapp"
import SendMail from "./components/SendMail"


function App() {
  const [isAuth, setIsAuth ] = useState(localStorage.getItem("isAuth"));
  const [selectedPostText, setSelectedPostText] = useState("");
  const [selectedCode, setSelectedCode ] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  

  return (
   <Router>
     <Navbar isAuth={isAuth} />
    <Routes>
      <Route path='/' element={<Home  selectedPostText={selectedPostText} setSelectedPostText={setSelectedPostText}  selectedCode={selectedCode} setSelectedCode={setSelectedCode} />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Webapp' element={<Webapp />} />
      <Route path='/SendMail' element={<SendMail />} />
      <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      <Route path='/logout' element={<Logout setIsAuth={setIsAuth} />} />
      <Route path='/setblog' element={<Setblog isAuth={isAuth}  selectedPostText={selectedPostText} setSelectedPostText={setSelectedPostText}  selectedCode={selectedCode} setSelectedCode={setSelectedCode} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/postdetail' element={<PostDetail selectedPostText={selectedPostText} setSelectedPostText={setSelectedPostText}  selectedCode={selectedCode} setSelectedCode={setSelectedCode} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>} />
    </Routes>
   </Router>
  )
}

export default App
