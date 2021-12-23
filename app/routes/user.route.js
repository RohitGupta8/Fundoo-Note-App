const userController = require("../controller/user.controller.js");

module.exports = (app) => {
  // API for registration
  app.post("/register", userController.register);

  // api for login
  app.post("/login", userController.login);

  // api for forgot password
  app.post("/forgotPassword", userController.forgotPassword);

  // api for Reset Password
  app.patch("/resetPassword", userController.resetPassword);
};
