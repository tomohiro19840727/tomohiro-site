import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ja';

dayjs.locale('ja');
dayjs.extend(utc);
dayjs.extend(timezone);

const Newblog = ({ setSelectedTitle, setSelectedPostText, selectedPostText, setSelectedCode,setSelectedImage, setSelectedPostText2,setSelectedPostText3, setSelectedCode2, setSelectedCode3 }) => {


  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(query(collection(db, "posts"),orderBy("createdAt", "desc"),limit(3)));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    }
    getPosts();
   },[]);

 
   const sortedLists = postList.sort((a, b) => b.createdAt - a.createdAt);

  const handleClick = (post) => {
    setSelectedTitle(post.title);
    setSelectedPostText(post.postsText);
    setSelectedCode(post.code);
    setSelectedPostText2(post.postsText2);
    setSelectedCode2(post.code2);
    setSelectedPostText3(post.postsText3);
    setSelectedCode3(post.code3);
    setSelectedImage(post.imgUrl)
  };

  return (
    <section className='text-gray-700 border-t border-gray-200 bg-white py-6 sm:py-8 lg:py-12 pb-6 sm:pb-8 lg:pb-12 bg-h-screen w-full bg-gradient-to-br from-violet-300 via-blue-500 to-orange-100'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center md-20 mb-20'>
          <h1 className='text-2xl sm:text-3xl mb-2 text-gray-900 font-bold'>最新の投稿情報</h1>
        </div>
        <div className='flex flex-wrap -mx-4'>
          {sortedLists.map((post) => (
            <div key={post.id} className='md:w-1/3 px-4 mb-8'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center'></div>
                  <span className='text-gray-800 text-xl font-bold block'>
                    {dayjs.unix(Number(post.createdAt)).tz('Asia/Tokyo').format('MM/DD HH:mm')}
                  </span>
                  <h2 className='text-gray-900 text-lg font-bold ml-2'>{post.title}</h2>
                </div>
                <Link
                  to='/postdetail'
                  onClick={() => handleClick(post)}
                  className='flex mt-3 text-green-500 items-center font-bold hover:text-green-600 transition-colors duration-300'
                >
                  詳細
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Newblog