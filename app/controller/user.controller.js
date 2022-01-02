const userService = require("../service/user.service.js");
const validation = require("../utilities/validation");
const { logger } = require("../../logger/logger");
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
        logger.error("Wrong Input Validations");
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations",
          data: registerValidation
        });
      }
      userService.registerUser(user, (error, data) => {
        if (error) {
          logger.error("User already registered.");
          return res.status(400).json({
            success: false,
            message: "Try new..  User already registered...."
          });
        } else {
          logger.info("User registered");
          console.log("Data:", data);
          return res.status(200).json({
            success: true,
            message: "SuccessFully !!!  registered......",
            data: data
          });
        }
      });
    } catch (error) {
      logger.error("Internal server error");
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
        logger.error(loginValidation.error);
        res.status(400).send({
          success: false,
          message: loginValidation.error.message
        });
      }
      userService.userLogin(userLoginInfo, (error, data) => {
        if (error) {
          logger.error("Wrong Information entered...");
          return res.status(400).json({
            success: false,
            message: "Oops ...Wrong Information entered....",
            error
          });
        } else {
          logger.info("User logged in successfully");
          console.log("data", data);
          return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: data
          });
        }
      });
    } catch (error) {
      logger.error("Error while Login");
      console.log("In Catch", error);
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
        logger.error(forgotValidation.error);
        res.status(400).send({
          success: false,
          message: "Email is not valid..."
        });
      }

      userService.forgotPassword(userForgotPasswordInfo, (error, result) => {
        if (error) {
          logger.error("Failed to send email. Email not exist....");
          return res.status(400).send({
            success: false,
            message: "Failed to send email. Email not exist...."
          });
        } else {
          logger.info("Email sent successfully");
          console.log("Result", result);
          return res.status(200).send({
            success: true,
            message: "Email sent successfully"
          });
        }
      });
    } catch (error) {
      logger.error("Internal server error");
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
      const userResetPasswordInfo = {
        email: req.body.email,
        password: req.body.password,
        code: req.body.code
      };
      const resetValidation = validation.validResetPassword.validate(userResetPasswordInfo);
      if (resetValidation.error) {
        logger.error(resetValidation.error);
        res.status(400).send({
          success: false,
          message: resetValidation.error.message
        });
      }

      userService.resetPassword(userResetPasswordInfo, (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(400).send({
            success: false,
            message: "Something went wrong"
          });
        } else {
          logger.info("Successfully updated.....");
          return res.status(200).send({
            success: true,
            message: "Successfully updated......"
          });
        }
      });
    } catch (error) {
      logger.error("Internal server error");
      return res.status(500).send({
        success: false,
        message: "Internal server error",
        result: null
      });
    };
  }
}
module.exports = new Controller();
