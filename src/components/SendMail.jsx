import React, { useState } from 'react';

const SendMail = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    fetch('https://us-central1-tomohiro-site.cloudfunctions.net/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log('メールが送信されました');
          // フォームの送信後に入力内容をリセット
          setIsSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
        } else {
          console.log('メールの送信に失敗しました SendMail');
        }
      })
      .catch((error) => {
        console.error('エラー:', error);
      });
  };

  return (
    <div className="container mx-auto px-5 md:px-10 min-h-screen">
      <h1 className="mt-5 mb-2 ml-5 text-3xl font-bold text-yellow-500">Contact Form</h1>
      <section>
        <h2 className="text-xl pt-3 mb-3 font-bold">お問合わせ</h2>
        <div className="flex flex-col md:flex-row gap-10 p-5 items-center border-gray-200  bg-h-screen w-full bg-gradient-to-br from-violet-300 via-blue-100 to-orange-100 py-6 sm:py-8 lg:py-12">
          <img className="w-full md:w-1/3 mb-10 md:mb-0 md-mr-10" src='./img/20220227-A7401987_TP_V4.jpg' alt="質問" /> {/* 横幅を半分に設定 */}
          <form className="w-full ml-auto" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  ニックネーム
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="山田"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {name === '' && (
                  <p className="text-red-500 text-xs italic">ニックネームを入力してください。</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  メールアドレス
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  placeholder="example@yahoo.co.jp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  {email === '' && (
                  <p className="text-red-500 text-xs italic">メールアドレスを入力してください。</p>
                  )}
                  </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  お問い合わせ内容
                  </label>
                  <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  ></textarea>
                  {message === '' && (
                  <p className="text-red-500 text-xs italic">お問合せ内容を入力してください。</p>
                  )}
                  </div>
                  </div>
                  <div className="md:flex md:items-center mb-5">
                  <div className="md:w-1/3">
                  <button
                                 className="shadow bg-yellow-500 hover:bg-yellow-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                 type="submit"
                               >
                  送信
                  </button>
                  </div>
                  </div>
                  {isSubmitted && (
                  <p className="text-green-400 text-lg text-bold">
                  ありがとうございます。お問合せ内容を受け付けました。
                  </p>
                  )}
                  </form>
                  </div>
                  </section>
                  </div>
                  );
                  };
                  
                  export default SendMail;