const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

class HelperClass {
    hashedPassword = (password) => {
      return bcrypt.hashSync(password, salt);
    }

  token = (data) => {
    const dataForToken = {
      id: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    };
    return jwt.sign({ dataForToken }, process.env.JWT_SECRET, { expiresIn: "10H" });
  };

    comparePassword = (password, result) => {
      return bcrypt.compareSync(password, result);
    }
}
module.exports = new HelperClass();
