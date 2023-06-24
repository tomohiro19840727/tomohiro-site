const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');


admin.initializeApp();

const sendgridApiKey = process.env.REACT_APP_API_KEY;

// SendGridのAPIキーを設定します
sgMail.setApiKey(sendgridApiKey);

exports.sendMail = functions.https.onRequest(async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: 'tomohirofarm@gmail.com', // 送信先のメールアドレスを設定します
    from: 'tomohirofarm@gmail.com', // 送信元のメールアドレスを設定します
    subject: 'お問い合わせがありました',
    text: `名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('メールが送信されました');
  } catch (error) {
    console.error('メールの送信に失敗しました:', error);
    res.status(500).send('メールの送信に失敗しました');
  }
});
