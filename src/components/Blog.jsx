import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../firebase';
import './Blog.css';

function Blog() {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [singleImage, setSingleImage] = useState('');
  const [code, setCode] = useState('');

  const navigate = useNavigate();

  const handleImage = (e) => {
    e.preventDefault();
    let pickedFile;

    if (e.target.files && e.target.files.length > 0) {
      pickedFile = e.target.files[0];
      setSingleImage(pickedFile);
    }
  };

  const createPost = async (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `images/${singleImage.name}`);
    uploadBytes(imageRef, singleImage).then((res) => {
      alert('投稿に成功しました');
      getDownloadURL(imageRef).then((imageUrl) => {
        addDoc(collection(db, 'posts'), {
          title: title,
          postsText: postText.replace(/\n/g, '<br />'),
          code: code,
          imgUrl: imageUrl,
          createdAt: serverTimestamp(),
        });
      });
    });

    navigate('/setblog');
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 ">
      <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
              <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Blog 投稿</h1>
              <form className="mt-4" onSubmit={createPost}>
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">タイトル</label>
                  <input
                    type="text"
                    placeholder="タイトルを記入"
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">画像</label>
                  <input
                    type="file"
                    accept="png, .jpeg, .jpg, .HEIC"
                    onChange={handleImage}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                    </div>
                    <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">内容</label>
                    <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    placeholder="内容を記入"
                    onChange={(e) => setPostText(e.target.value)}
                    ></textarea>
                    </div>
                    <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">コード</label>
                    <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    placeholder="コードを記入"
                    onChange={(e) => setCode(e.target.value)}
                    ></textarea>
                    </div>
                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"  type="submit">投稿する</button>
                     </form>
                      </div>
                </div>
            </div>
         </div>
     </section>
                    );}
                    
                    export default Blog;
