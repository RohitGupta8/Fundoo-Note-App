const noteModel = require("../model/note.model").UserModel;
const { logger } = require("../../logger/logger");
const redis = require("../middleware/nodeRedis.middleware");

class NoteService {
    note = async (note) => {
      const success = noteModel.note(note);
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
    redis.setData("getRedisById", 60, JSON.stringify(getId));
    return getId;
  };

  updateNoteById = (updateNote, callback) => {
    noteModel.updateNoteById(updateNote, (error, data) => {
      if (error) {
        logger.error(error);
        return callback(error, null);
      } else {
        logger.info("successfully updated....");
        redis.clearCache(data.id);
        return callback(null, data);
      }
    });
  };

  removeNote = (id, resolve, reject) => {
    noteModel.removeNote(id).then((data) => resolve(data)).catch((err) => reject(err));
  };
}
module.exports = new NoteService();
