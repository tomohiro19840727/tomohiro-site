import { collection, deleteDoc, doc, getDocs, increment, limit, orderBy, query, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import dayjs from "dayjs";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { jsx, javascript } from "react-syntax-highlighter/dist/esm/languages/prism";
import { Link } from 'react-router-dom';

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);

function Setblog({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedPostText, setSelectedPostText] = useState('');

 useEffect(() => {
  const getPosts = async () => {
    const data = await getDocs(query(collection(db, "posts"),orderBy("createdAt", "desc")));
    
    // console.log(data.docs.map((doc) => ({ ...doc.data({serverTimestamp: "estimate"}).createdAt.toDate(), id: doc.id})))
    
    
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  //  console.log(postList.createdAt);
   
  }
  getPosts();
 },[]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/setblog";
  }

  // const handlePostClick = (postId) => {
  //   setSelectedPostId(postId);
  //   const db = firebase.firestore();
  //   db.collection('posts').doc(postId).get().then((doc) => {
  //     setSelectedPostText(doc.data().text);
  //   });
  // };

  // const handleClick = async (id) => {
  //  const postsRef = doc(db, "posts", id)  

  //  await updateDoc(postsRef, {
  //     count: increment(1)
  //   });
  //   window.location.href = "/setblog";
  // }

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
          {/* <a href="#" class="hover:text-indigo-500 active:text-indigo-600 transition duration-100" key={post.id} onClick={() => handlePostClick(post.id)}>{post.title}</a> */}
          <Link to={`/setblog/${post.id}`} className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{post.title}</Link>
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



