const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

class HelperClass {
    hashedPassword = (password) => {
      return bcrypt.hashSync(password, salt);
    }

    comparePassword = (password, result) => {
      return bcrypt.compareSync(password, result);
    }
}
module.exports = new HelperClass();
