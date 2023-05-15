import { collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import dayjs from "dayjs";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { jsx, javascript } from "react-syntax-highlighter/dist/esm/languages/prism";
import { Link } from 'react-router-dom';

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);

function Setblog({ isAuth, setSelectedPostText, selectedPostText, setSelectedCode }) {
  const [postList, setPostList] = useState([]);
  
  
   
 useEffect(() => {
  const getPosts = async () => {
    const data = await getDocs(query(collection(db, "posts"),orderBy("createdAt", "desc")));
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  }
  getPosts();
 },[]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/setblog";
  }

  const handleClick = (post) => {
    setSelectedPostText(post.postsText);
    setSelectedCode(post.code)
    console.log(selectedPostText);
  }
 
  const sortedLists = postList.sort((a, b) => b.createdAt - a.createdAt);

  return (
    <>
<div class="bg-white py-6 sm:py-8 lg:py-12 bg-h-screen w-full bg-gradient-to-br
  from-violet-300 via-pink-100 to-orange-100" >
<div>
  
  <div>
    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Blog</h2>
  </div>
  

  <div>
    {sortedLists.map((post) => {

          return (
            <div key={post.id}>
    <div>

      <div class="flex flex-col gap-2 p-4 lg:p-6">
        
              <span class="text-gray-800 text-xl font-bold">{dayjs.unix(post.createdAt).format('MM/DD HH:mm')}</span>
        

        <h2 class="text-gray-800 text-xl font-bold">
          <Link to="/postdetail"  onClick={() => handleClick(post)} className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{post.title}</Link>
        </h2>

        
        <p class="font-bold">{post.postsText}</p>
        <SyntaxHighlighter language="javascript" style={materialDark}>
        {post.code}
      </SyntaxHighlighter>


            {isAuth &&(
              <>
              <button onClick={() => handleDelete(post.id)}>削除</button>
              </>
              )}
            </div>
            </div>
        <div>
        </div>
            </div>
          )
        })}
  </div>
</div>
</div>
</>
)
}

export default Setblog



