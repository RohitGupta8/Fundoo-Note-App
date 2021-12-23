/* eslint-disable quote-props */
/* eslint-disable node/handle-callback-err */
/* eslint-disable node/no-callback-literal */
const mongoose = require("mongoose");
const encryption = require("../utilities/encryption");
const Otp = require("./oneTimePassword");

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

    newUser.save((error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  loginModel = (loginData, callBack) => {
    // To find a user email in the database
    User.findOne({ email: loginData.email }, (error, data) => {
      if (error) {
        return callBack(error, null);
      } else if (!data) {
        console.log(data);
        return callBack("Invalid Credential", null);
      } else {
        return callBack(null, data);
      }
    });
  }

  forgotPassword = (data, callback) => {
    User.findOne({ email: data.email }, (err, data) => {
      if (data) {
        return callback(null, data);
      } else {
        return callback(err, null);
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
                  return callback(null, "SuccessFully Updated...... ");
                } else {
                  return callback("Error in updating", null);
                }
              });
            } else {
              return callback("Error in hash on password", null);
            }
          });
        } else {
          return callback("User not found", null);
        }
      } else {
        return callback("Otp doesnt match", null);
      }
    });
  }
}
module.exports = new UserModel();
