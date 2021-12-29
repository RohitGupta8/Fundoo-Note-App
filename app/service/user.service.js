/* eslint-disable node/no-callback-literal */
const userModel = require("../model/user.model.js").UserModel;
const utilities = require("../utilities/helperClass");
const nodemailer = require("../utilities/nodeMailer");
const { logger } = require("../../logger/logger");

class UserService {
  registerUser = (user, callback) => {
    userModel.registerUser(user, (err, data) => {
      if (err) {
        logger.error(err);
        callback(err, null);
      } else {
        logger.info(data);
        callback(null, data);
      }
    });
  }

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

  resetPassword = (resetInfo, callback) => {
    userModel.resetPassword(resetInfo, (err, data) => {
      if (err) {
        logger.error(err);
        callback(err, null);
      } else if (!data) {
        logger.error("Code not found");
        callback("Code not found", null);
      } else {
        logger.info(data);
        callback(null, data);
      }
    });
  };
}
module.exports = new UserService();
