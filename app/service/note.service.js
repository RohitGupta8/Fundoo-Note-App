const noteModel = require("../model/note.model").UserModel;
const { logger } = require("../../logger/logger");
const redis = require("../middleware/redis");

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

  getNoteById = async (id) => {
    const getId = await noteModel.getNoteById(id);
    if (!getId) {
      return false;
    }
    redis.setData("getNoteById", 60, JSON.stringify(getId));
    return getId;
  };

  updateNoteById = (updateNote, callback) => {
    noteModel.updateNoteById(updateNote, (error, data) => {
      if (error) {
        logger.error(error);
        return callback(error, null);
      } else {
        logger.info("successfully updated....");
        redis.clearCache("getNoteById");
        return callback(null, data);
      }
    });
  };

  deleteNoteById = (id, resolve, reject) => {
    noteModel.deleteNoteById(id).then((data) => resolve(data)).catch((err) => reject(err));
  };
}
module.exports = new NoteService();
