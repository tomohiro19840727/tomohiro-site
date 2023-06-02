const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");
const cors = require("cors")({origin: true});

admin.initializeApp();
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

exports.sendMail = functions.https.onRequest((req, res) => {
  // CORS設定を適用する
  cors(req, res, async () => {
    const {name, email, message} = req.body;

    const msg = {
      to: "tomohirofarm@gmail.com", // 送信先のメールアドレス
      from: "tomohiro-site.com", // 送信元のメールアドレス
      subject: "お問い合わせ",
      text: `名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`,
    };

    try {
      await sgMail.send(msg);
      console.log("メールが送信されました");
      res.json({message: "メールが送信されました。"});
    } catch (error) {
      console.error("メールの送信に失敗しました:", error);
      res.status(500).json({error: "メールの送信に失敗しました。"});
    }
  });
});