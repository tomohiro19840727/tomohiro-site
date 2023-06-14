import React, { useEffect, useRef } from 'react'
import './About.css';

const About = () => {
  // const aboutRef2 = useRef(null);
  // const aboutRef3 = useRef(null);
  // const aboutRef4 = useRef(null);
  // const aboutRef1 = useRef(null);



// useEffect(() => {
//   const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5, // テキストが50%以上表示された時に反応する
//   };

//   const callback = (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('animate-delayed-tracking-in-expand');
//       } else {
//         entry.target.classList.remove('animate-delayed-tracking-in-expand');
//       }
//     });
//   };

//   const observer = new IntersectionObserver(callback, options);
//   observer.observe(aboutRef1.current);
//   observer.observe(aboutRef2.current);
//   observer.observe(aboutRef3.current);
//   observer.observe(aboutRef4.current);

//   return () => {
//     observer.disconnect();
//   };
// }, []);



  return (
    <>
    <h3 className="text-4xl font-bold m-20 flex justify-center">About me</h3>

    <div className="about flex flex-wrap justify-center items-center">
    <div className="w-full md:w-48 h-48 rounded-full overflow-hidden flex-shrink-0 md:mr-8">
      <img src="./img/IMG_6177 2.JPG" alt="" className="w-full h-full object-cover" />
    </div>
  </div>


  <div className="flex justify-center m-20">
  <div className="flex items-center w-full h-auto">
    <div className="w-1/2 h-full bg-cover bg-center opacity-50" style={{ backgroundImage: "url('./img/スクリーンショット 2023-06-09 10.22.26.png')" }}></div>
    <div  className="w-1/2 text-black text-center p-8 text-2xl mt-8 font-bold ">
      <p className="leading-tight"><br />未経験から競走馬の牧場で10年・・<br /><br />
      競走馬を生産、育成、馴致等で<br/><br/>
      日本一の牧場である「ノーザンファーム」で躍進！<br /><br /></p>
    </div>
  </div>
</div>

  <div className="flex justify-center m-20">
  <div className="flex items-center w-full h-auto">
    <div className="w-1/2 text-black text-center p-8 text-2xl mt-8 font-bold">
    <p><br /><br />「農業」でも未経験ながら6年・・<br/><br/>
    実践的な経験を積み重ねました<br /><br /></p>
      <p>トラクター、コンバインなど、様々な大型機械にも習熟！<br /><br /></p>
    </div>
    <div className="w-1/2 h-full bg-cover bg-center opacity-80" style={{ backgroundImage: "url('./img/スクリーンショット 2023-06-09 10.41.42.png')" }}></div>
  </div>
</div>

<div className="flex justify-center m-20">
  <div className="flex items-center w-full h-auto">
    <div className="w-1/2 h-full bg-cover bg-center opacity-50" style={{ backgroundImage: "url('./img/スクリーンショット 2023-06-09 11.54.52.png')" }}></div>
    <div  className="w-1/2 text-black text-center p-8 text-2xl mt-8 font-bold">
    <div className="text-black text-center p-8 text-2xl mt-8 font-bold">
        コールセンターのオペレーターとして<br/>
        コミュニケーション能力を培う<br /><br />
        
        その後、オペレーターの指揮を執る<br/>SV（スーパーバイザー）へと転身<br /><br />
        顧客の期待を超えるサービスを提供し、<br/>的確な解決策をお届けします!<br /><br />
        </div>
    </div>
  </div>
</div>

<div className="flex justify-center">
  <div className="flex items-center w-full h-auto">
  <div  className=" w-1/2 text-black text-center p-8 text-2xl mt-8 font-bold ">
        「 独学 」でエンジニアに転身し,<br/>着実にスキルを磨いています。<br /><br />
      『 React.js、Typescript、TailwindCSS等 』で<br/>魅力的なアプリを開発中！<br /><br />
      PHP、AWS、Next.jsにもチャレンジ予定！<br /><br />
        </div>
    <div className="w-1/2 h-full bg-cover bg-center opacity-80 mb-20 mr-10" style={{ backgroundImage: "url('./img/21830a0I9A97521937_TP_V4.jpg')" }}></div>
  </div>
</div>
    </>
  )
}

export default About

