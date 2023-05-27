import React, { useState } from 'react';

const SendMail = () => {
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

    fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log('メールが送信されました');
          // フォームの送信後に入力内容をリセットする
          setName('');
          setEmail('');
          setMessage('');
        } else {
          console.log('メールの送信に失敗しました');
        }
      })
      .catch((error) => {
        console.error('エラー:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        名前:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        メールアドレス:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        メッセージ:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button type="submit">送信</button>
    </form>
  );
};

export default SendMail;
