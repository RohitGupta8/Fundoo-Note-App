const noteModel = require("../model/note.model");
const { logger } = require("../../logger/logger");
class NoteService {
    createNote = (note, callback) => {
      noteModel.createNote(note, (error, data) => {
        if (error) {
          logger.error(error);
          return callback(error, null);
        } else {
          logger.info(data);
          return callback(null, data);
        }
      });
    }

  getNote = (id, callback) => {
    noteModel.getNote(id, (error, data) => {
      if (data) {
        logger.info(data);
        callback(null, data);
      } else {
        logger.error(error);
        callback(error, null);
      }
    });
  };

  getNoteById = (id, callback) => {
    noteModel.getNoteById(id, (err, data) => {
      if (data) {
        return callback(null, data);
      } else {
        return callback(err, null);
      }
    });
  };
}
module.exports = new NoteService();
