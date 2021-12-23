const userModel = require("../model/note.model.js");
const utilities = require("../utilities/encryption");
class UserService {
  registerUser = (user, callback) => {
    userModel.registerUser(user, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }

  userLogin = (InfoLogin, callback) => {
    userModel.loginModel(InfoLogin, (error, data) => {
      if (data) {
        const passwordResult = utilities.comparePassword(InfoLogin.password, data.password);
        if (!passwordResult) {
          // eslint-disable-next-line node/no-callback-literal
          return callback("Error occured......", null);
        } else {
          const token = utilities.token(data);
          return callback(null, token);
        }
      } else {
        return callback(error, null);
      }
    });
  }
}
module.exports = new UserService();
