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

  // api for creating a Note
  app.post("/note", helperClass.validateToken, noteController.note);

  // api for getnote
  app.get("/note", helperClass.validateToken, noteController.getNote);

  // api for getNoteById
  app.get("/note/:id", helperClass.validateToken, noteController.getNoteById);

  // api for updateNoteById
  app.put("/note/:id", helperClass.validateToken, noteController.updateNoteById);

  // api for DeleteNoteById
  app.delete("/note/:id", helperClass.validateToken, noteController.removeNote);

  // api for AddLabel
  app.post("/label/:id", helperClass.validateToken, labelController.label);

  // api for get all Labels
  app.get("/label/", helperClass.validateToken, labelController.getLabel);

  // api for getLabelById
  app.get("/label/:id", helperClass.validateToken, labelController.getLabelById);

  // api for updateLabelById
  app.put("/label/:id", helperClass.validateToken, labelController.upgradeLabelById);

  // api for deleteLabelById
  app.delete("/label/:id", helperClass.validateToken, labelController.removeLabelById);

  // Verify User
  app.get("/verify/:token", userController.verifyUser);
};
