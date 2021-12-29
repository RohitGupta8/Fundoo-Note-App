const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

class HelperClass {
  hashedPassword = (password) => {
    return bcrypt.hashSync(password, salt);
  }

  hashing = (password, callback) => {
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
        return callback(err, null);
      } else {
        return callback(null, hash);
      }
    });
  }

  token = (data) => {
    const dataForToken = {
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      email: data.email
    };
    return jwt.sign({ dataForToken }, process.env.JWT_SECRET, { expiresIn: "20000H" });
  }

  comparePassword = (password, result) => {
    return bcrypt.compareSync(password, result);
  }

  validateToken = (req, res, next) => {
    const header = req.headers.authorization;
    const myArr = header.split(" ");
    const token = myArr[1];
    try {
      if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
          if (error) {
            return res.status(400).send({ success: false, message: "Invalid Token" });
          } else {
            console.log("token ", decoded);
            req.user = decoded;
            next();
          }
        });
      } else {
        return res.status(401).send({ success: false, message: "Authorisation failed! Invalid user" });
      }
    } catch (error) {
      return res.status(500).send({ success: false, message: "Something went wrong!" });
    }
  }
}
module.exports = new HelperClass();
