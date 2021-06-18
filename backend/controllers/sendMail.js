const nodemailer = require("nodemailer");

const sendEmail = (to, content) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "najibaamri23@gmail.com",
      pass: "GUESSWHATISITT",
    },
  });

  var mailOptions = {
    from: "najibaamri23@gmail.com",
    to: to,
    subject: "3aweni",
    attachments: [
      {
        filename: "logoo.png",
        path: "./uploads/logoo.png",
        cid: "najibaamri23@gmail.com",
      },
    ],
    html: `
        <div style="max-width: 700px; margin:auto; border: 10px solid #0cb8c0; padding: 50px 20px; font-size: 110%;">
        <img  src="cid:najibaamri23@gmail.com">
        <h2 style="text-align: center; text-transform: uppercase;color: Orange;"></h2>
        <p>${content}.
        </p>
    
        </div>
    `,
  };

  transporter.sendMail(mailOptions, (err, infor) => {
    if (err) return err;
    return infor;
  });
};
module.exports = sendEmail;
