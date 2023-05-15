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

import { Link } from 'react-router-dom';

function Setblog({ isAuth, setSelectedPostText, selectedPostText, setSelectedCode }) {
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
    setSelectedPostText(post.postsText);
    setSelectedCode(post.code);
    console.log(selectedPostText);
  };

  const sortedLists = postList.sort((a, b) => b.createdAt - a.createdAt);

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12 min-h-screen bg-gradient-to-br from-violet-300 via-pink-100 to-orange-100">
        <div className="container mx-auto">
          <div>
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Blog</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sortedLists.map((post) => (
              <div key={post.id} className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="p-4">
                  <span className="text-gray-800 text-xl font-bold block">{dayjs.unix(post.createdAt).format('MM/DD HH:mm')}</span>
                  <h2 className="text-gray-800 text-xl font-bold mb-2">
                    <Link to="/postdetail" onClick={() => handleClick(post)} className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{post.title}</Link>
                  </h2>
                  {isAuth && (
                    <button onClick={() => handleDelete(post.id)} className="text-indigo-600 hover:text-indigo-500">削除</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Setblog;
