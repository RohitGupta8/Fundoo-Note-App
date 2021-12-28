const userController = require("../controller/user.controller.js");
const helperClass = require("../utilities/helperClass.js");
const noteController = require("../controller/note.controller");
const labelController = require("../controller/label.controller");

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

  // api for getNoteById
  app.get("/getNote/:id", helperClass.validateToken, noteController.getNoteById);

  // api for updateNoteById
  app.put("/updateNote/:id", helperClass.validateToken, noteController.updateNoteById);

  // api for DeleteNoteById
  app.delete("/deleteNote/:id", helperClass.validateToken, noteController.deleteNoteById);

  // api for AddLabel
  app.post("/addLabel", helperClass.validateToken, labelController.addLabel);
};
