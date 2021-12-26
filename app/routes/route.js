const userController = require("../controller/user.controller.js");
const helperClass = require("../utilities/helperClass.js");
const noteController = require("../controller/note.controller");

module.exports = (app) => {
  // API for registration
  app.post("/register", userController.register);

  // api for login
  app.post("/login", userController.login);

  // api for forgot password
  app.post("/forgotPassword", userController.forgotPassword);

  // api for Reset Password
  app.patch("/resetPassword", userController.resetPassword);

  // api for createNote
  app.post("/createNote", helperClass.validateToken, noteController.createNote);

  // api for getnote
  app.get("/getNote", helperClass.validateToken, noteController.getNote);
};
