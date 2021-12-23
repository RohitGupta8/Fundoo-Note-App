const notes = require("../controller/note.controller.js");

module.exports = (app) => {
  // API for registration
  app.post("/register", notes.register);

  // api for login
  app.post("/login", notes.login);

  // api for forgot password
  app.post("/forgot", notes.forgotPassword);

  //  api for Reset Password
  app.post("/resetPassword", notes.resetPassword);
};
