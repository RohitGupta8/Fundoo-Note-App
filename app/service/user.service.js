/* eslint-disable node/no-callback-literal */
const userModel = require("../model/user.model.js");
const utilities = require("../utilities/helperClass");
const nodemailer = require("../utilities/nodeMailer");
const { logger } = require("../../logger/logger");
const rabbitMQ = require("../utilities/rabbitmqServer");
const jsonWebToken = require("jsonwebtoken");
require("dotenv").config();

class UserService {
  registerUser = (user, callback) => {
    userModel.registerUser(user, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        // Send Welcome Mail to User on his Mail
        utilities.sendWelcomeMail(user);
        const secretkey = process.env.SECRET_KEY_FOR_CONFIRM;
        utilities.jwtTokenVerifyMail(data, secretkey, (err, token) => {
          if (token) {
            rabbitMQ.sender(data, data.email);
            nodemailer.verifyMail(token, data);
            return callback(null, token);
          } else {
            return callback(err, null);
          }
        });
        return callback(null, data);
      }
    });
  };

  userLogin = (InfoLogin, callback) => {
    userModel.loginModel(InfoLogin, (error, data) => {
      if (data) {
        const passwordResult = utilities.comparePassword(InfoLogin.password, data.password);
        if (!passwordResult) {
          logger.error("Error occured......");
          // eslint-disable-next-line node/no-callback-literal
          return callback("Error occured......", null);
        } else {
          logger.info(data);
          const token = utilities.token(data);
          return callback(null, token);
        }
      } else {
        logger.error(error);
        return callback(error, null);
      }
    });
  }

  forgotPassword = (email, callback) => {
    userModel.forgotPassword(email, (error, data) => {
      if (error) {
        logger.error(error);
        return callback(error, null);
      } else {
        logger.info(data);
        return callback(null, nodemailer.sendEmail(data));
      }
    });
  };

  resetpassword = async (user) => {
    const success = await userModel.resetpassword(user);
    if (!success) {
      return false;
    }
    return success;
  }

  verifyUser = (data, callback) => {
    const decode = jsonWebToken.verify(data.token, process.env.SECRET_KEY_FOR_CONFIRM);
    if (decode) {
      rabbitMQ.receiver(decode.email).then((val) => {
        userModel.verifyUser(JSON.parse(val), (error, data) => {
          if (data) {
            return callback(null, data);
          } else {
            return callback(error, null);
          }
        });
      })
        .catch((error) => {
          logger.error(error);
        });
    }
  };
}
module.exports = new UserService();
