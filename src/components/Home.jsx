import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase';
import videoBg from "../assets/-6399.mp4";


function Home({setSelectedPostText, selectedPostText, setSelectedCode}) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(query(collection(db, "posts"),orderBy("createdAt", "desc"),limit(3)));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    }
    getPosts();
   },[]);

   const handleClick = (post) => {
    setSelectedPostText(post.postsText);
    setSelectedCode(post.code);
    console.log(selectedPostText);
  };
 
   const sortedLists = postList.sort((a, b) => b.createdAt - a.createdAt);

  return (
    <>
     <div class="relative w-screen h-screen">
  <video class="absolute top-0 left-0 w-full h-full object-cover z-0" src={videoBg} autoPlay muted loop playsInline/>
  <div class="absolute bottom-60 right-12 transform translate-x-1/14 translate-y-1/2 z-10">
    <h1 class="text-white text-6xl font-bold mb-4 sm:text-7xl">Tomohiro</h1>
    <p class="text-white text-6xl font-bold mb-4 sm:text-7xl">Kuriki</p>
  </div>
  <div class="absolute mt-40 left-12 transform -translate-y-1/2 z-10 w-1/2">
    <h1 class=" text-7xl sm:text-9xl font-bold mb-4 text-indigo-100">Welcome</h1>
    <p class=" text-5xl sm:text-7xl font-bold mb-4 text-indigo-100">to My Site</p>
  </div>
</div>



    <section className='text-gray-700 border-t border-gray-200 bg-white py-6 sm:py-8 lg:py-12  pb-6 sm:pb-8 lg:pb-12 bg-h-screen w-full bg-gradient-to-br from-violet-300 via-blue-500 to-orange-100'>
  <div className='container px-5 py-24 mx-auto'>
    <div className='text-center md-20  mb-20'>
      <h1 className='text-2xl sm:text-3xl mb-2 text-gray-900 font-bold'>最新の投稿情報</h1>
    </div>
    <div className='flex flex-wrap -mx-4'>
      {sortedLists.map((post) => (
        <div key={post.id} className='md:w-1/3 px-4 mb-8'>
          <div className='bg-gray-200 rounded-lg p-8'>
            <div className='flex items-center mb-3'>
              <div className='bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center'>
              </div>
              <h2 className='text-gray-900 text-lg font-bold ml-2'>{post.title}</h2>
            </div>
            <Link to='/postdetail' onClick={() => handleClick(post)} className='flex mt-3 text-green-500 items-center font-bold'>詳細</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


   <section className='text-gray-700 border-t border-gray-200 bg-white py-6 sm:py-8 lg:py-12 bg-h-screen w-full bg-gradient-to-br
  from-violet-300 via-blue-100 to-orange-100'>
    <div className='container px-5 py-24 mx-auto flex flex-wrap'>
      <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
        <img src='./img/4794985515903460063.d142979e8592baa951b451dcf957498f.22091503.JPG' alt='' className='rounded md:w-1/2 lg:max-w-lg w-5/6'/>
      </div>
       <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2 '>
        <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
        <div className='w-full'>
          <h2 className='font-bold text-blue-400'>プログラミングスキル</h2>
          <div className='shadow bg-green-100 mt-2 w-full'>
             <div className='bg-green-600 text-xs leading-none py-1 text-center  font-bold text-blue-200' style={{width: "25%" }}>25%</div>
          </div>
          <br />
          <h2 className='font-bold text-yellow-600'>柔軟性</h2>
          <div className='shadow bg-green-100 mt-2 w-full'>
             <div className='bg-green-600 text-xs leading-none py-1 text-center  font-bold text-yellow-200' style={{width: "75%" }}>75%</div>
          </div>
          <br />
          <h2 className='font-bold text-pink-400'>親切さ</h2>
          <div className='shadow bg-green-100 mt-2 w-full'>
             <div className='bg-green-600 text-xs leading-none py-1 text-center  font-bold text-pink-200' style={{width: "85%" }}>85%</div>
          </div>
          <br />
          <h2 className='font-bold text-red-500'>コミュニケーション</h2>
          <div className='shadow bg-green-100 mt-2 w-full'>
             <div className='bg-green-600 text-xs leading-none py-1 text-center text-white font-bold'   style={{width: "95%" }}>95%</div>
          </div>
        </div>
       </div>
    </div>

   </section>
                        </>
  )
}

export default Home