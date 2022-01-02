const userController = require("../controller/user.controller.js");
const helperClass = require("../utilities/helperClass.js");
const noteController = require("../controller/note.controller");
const labelController = require("../controller/label.controller");
const middleware = require("../middleware/redis");

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
  app.get("/getNote/:id", helperClass.validateToken, middleware.redisGetNoteById, noteController.getNoteById);

  // api for updateNoteById
  app.put("/updateNote/:id", helperClass.validateToken, noteController.updateNoteById);

  // api for DeleteNoteById
  app.delete("/deleteNote/:id", helperClass.validateToken, noteController.deleteNoteById);

  // api for AddLabel
  app.post("/addLabel/:id", helperClass.validateToken, labelController.addLabel);

  // api for getLabel
  app.get("/getLabel/", helperClass.validateToken, labelController.getLabel);

  // api for getLabelById
  app.get("/getLabel/:id", helperClass.validateToken, middleware.redisGetLabelById, labelController.getLabelById);

  // api for updateLabelById
  app.put("/updateLabel/:id", helperClass.validateToken, labelController.updateLabelById);

  // api for deleteLabelById
  app.delete("/deleteLabel/:id", helperClass.validateToken, labelController.deleteLabelById);
};
