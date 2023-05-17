import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuth }) => {
  return (
    <div className='text-gray-700 border-gray-200 bg-white bg-h-screen w-full bg-gradient-to-br from-violet-300 via-blue-100 to-orange-100'>
      <header className='text-gray-700 border-b border-gray-400'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a href='#' className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className='text-3xl ml-3 font-cursive'>Tomohiro Kuriki</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <Link to="/" className='mr-5 hover:text-blue-400 duration-300 text-black hover:text-blue-500 hover:underline transform hover:scale-110 transition-transform' >Home</Link>
            <Link to="/profile" className="mr-5 hover:text-blue-400 duration-300 text-black hover:text-blue-500 hover:underline transform hover:scale-110 transition-transform" >Profile</Link>
            <Link to="/Webapp" className="mr-5 hover:text-blue-400 duration-300 text-black hover:text-blue-500 hover:underline transform hover:scale-110 transition-transform" >Web.app</Link>
            <Link to="/setblog" className="mr-5 hover:text-blue-400 duration-300 text-black hover:text-blue-500 hover:underline transform hover:scale-110 transition-transform" >Blog</Link>
            {!isAuth ?  
              <Link to="/login" className="mr-5 hover:text-blue-400 duration-300 text-black hover:text-blue-500 hover:underline transform hover:scale-110 transition-transform" >Login</Link> 
              : 
              <>
                <Link to="/logout" className="mr-5 hover:text-blue-400 duration-300 text-black hover:text-blue-500 hover:underline transform hover:scale-110 transition-transform" >Logout</Link>
                <Link to="/blog" className="mr-5 hover:text-blue-400 duration-300 text-black hover:text-blue-500 hover:underline transform hover:scale-110 transition-transform" >Posts</Link> 
              </>
            }
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
