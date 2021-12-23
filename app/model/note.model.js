/* eslint-disable quote-props */
/* eslint-disable node/handle-callback-err */
/* eslint-disable node/no-callback-literal */
const mongoose = require("mongoose");

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
}
module.exports = new UserModel();
