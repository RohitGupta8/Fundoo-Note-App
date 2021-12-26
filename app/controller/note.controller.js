const validation = require("../utilities/validation");
const noteService = require("../service/note.service");
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
      noteService.createNote(note, (error, data) => {
        if (error) {
          return res.status(400).json({
            message: "failed to post note",
            success: false
          });
        } else {
          return res.status(201).send({
            message: "Successfully inserted note",
            success: true,
            data: data
          });
        }
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
