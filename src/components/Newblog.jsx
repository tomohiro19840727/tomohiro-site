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
      const data = await getDocs(query(collection(db, "posts"),orderBy("createdAt", "desc"),limit(4)));
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
    <>
        <div class="text-gray-600 border-t border-gray-200 bg-white py-6 sm:py-8 lg:py-12 pb-6 sm:pb-8 lg:pb-12 bg-h-screen w-full bg-gradient-to-br from-violet-200 via-blue-300 to-orange-100 mt-10">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="mb-8 mt-10 text-center text-3xl font-bold text-gray-800 md:mb-12 lg:text-4xl">最新の投稿情報</h2>


          <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 mt-20 mb-20">
          {sortedLists.map((post) => (
            <div>
              <div  class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={post.imgUrl} loading="lazy" alt="Photo by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className='text-gray-800 text-xl block'>
                            {dayjs.unix(Number(post.createdAt)).tz('Asia/Tokyo').format('MM/DD HH:mm')}
                          </span>
                <h2 className='text-gray-900 text-2xl font-bold ml-2'>{post.title}</h2>
                <Link
                          to='/postdetail'
                          onClick={() => handleClick(post)}
                          className=' mt-3 text-green-500 items-center text-2xl font-bold hover:text-green-600 transition-colors duration-300'
                          >
                          詳細
                        </Link>

                        
                </div>
              </div>
            </div>
              ))}
          </div>
        </div>
        </div>
                  </>

  )
}

export default Newblog