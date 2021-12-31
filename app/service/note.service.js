const noteModel = require("../model/note.model").UserModel;
const { logger } = require("../../logger/logger");

class NoteService {
    createNote = async (note) => {
      const success = noteModel.createNote(note);
      if (!success) {
        return false;
      }
      return success;
    }

  getNote = async (id) => {
    const get = await noteModel.getNote(id);
    if (!get) {
      return false;
    }
    return get;
  };

  getNoteById = (id, callback) => {
    noteModel.getNoteById(id, (err, data) => {
      if (data) {
        logger.info(data);
        return callback(null, data);
      } else {
        logger.error(err);
        return callback(err, null);
      }
    });
  };

  updateNoteById = (updateNote, callback) => {
    noteModel.updateNoteById(updateNote, (error, data) => {
      if (error) {
        logger.error(error);
        return callback(error, null);
      } else {
        logger.info("successfully updated....");
        return callback(null, data);
      }
    });
  };

  deleteNoteById = (id, resolve, reject) => {
    noteModel.deleteNoteById(id).then((data) => resolve(data)).catch((err) => reject(err));
  };
}
module.exports = new NoteService();
