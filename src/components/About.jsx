
const About = () => {

  return (
    <>
    <h3 className="text-2xl md:text-4xl font-bold m-20 flex justify-center">About me</h3>

    <div className="about flex flex-wrap justify-center items-center">
    <div className="w-full md:w-48 h-48 rounded-full overflow-hidden flex-shrink-0 md:mr-8">
      <img src="./img/IMG_6177 2.JPG" alt="" className="w-full h-full object-cover" />
    </div>
  </div>


  <div className="flex flex-col md:flex-row justify-center m-5 md:m-20">
  <div className="flex flex-col md:flex-row items-center w-full h-auto">
    <div className="w-full md:w-1/2 h-auto md:h-full bg-cover bg-center opacity-50" style={{ backgroundImage: "url('./img/スクリーンショット 2023-06-09 10.22.26.png')",
  }}></div>
    <div  className="w-full md:w-1/2 text-black text-center p-8 text-xl md:text-2xl mt-8 font-bold ">
      <p className="leading-tight"><br />未経験から競走馬の牧場で10年・・<br /><br />
      競走馬を生産、育成、馴致等で<br/><br/>
      日本一の牧場である「ノーザンファーム」で躍進！<br /><br /></p>
    </div>
  </div>
</div>

  <div className="flex flex-col md:flex-row justify-center m-5 md:m-20">
  <div className="flex  flex-col md:flex-row items-center w-full h-auto">
    <div className="w-full md:w-1/2 text-black text-center p-8 text-xl md:text-2xl mt-8 font-bold">
    <p><br /><br />「農業」でも未経験ながら6年・・<br/><br/>
    実践的な経験を積み重ねました<br /><br /></p>
      <p>トラクター、コンバインなど、様々な大型機械にも習熟！<br /><br /></p>
    </div>
    <div className="w-full md:w-1/2 h-full bg-cover bg-center opacity-80" style={{ backgroundImage: "url('./img/スクリーンショット 2023-06-09 10.41.42.png')" }}></div>
  </div>
</div>

<div className="flex flex-col md:flex-row justify-center m-5 md:m-20">
  <div className="flex items-center flex-col md:flex-row w-full h-auto">
    <div className="w-full md:w-1/2 h-full bg-cover bg-center opacity-50" style={{ backgroundImage: "url('./img/スクリーンショット 2023-06-09 11.54.52.png')" }}></div>
    <div  className="w-full md:w-1/2 text-black text-center p-8 text-xl md:text-2xl mt-8 font-bold">
    <div>
        コールセンターのオペレーターとして<br/>
        コミュニケーション能力を培う<br /><br />
        
        その後、オペレーターの指揮を執る<br/>SV（スーパーバイザー）へと転身<br /><br />
        顧客の期待を超えるサービスを提供し、<br/>的確な解決策をお届けします!<br /><br />
        </div>
    </div>
  </div>
</div>

<div className="flex flex-col md:flex-row justify-center m-5 md:m-20">
  <div className="flex items-center flex-col md:flex-row w-full h-auto">
  <div  className="w-full md:w-1/2 text-black text-center p-8 text-xl md:text-2xl mt-8 font-bold ">
        「 独学 」でエンジニアに転身し,<br/>着実にスキルを磨いています。<br /><br />
      『 React.js、Typescript、TailwindCSS等 』で<br/>魅力的なアプリを開発中！<br /><br />
      PHP、AWS、Next.jsにもチャレンジ予定！<br /><br />
        </div>
    <div className="w-full md:w-1/2 h-full bg-cover bg-center opacity-80 mb-20 mr-10" style={{ backgroundImage: "url('./img/21830a0I9A97521937_TP_V4.jpg')" }}></div>
  </div>
</div>
    </>
  )
}

export default About

// const About = () => {
//   return (
//     <>
//       <h3 className="text-2xl md:text-4xl font-bold my-5 md:my-10 text-center">About me</h3>

//       <div className="about flex flex-wrap justify-center items-center">
//         <div className="w-full md:w-48 h-48 rounded-full overflow-hidden flex-shrink-0 md:mr-8">
//           <img src="./img/IMG_6177 2.JPG" alt="" className="w-full h-full object-cover" />
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row justify-center m-5 md:m-10">
//         <div className="w-full md:w-1/2 h-full bg-cover bg-center opacity-50 mb-5 md:mb-0" style={{ backgroundImage: "url('./img/スクリーンショット 2023-06-09 10.22.26.png')" }}></div>
//         <div className="w-full md:w-1/2 text-black text-center p-8 text-xl md:text-2xl font-bold">
//           <p className="leading-tight"><br />未経験から競走馬の牧場で10年・・<br /><br />
//           競走馬を生産、育成、馴致等で<br/><br/>
//           日本一の牧場である「ノーザンファーム」で躍進！<br /><br /></p>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row justify-center m-5 md:m-10">
//         <div className="w-full md:w-1/2 text-black text-center p-8 text-xl md:text-2xl font-bold">
//           <p><br /><br />「農業」でも未経験ながら6年・・<br/><br/>
//           実践的な経験を積み重ねました<br /><br /></p>
//           <p>トラクター、コンバインなど、様々な大型機械にも習熟！<br /><br /></p>
//         </div>
//         <div className="w-full md:w-1/2 h-full bg-cover bg-center opacity-80" style={{ backgroundImage: "url('./img/スクリーンショット 2023-06-09 10.41.42.png')" }}></div>
//       </div>

//       <div className="flex flex-col md:flex-row justify-center m-5 md:m-10">
//         <div className="w-full md:w-1/2 h-full bg-cover bg-center opacity-50 mb-5 md:mb-0" style={{ backgroundImage: "url('./img/スクリーンショット 2023-06-09 11.54.52.png')" }}></div>
//         <div className="w-full md:w-1/2 text-black text-center p-8 text-xl md:text-2xl font-bold">
//         <p className="leading-tight">
//           コールセンターのオペレーターとして<br/>
//           コミュニケーション能力を培う<br /><br />
        
//           その後、オペレーターの指揮を執る<br/>SV（スーパーバイザー）へと転身<br /><br />
//           顧客の期待を超えるサービスを提供し、<br/>的確な解決策をお届けします!<br /><br />
//         </p>
//       </div>
//     </div>
  

//   <div className="flex flex-col md:flex-row justify-center m-5 md:m-10">
//     <div className="w-full md:w-1/2 text-black text-center p-8 text-xl md:text-2xl font-bold">
//       <p>
//         「 独学 」でエンジニアに転身し,<br/>着実にスキルを磨いています。<br /><br />
//         『 React.js、Typescript、TailwindCSS等 』で<br/>魅力的なアプリを開発中！<br /><br />
//         PHP、AWS、Next.jsにもチャレンジ予定！<br /><br />
//       </p>
//     </div>
//     <div className="w-full md:w-1/2 h-full bg-cover bg-center opacity-80 mb-5 md:mb-0" style={{ backgroundImage: "url('./img/21830a0I9A97521937_TP_V4.jpg')" }}></div>
//   </div>
// </>
// );
// }

// export default About;

