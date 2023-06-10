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
    <>

      <div class="bg-white  sm:py-8 lg:py-12 min-h-screen bg-gradient-to-br from-violet-300 via-pink-100 to-orange-100 py-6 ">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-5xl">ブログ投稿</h2>
        </div>
        
        <form onSubmit={createPost} class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
          <div class="sm:col-span-2">
            <label class="mb-2 inline-block text-sm text-g  ray-800 sm:text-base">タイトル</label>
            <input  type="text"
              placeholder="タイトルを記入"
              onChange={(e) => setTitle(e.target.value)}
              class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label  class="mb-2 inline-block text-sm text-gray-800 sm:text-base">画像</label>
        <input  type="file"
                accept="png, .jpeg, .jpg, .HEIC"
                onChange={handleImage} class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>


  <div class="sm:col-span-2">
  <label class="mb-2 inline-block text-sm text-gray-800 sm:text-base">内容</label>
  <div class="h-64 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring overflow-auto">
    <textarea
      placeholder="内容を記入"
      onChange={(e) => setPostText(e.target.value)}
      class="w-full h-full resize-none outline-none"
    ></textarea>
  </div>
</div>

<div class="sm:col-span-2">
  <label class="mb-2 inline-block text-sm text-gray-800 sm:text-base">code</label>
  <div class="h-64 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring overflow-auto">
    <textarea
      placeholder="コードを記入"
      onChange={(e) => setCode(e.target.value)}
      class="w-full h-full resize-none outline-none"
    ></textarea>
  </div>
</div>
  <div class="sm:col-span-2">
  <label class="mb-2 inline-block text-sm text-gray-800 sm:text-base">内容</label>
  <div class="h-64 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring overflow-auto">
    <textarea
      placeholder="内容を記入"
      onChange={(e) => setPostText(e.target.value)}
      class="w-full h-full resize-none outline-none"
    ></textarea>
  </div>
</div>

<div class="sm:col-span-2">
  <label class="mb-2 inline-block text-sm text-gray-800 sm:text-base">code</label>
  <div class="h-64 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring overflow-auto">
    <textarea
      placeholder="コードを記入"
      onChange={(e) => setCode(e.target.value)}
      class="w-full h-full resize-none outline-none"
    ></textarea>
  </div>
</div>
  <div class="sm:col-span-2">
  <label class="mb-2 inline-block text-sm text-gray-800 sm:text-base">内容</label>
  <div class="h-64 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring overflow-auto">
    <textarea
      placeholder="内容を記入"
      onChange={(e) => setPostText(e.target.value)}
      class="w-full h-full resize-none outline-none"
    ></textarea>
  </div>
</div>

<div class="sm:col-span-2">
  <label class="mb-2 inline-block text-sm text-gray-800 sm:text-base">code</label>
  <div class="h-64 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring overflow-auto">
    <textarea
      placeholder="コードを記入"
      onChange={(e) => setCode(e.target.value)}
      class="w-full h-full resize-none outline-none"
    ></textarea>
  </div>
</div>


    <div class="flex items-center justify-between sm:col-span-2">
      <button  class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base" type="submit" >Send</button>
    </div>
  </form> 
</div>
</div>
           </>
      );}
                    
  export default Blog;
