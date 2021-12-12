const userModel = require('../model/note.model.js')
class userService {
    registerUser = (user, callback) => {
        userModel.registerUser(user, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });
    }
}
module.exports = new userService();