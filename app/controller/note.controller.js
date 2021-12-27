const validation = require("../utilities/validation");
const noteService = require("../service/note.service");
const { logger } = require("../../logger/logger");
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
        logger.error(createNoteValidation.error);
        console.log(createNoteValidation.error);
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations",
          data: createNoteValidation
        });
      }
      noteService.createNote(note, (error, data) => {
        if (error) {
          logger.error(error);
          return res.status(400).json({
            message: "failed to post note",
            success: false
          });
        } else {
          logger.info("Successfully inserted note");
          return res.status(201).send({
            message: "Successfully inserted note",
            success: true,
            data: data
          });
        }
      });
    } catch (error) {
      logger.error("Internal server error");
      return res.status(500).send({
        success: false,
        message: "Internal server error"
      });
    }
  }

  getNote = (req, res) => {
    try {
      const id = { id: req.user.dataForToken.id };
      const getNoteValidation = validation.noteIDValidation.validate(id);
      if (getNoteValidation.error) {
        console.log(getNoteValidation.error);
        logger.error(getNoteValidation.error);
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations",
          data: getNoteValidation
        });
      }
      noteService.getNote(id, (error, data) => {
        if (error) {
          logger.error(error);
          return res.status(400).json({
            message: "failed to get all notes",
            success: false
          });
        } else {
          logger.info("Get All Notes successfully");
          return res.status(201).json({
            message: " Successfully !!! retrieve all notes.....",
            success: true,
            data: data
          });
        }
      });
    } catch (error) {
      console.log(error);
      logger.error(error);
      return res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }
  }

  getNoteById = (req, res) => {
    try {
      const id = { userId: req.user.dataForToken.id, noteId: req.params.id };
      const getNoteValidation = validation.getNoteByIDValidation.validate(id);
      if (getNoteValidation.error) {
        console.log(getNoteValidation.error);
        logger.error(getNoteValidation.error);
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations",
          data: getNoteValidation
        });
      }
      noteService.getNoteById(id, (error, data) => {
        if (error) {
          logger.error(error);
          return res.status(400).json({
            message: "failed to get given notes",
            success: false
          });
        } else {
          logger.info(data);
          return res.status(201).json({
            message: " Successfully !! retreive given note",
            success: true,
            data: data
          });
        }
      });
    } catch (error) {
      logger.error(error);
      return res.status(500).json({
        message: "Internal server error",
        success: false
      });
    }
  }

  updateNoteById = (req, res) => {
    try {
      const updateNote = {
        id: req.params.id,
        userId: req.user.dataForToken.id,
        title: req.body.title,
        description: req.body.description
      };
      const updateNoteValidation = validation.noteUpdateValidation.validate(updateNote);
      if (updateNoteValidation.error) {
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations",
          data: updateNoteValidation
        });
      }
      return res.status(201).json({
        message: "Getting Appropriate response from token",
        success: true
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        success: false
      });
    }
  }
}
module.exports = new NoteController();
