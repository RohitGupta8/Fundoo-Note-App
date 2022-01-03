const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

class HelperClass {
  hashedPassword = (password) => {
    return bcrypt.hashSync(password, salt);
  }

  token = (data) => {
    const tokenData = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      email: data.email
    };
    return jwt.sign({ tokenData }, process.env.JWT_SECRET, { expiresIn: "20000H" });
  }

  comparePassword = (password, result) => {
    return bcrypt.compareSync(password, result);
  }

  validateToken = (req, res, next) => {
    const tokenHeader = req.headers.authorization;
    const tokenArray = tokenHeader.split(" ");
    const tokenInfo = tokenArray[1];
    try {
      if (tokenInfo) {
        jwt.verify(tokenInfo, process.env.JWT_SECRET, (error, decoded) => {
          if (error) {
            return res.status(400).send({ success: false, message: "Oops.....Invalid Token" });
          } else {
            req.user = decoded;
            next();
          }
        });
      } else {
        return res.status(401).send({ success: false, message: "Oops....Authorisation failed! Invalid user" });
      }
    } catch (error) {
      return res.status(500).send({ success: false, message: "Something went wrong!" });
    }
  }
}
module.exports = new HelperClass();
