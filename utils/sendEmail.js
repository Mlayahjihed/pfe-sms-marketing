const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  var smtpConfig ={
   host: process.env.EMAIL_SERVICE,
   secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  tls :{
    rejectUnauthorized : false,
  }
  };
  const transporter = nodemailer.createTransport(smtpConfig);

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;