const express = require('express');
const app = express();
const sgMail = require('@sendgrid/mail');

app.use(express.json());

// SendGridのAPIキーをセットアップ
sgMail.setApiKey('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');

app.post('/api/sendmail', (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: 'tomohirofarm@gmail.com', // 送信先のメールアドレス
    from: 'ha.pon82811018@gmail.com', // 送信元のメールアドレス
    subject: 'テストです',
    text: `名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('メールが送信されました');
      res.json({ message: 'メールが送信されました。' });
    })
    .catch((error) => {
      console.error('メールの送信に失敗しました:', error);
      res.status(500).json({ error: 'メールの送信に失敗しました。' });
    });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

