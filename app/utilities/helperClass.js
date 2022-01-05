/* eslint-disable node/no-callback-literal */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const nodeMailer = require("nodemailer");

class HelperClass {
  hashedPassword = (password) => {
    return bcrypt.hashSync(password, salt);
  }

  token = (data) => {
    const tokenData = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      email: data.email
    };
    return jwt.sign({ tokenData }, process.env.JWT_SECRET, { expiresIn: "20000H" });
  }

  comparePassword = (password, result) => {
    return bcrypt.compareSync(password, result);
  }

  validateToken = (req, res, next) => {
    const tokenHeader = req.headers.authorization;
    const tokenArray = tokenHeader.split(" ");
    const tokenInfo = tokenArray[1];
    try {
      if (tokenInfo) {
        jwt.verify(tokenInfo, process.env.JWT_SECRET, (error, decoded) => {
          if (error) {
            return res.status(400).send({
              success: false,
              message: "Oops.....Invalid Token"
            });
          } else {
            req.user = decoded;
            next();
          }
        });
      } else {
        return res.status(401).send({
          success: false,
          message: "Oops....Authorisation failed! Invalid user"
        });
      }
    } catch (error) {
      return res.status(500).send({ success: false, message: "Something went wrong!" });
    }
  }

  jwtTokenVerifyMail = (payload, secretkey, callback) => {
    jwt.sign({ email: payload.email }, secretkey, { expiresIn: "500h" },
      (err, token) => {
        if (err) {
          return callback("token not generated", null);
        } else {
          return callback(null, token);
        }
      }
    );
  };

  sendWelcomeMail = (data) => {
    try {
      const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL, // generated ethereal user
          pass: process.env.PASSWORD // generated ethereal password
        }
      });

      // send mail with defined transport object
      const info = transporter.sendMail({
        from: "\"Fundoo Notes\" <no-reply@fundoonotes.com>", // sender address
        to: data.email, // list of receivers
        subject: "Welcome - Fundoo notes account", // Subject line
        text: `Hello ${data.firstName}.`, // plain text body
        html: `<b>Hello ${data.firstName} <br> <h2> Welcome to Fundoo notes.</h2> <br>Your account Has been created successfully<br></b>` // html body
      });
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
    } catch { }
  };
}
module.exports = new HelperClass();
