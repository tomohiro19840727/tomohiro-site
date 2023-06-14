import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ja';
import About from './About';
import Welcome from './Welcome';
import Require from './Require';
import Newblog from './Newblog';


dayjs.locale('ja');
dayjs.extend(utc);
dayjs.extend(timezone);


function Home({ setSelectedTitle, setSelectedPostText, selectedPostText, setSelectedCode,setSelectedImage, setSelectedPostText2,setSelectedPostText3, setSelectedCode2, setSelectedCode3 }) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(query(collection(db, "posts"),orderBy("createdAt", "desc"),limit(3)));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    }
    getPosts();
   },[]);


  return (
    <>
    <Welcome />
     

<h2 className='text-4xl font-bold m-40 flex justify-center font-serif'>
『 自然とテクノロジーの融合 』を追求する<br/><br/>
"フロントエンジニア"として、<br/><br/>
私にしか作れない魅力的な『 WEBアプリ 』を提供します！！</h2>

<About />

  


<div class="bg-white py-6 sm:py-8 lg:py-12 mt-20">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
  <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-20 lg:text-5xl">
  Works <span class="ml-2 text-xl font-medium">-制作物-</span>
</h2>


    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
     
      <div>
        <div href="#" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src="./img/スクリーンショット 2023-06-09 14.03.50.png" loading="lazy" alt="Photo by Austin Wade" class="absolute inset-0 h-auto w-auto object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-gray-500">しらすの日常</span>
            <span class="text-lg font-bold text-gray-800 lg:text-xl">『しらす」という、まるで夢の世界に迷い込んだかのような猫のサイトをご紹介します</span>
          <div>
              <a href="https://tomo-router.vercel.app" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100">Read more</a>
            </div>
          </div>
        </div>
      </div>
      

     
      <div>
        <div href="#" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src="./img/スクリーンショット 2023-06-09 14.14.29.png" loading="lazy" alt="Photo by engin akyurt" class="absolute inset-0 h-auto w-auto object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-gray-500">昼休みアプリ</span>
            <span class="text-lg font-bold text-gray-800 lg:text-xl">一瞬の思いつきで、瞬時に昼休みの時間を柔軟に調整することが可能です。</span>
            <div>
              <a href="https://tomohiro19840727.github.io/tomo-drop" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100">Read more</a>
            </div>
          </div>
        </div>
      </div>
      

      
      <div>
        <div href="#" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src="./img/スクリーンショット 2023-06-09 14.19.27.png" loading="lazy" alt="Photo by Austin Wade" class="absolute inset-0 h-auto w-auto object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-gray-500">HIIT タイマー</span>
            <span class="text-lg font-bold text-gray-800 lg:text-xl">２０秒動いて１０秒休むを繰り返すことができるタイマーです。HIITに活用できます</span>
            <div>
              <a href="https://tomo-timer.vercel.app" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100">Read more</a>
            </div>
          </div>
        </div>
      </div>
      

      
      <div>
        <div href="#" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src="./img/スクリーンショット 2023-06-09 14.24.05.png" loading="lazy" alt="Photo by Austin Wade" class="absolute inset-0 h-auto w-auto object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-gray-500">NEXT.JS</span>
            <span class="text-lg font-bold text-gray-800 lg:text-xl">初めてNEXT.JSを触り、試しに自分のサイトを作成してみました</span>
            <div>
              <a href="https://tomo-nextblog.vercel.app" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100">Read more</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>


<div class="bg-white py-6 sm:py-8 lg:py-12 mt-20">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">

    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-6xl">Skill <span class="ml-2 text-xl font-medium">-できること-</span></h2>
    </div>


    <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">

      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <div href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="./img/スクリーンショット 2023-06-09 15.05.17.png" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col gap-2">

          <h2 class="text-3xl font-bold text-gray-800">
            <div class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">HTML&CSS, Javascript</div>
          </h2>

          <p class="text-gray-500 font-bold">HTMLを使用してWebページの構造を定義し、要素を配置します。<br/>CSSを使ってそれらの要素のスタイルやレイアウトを設定し、見栄えを整えます。<br/>そして、JavaScriptを活用することで、ページ上で動的な動作やユーザーとの対話を実現します</p>
        </div>
      </div>



      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <div class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="./img/スクリーンショット 2023-06-09 15.06.20.png" loading="lazy" alt="Photo by Lorenzo Herrera" class=" h-auto w-auto object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col gap-2">

          <h2 class="text-3xl font-bold text-gray-800">
            <div class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">React.js</div>
          </h2>

          <p class="text-gray-500 font-bold">コンポーネントと呼ばれる再利用可能なUI要素を作成し、それらを組み合わせてWebアプリケーションを作ることができます。<br/>React.jsを使うことで、スムーズなUIの更新やパフォーマンスの向上が可能となります。</p>

        </div>
      </div>



      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <div class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="./img/スクリーンショット 2023-06-09 15.07.18.png" loading="lazy" alt="Photo by Magicle" class=" object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col gap-2">

          <h2 class="text-3xl font-bold text-gray-800">
            <div class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Firebase</div>
          </h2>

          <p class="text-gray-500 font-bold">バックエンドの機能を簡単に利用できるようにします。データベース、認証、ストレージ、ホスティングなどの機能を提供し、Webアプリケーションやモバイルアプリケーションの開発を支援します。<br/>また、リアルタイムデータベースや通知などのリアルタイム機能も備えています。</p>

          
        </div>
      </div>
      

      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <div class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="./img/スクリーンショット 2023-06-09 15.08.14.png" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-auto w-auto object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col gap-2">
        

          <h2 class="text-3xl font-bold text-gray-800">
            <div class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">TailWindCSS</div>
          </h2>

          <p class="text-gray-500 font-bold">CSSを書く手間や複雑さを減らしながら、柔軟なデザインを実現できます。<br/>また、クラス名に基づいた明確な命名規則があり、再利用性の高いコードを書くことができます</p>
        </div>
      </div>
    </div>
  </div>
</div>


<Require />



   {/* <section className='text-gray-700 border-t border-gray-200 bg-white py-6 sm:py-8 lg:py-12 pb-6 sm:pb-8 lg:pb-12 bg-h-screen w-full bg-gradient-to-br from-violet-300 via-blue-500 to-orange-100'>
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
    </section> */}

   <Newblog 
   
      setSelectedCode={setSelectedCode}
            
      setSelectedTitle={setSelectedTitle}
      
      setSelectedPostText2={setSelectedPostText2}
      
      setSelectedCode2={setSelectedCode2}

      setSelectedPostText={setSelectedPostText}
      
  

      setSelectedPostText3={setSelectedPostText3}
      
      setSelectedCode3={setSelectedCode3}
      
      setSelectedImage={setSelectedImage}
   />

                        </>

                        
  )
}

export default Home