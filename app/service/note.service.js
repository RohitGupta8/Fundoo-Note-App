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
    if (id) {
      callback(null, id.data);
    }
  };
}
module.exports = new NoteService();
