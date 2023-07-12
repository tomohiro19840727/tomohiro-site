
const MobileAbout = () => {

  return (
    <>
    <h3 className="text-4xl font-bold  mt-20 flex justify-center">About Me</h3>

    <div className="about flex flex-wrap justify-center items-center">
    <div className="w-full rounded-full overflow-hidden p-10  flex-shrink-0">
      <img src="./img/IMG_6177 2.JPG" alt="" className="w-full h-full object-cover" />
    </div>
  </div>


  {/* <div className="flex flex-col md:flex-row justify-center m-5 md:m-20">
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
</div> */}

<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    
    {/* <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div> */}
    

    <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
      
      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="./img/スクリーンショット 2023-06-09 10.22.26.png" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">
          <p class="text-gray-500 text-xl font-bold">未経験から競走馬の牧場で10年・・<br /><br />
      競走馬を生産、育成、馴致等で
      日本一の牧場である「ノーザンファーム」で躍進！</p>
        </div>
      </div>
      

      
      <div class="flex flex-col items-center gap-4 mt-10">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="./img/スクリーンショット 2023-06-09 10.41.42.png" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">

          <p class=" text-gray-500 text-xl font-bold">「農業」でも未経験ながら6年・・<br/><br/>
          実践的な経験を積み重ねました<br /><br /></p>
        <p class=" text-gray-500 text-xl font-bold">トラクター、コンバインなど、様々な大型機械にも習熟！</p>

        </div>
      </div>
      

      
      <div class="flex flex-col items-center gap-4 mt-10">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="./img/スクリーンショット 2023-06-09 11.54.52.png" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">

          <p class="text-gray-500 text-xl font-bold">コールセンターのオペレーターとして<br/>
        コミュニケーション能力を培う<br /><br />
        
        その後、オペレーターの指揮を執る<br/>SV（スーパーバイザー）へと転身<br /><br />
        顧客の期待を超えるサービスを提供し,的確な解決策をお届けします!<br /><br /></p>
        </div>
      </div>
      

      
      <div class="flex flex-col items-center gap-4 mt-10">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="./img/21830a0I9A97521937_TP_V4.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2">
          
          <p class="text-gray-500 text-xl font-bold">「 独学 」でエンジニアに転身し,<br/>着実にスキルを磨いています。<br /><br />
      『 React.js、Typescript、TailwindCSS等 』で<br/>魅力的なアプリを開発中！<br /><br />
      PHP、AWS、Next.jsにもチャレンジ予定！<br /><br /></p>
        </div>
      </div>
      
    </div>
  </div>
</div>
    </>
  )
}

export default MobileAbout

