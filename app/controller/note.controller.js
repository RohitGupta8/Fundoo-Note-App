const validation = require("../utilities/validation");
class NoteController {
  createNote = (req, res) => {
    try {
      const note = {
        userId: req.user.dataForToken.id,
        title: req.body.title,
        description: req.body.description
      };
      const createNoteValidation = validation.createNoteValidation.validate(note);
      if (createNoteValidation.error) {
        console.log(createNoteValidation.error);
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations",
          data: createNoteValidation
        });
      }
      return res.status(201).send({
        message: "Found Token",
        success: true
      });
    } catch (error) {
      return res.status(500).send({
        success: false,
        message: "Internal server error"
      });
    }
  }
}
module.exports = new NoteController();
