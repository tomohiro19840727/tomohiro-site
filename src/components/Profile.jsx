import React from 'react'

function Profile() {
  return (
    <div className="text-gray-700 border-gray-200 bg-white  bg-h-screen w-full bg-gradient-to-br
    from-violet-300 via-blue-100 to-orange-100 py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      <div>
        <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
          <img src="./img/IMG_6177.JPG" loading="lazy" alt="栗城朋広による写真" className="w-full h-full object-cover object-center" />
        </div>
      </div>

      <div className="md:pt-8">

        <h1 className="flex justify-center text-gray-800 text-2xl sm:text-3xl font-serif text-center font-bold md:text-left mb-4 md:mb-6">自然とテクノロジーのギャップを埋める：<br/>
        農業、テクノロジー、創造性を<br/>
        仕事に融合する！</h1>

        <p className="text-gray-500 sm:text-lg mb-6 md:mb-8 font-bold">
        私は競馬の馬を調教したり、農家の仕事をしてトラクター、コンバイン、大型トラックなどを乗りこなし、現在はフロントエンドエンジニアとしてプログラミングの世界で新たな挑戦をしています。<br/>

競馬界では日本一の牧場であるノーザンファームで、10年間にわたり競走馬の調教と馴致に携わり、その経験から馬に対する熱い情熱と観察力、そして問題解決能力を養いました。<br/>
農家の仕事では、自然と向き合い、季節ごとに畑の状況を把握し、機械を操る技術を身に付けました。<br /><br />

<p className='font-bold  text-xl'>
自己学習により、基本情報技術者(FE)の資格を取得し、Javascript、React.js、Typescript、Firebaseなどのプログラミング言語とフレームワークを駆使してアプリを開発しています。
  そして、現在はコールセンターのSV（スーパーバイザー）をしながら、フロントエンドエンジニアになるために学習を続けています。<br/>
  </p>
        </p>

        <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">成長に向けた挑戦</h2>

        <p className="text-gray-500 font-bold sm:text-lg mb-6 md:mb-8">私は新しいことに挑戦することを恐れず、自己成長を重視しています。自分自身の能力や技術を常に向上させ、さまざまな分野において高いパフォーマンスを発揮できるように努めています。</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Profile
