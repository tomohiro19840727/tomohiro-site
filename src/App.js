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
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedPostText, setSelectedPostText] = useState("");
  const [selectedCode, setSelectedCode ] = useState("");
  const [selectedPostText2, setSelectedPostText2] = useState("");
  const [selectedCode2, setSelectedCode2 ] = useState("");
  const [selectedPostText3, setSelectedPostText3] = useState("");
  const [selectedCode3, setSelectedCode3 ] = useState("");
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


      <Route path='/setblog' element={<Setblog isAuth={isAuth}  
      
      selectedTitle={selectedTitle} 
      setSelectedTitle={setSelectedTitle}

      selectedPostText={selectedPostText} 
      setSelectedPostText={setSelectedPostText}
      selectedCode={selectedCode} 
      setSelectedCode={setSelectedCode} 

      selectedPostText2={selectedPostText2} 
      setSelectedPostText2={setSelectedPostText2}
      selectedCode2={selectedCode2} 
      setSelectedCode2={setSelectedCode2}

      selectedPostText3={selectedPostText3} 
      setSelectedPostText3={setSelectedPostText3}
      selectedCode3={selectedCode3} 
      setSelectedCode3={setSelectedCode3}

      selectedImage={selectedImage} 
      setSelectedImage={setSelectedImage} />} />


      <Route path='/blog' element={<Blog />} />

      <Route path='/postdetail' element={<PostDetail selectedPostText={selectedPostText} 

      selectedTitle={selectedTitle} 
      setSelectedTitle={setSelectedTitle}

      setSelectedPostText={setSelectedPostText}
      selectedCode={selectedCode}
      setSelectedCode={setSelectedCode} 

      selectedPostText2={selectedPostText2} 
      setSelectedPostText2={setSelectedPostText2}
      selectedCode2={selectedCode2} 
      setSelectedCode2={setSelectedCode2}

      selectedPostText3={selectedPostText3} 
      setSelectedPostText3={setSelectedPostText3}
      selectedCode3={selectedCode3} 
      setSelectedCode3={setSelectedCode3}
      
      selectedImage={selectedImage} 
      setSelectedImage={setSelectedImage} />} />
    </Routes>
   </Router>
  )
}

export default App
