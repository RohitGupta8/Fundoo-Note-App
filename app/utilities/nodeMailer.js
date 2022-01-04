const nodeMailer = require("nodemailer");
require("dotenv").config();
const otp = require("../model/oneTimePassword");

exports.sendEmail = (mailMessage) => {
  const otpcode = Math.random().toString(36).substring(2, 12);
  // eslint-disable-next-line new-cap
  const optData = new otp({
    email: mailMessage.email,
    code: otpcode,
    expireIn: new Date().getTime() + 300 * 1000
  });
  optData.save();
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  const message = {
    from: "\"Fundoo Notes\" <no-reply@fundoonotes.com>",
    to: mailMessage.email,
    subject: `${otpcode} is your Account recovery code.`,
    html: `<span style="text-align: center;"><h1>Hi , ${mailMessage.email}</h1></span><div style="text-align: center;"><h3>We received a request to reset your Fundoo Note App password.<br>Enter the following one time password:</h3>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otpcode}
  </h2></div><br><br><h5>(NOTE:- If you don’t use this otp within 3 hours, it will expire.)</h5><br><h5>Thanks,</h5><br><h4><span>Regards,<br>Team FundooNote</span></h4><br>`
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("email has been sent", info.response);
      return info.response;
    }
  });
};

exports.verifyMail = (token, data) => {
  const link = `http://localhost:${process.env.PORT}/confirmregister/${token}`;
  // create reusable transporter object using the default SMTP transport
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD // generated ethereal password
    }
  });

  const info = {
    from: "\"Fundoo Notes\" <no-reply@fundoonotes.com>", // sender address
    to: data.email, // list of receivers
    subject: "Verify Mail for your Fundoo Note Account",
    html: `<b>Hello <h2> ${data.firstName} </h2><br><h1> Here is your link to Verify Mail:</h1><br> <button href="${link}"  style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;"> <a href="${link}">click me for Verify </a></button></b>` // html body
  };

  // send mail with defined transport object
  const test = transporter.sendMail(info, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("email has been sent", info.response);
      return info.response;
    }
  });

  console.log("Message sent: %s", test.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(test));
};
