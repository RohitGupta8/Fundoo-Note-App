const userService = require("../service/user.service.js");
const validation = require("../utilities/validation");

class Controller {
  register = (req, res) => {
    try {
      const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      };
      const registerValidation = validation.validDetails.validate(user);
      if (registerValidation.error) {
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations",
          data: registerValidation
        });
      }
      userService.registerUser(user, (error, data) => {
        if (error) {
          return res.status(400).json({
            success: false,
            message: "Try new..  User already registered...."
          });
        } else {
          return res.status(200).json({
            success: true,
            message: "SuccessFully !!!  registered......",
            data: data
          });
        }
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Oops....Error While Registering",
        data: null
      });
    }
  }

  login = (req, res) => {
    try {
      const paswd = req.body.password;
      const userLoginInfo = {
        email: req.body.email,
        password: paswd
      };
      const loginValidation = validation.validLogin.validate(userLoginInfo);
      if (loginValidation.error) {
        res.status(400).send({
          success: false,
          message: loginValidation.error.message
        });
      }
      userService.userLogin(userLoginInfo, (error, data) => {
        if (error) {
          return res.status(400).json({
            success: false,
            message: "Oops ...Wrong Information entered....",
            error
          });
        } else {
          console.log("data", data);
          return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: data
          });
        }
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error while Login",
        error,
        data: null
      });
    }
  };

  forgotPassword = (req, res) => {
    try {
      const userForgotPasswordInfo = {
        email: req.body.email
      };

      const forgotValidation = validation.validForgotPassword.validate(userForgotPasswordInfo);

      if (forgotValidation.error) {
        res.status(400).send({
          success: false,
          message: "Email is not valid..."
        });
      }

      userService.forgotPassword(userForgotPasswordInfo, (error, result) => {
        if (error) {
          return res.status(400).send({
            success: false,
            message: "Failed to send email. Email not exist...."
          });
        } else {
          return res.status(200).send({
            success: true,
            message: "Email sent successfully"
          });
        }
      });
    } catch (error) {
      console.log("Error", error);
      return res.status(500).send({
        success: false,
        message: "Internal server error",
        result: null
      });
    };
  }

  resetPassword = (req, res) => {
    try {
      return res.status(200).send({
        success: true,
        message: "Email sent successfully"
      });
    } catch (error) {
      console.log("Error", error);
      return res.status(500).send({
        success: false,
        message: "Internal server error",
        result: null
      });
    };
  }
}
module.exports = new Controller();
