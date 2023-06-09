import React, { useEffect, useRef } from 'react'
import videoBg from "../assets/-6399.mp4";
import "./Welcome.css"

const Welcome = () => {
  const aboutRef1 = useRef(null);
 const aboutRef2 = useRef(null);




useEffect(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // テキストが50%以上表示された時に反応する
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-delayed-tracking-in-expand');
      } else {
        entry.target.classList.remove('animate-delayed-tracking-in-expand');
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(aboutRef1.current);
  observer.observe(aboutRef2.current);
  

  return () => {
    observer.disconnect();
  };
}, []);


  return (
    <div class="relative w-screen h-screen">
  <video class="absolute top-0 left-0 w-full h-full object-cover z-0" src={videoBg} autoPlay muted loop playsInline/>
  <div  ref={aboutRef1} class="absolute bottom-60 right-12 transform translate-x-1/14 translate-y-1/2 z-10">
    <h1 class="text-white text-6xl font-bold mb-4 sm:text-7xl animate-delayed-tracking-in-expand">Tomohiro</h1>
    <p class="text-white text-6xl font-bold mb-4 sm:text-7xl animate-delayed-tracking-in-expand">Kuriki</p>
  </div>

  <div  ref={aboutRef2} class="absolute mt-40 left-12 transform -translate-y-1/2 z-10 w-1/2">
    <h1 class=" text-7xl sm:text-9xl font-bold mb-4 text-indigo-100 animate-delayed-tracking-in-expand">Welcome</h1>
    <p class=" text-5xl sm:text-7xl font-bold mb-4 text-indigo-100 animate-delayed-tracking-in-expand">to My Site</p>
  </div>
</div>
  )
}

export default Welcome