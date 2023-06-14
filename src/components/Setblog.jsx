import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import dayjs from 'dayjs';
import 'dayjs/locale/ja'; // 必要に応じてロケールを指定してください
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { Link } from 'react-router-dom';

dayjs.extend(utc);
dayjs.extend(timezone);

function Setblog({ isAuth, setSelectedTitle, setSelectedPostText, selectedPostText, setSelectedCode,setSelectedImage, setSelectedPostText2,setSelectedPostText3, setSelectedCode2, setSelectedCode3 }) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(query(collection(db, 'posts'), orderBy('createdAt', 'desc')));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    window.location.href = '/setblog';
  };

  const handleClick = (post) => {
    setSelectedTitle(post.title);
    setSelectedPostText(post.postsText);
    setSelectedCode(post.code);
    setSelectedPostText2(post.postsText2);
    setSelectedCode2(post.code2);
    setSelectedPostText3(post.postsText3);
    setSelectedCode3(post.code3);
    setSelectedImage(post.imgUrl)
    console.log(selectedPostText);
  };

  const sortedLists = postList.sort((a, b) => b.createdAt - a.createdAt);

  return (
    <>
     <div className="bg-white py-6 sm:py-8 lg:py-12 min-h-screen bg-gradient-to-br from-violet-300 via-pink-100 to-orange-100">
        <div className="container mx-auto"></div>
        <div>
            <h2 className="text-gray-800 text-2xl lg:text-6xl font-bold text-center mb-4 md:mb-6">Blog</h2>
          </div>
      <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4  mb-20 m-10">
  {sortedLists.map((post) => (
    <div>
      <div  class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg mt-20">
        <img src={post.imgUrl} loading="lazy" alt="Photo by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 mb-20 " />

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

                <button className='text-red-400  text-xl hover:text-red-800 transition-colors duration-300 mt-2' onClick={() => handleDelete(post.id)}>削除</button>
        </div>
      </div>
    </div>
      ))}
  </div>
  </div>
    </>
  );
}

export default Setblog;
