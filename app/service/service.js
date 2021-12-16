const userModel = require("../model/note.model.js");
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
          return callback(null, data);
        } else {
          return callback(error, null);
        }
      });
    }
}
module.exports = new UserService();
