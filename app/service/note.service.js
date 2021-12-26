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
        callback(null, data);
      } else {
        callback(error, null);
      }
    });
  };
}
module.exports = new NoteService();
