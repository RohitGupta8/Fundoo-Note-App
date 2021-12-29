/* eslint-disable no-empty */
/* eslint-disable quote-props */
/* eslint-disable node/handle-callback-err */
/* eslint-disable node/no-callback-literal */
const mongoose = require("mongoose");
const encryption = require("../utilities/helperClass");
const Otp = require("./oneTimePassword");
const { logger } = require("../../logger/logger");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

const User = mongoose.model("UserInformation", userSchema);

class UserModel {
  registerUser = (userDetails, callback) => {
    const newUser = new User();
    newUser.firstName = userDetails.firstName;
    newUser.lastName = userDetails.lastName;
    newUser.email = userDetails.email;
    newUser.password = userDetails.password;

    const password = encryption.hashedPassword(userDetails.password);
    newUser.password = password;

    newUser.save((error, data) => {
      if (error) {
        logger.error(error);
        callback(error, null);
      } else {
        logger.info("success fully registered");
        callback(null, data);
      }
    });
  }

  loginModel = (loginData, callBack) => {
    // To find a user email in the database
    User.findOne({ email: loginData.email }, (error, data) => {
      if (error) {
        logger.error("Find error while loggin user");
        return callBack(error, null);
      } else if (!data) {
        logger.error("Invalid User");
        console.log(data);
        return callBack("Invalid Credential", null);
      } else {
        logger.info("Email id found");
        return callBack(null, data);
      }
    });
  }

  forgotPassword = (data, callback) => {
    User.findOne({ email: data.email }, (err, data) => {
      if (err) {
        logger.error(err);
        return callback(err, null);
      } else if (!data) {
        logger.error("Invalid Credential");
        return callback("Invalid Credential", null);
      } else {
        logger.info(data);
        return callback(null, data);
      }
    });
  };

  resetPassword = (userData, callback) => {
    Otp.findOne({ code: userData.code }, (error, data) => {
      if (data) {
        // eslint-disable-next-line eqeqeq
        if (userData.code == data.code) {
          encryption.hashing(userData.password, (err, hash) => {
            if (hash) {
              userData.password = hash;
              User.updateOne({ email: userData.email }, { $set: { password: userData.password } }, (error, data) => {
                if (data) {
                  logger.info("SuccessFully Updated...... ", data);
                  return callback(null, "SuccessFully Updated...... ");
                } else {
                  logger.error("Error in updating");
                  return callback("Error in updating", null);
                }
              });
            } else {
              logger.error("Error in hash on password");
              return callback("Error in hash on password", null);
            }
          });
        } else {
          logger.error("User not found");
          return callback("User not found", null);
        }
      } else {
        logger.error("Otp doesnt match");
        return callback("Otp doesnt match", null);
      }
    });
  }
}
module.exports = { UserModel: new UserModel(), UserDB: User };
