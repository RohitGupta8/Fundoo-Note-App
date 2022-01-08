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
    let getId = await redis.getData(id);
    if (!getId) {
      getId = await noteModel.getNoteById(id);
    }
    redis.setData("getRedisById", 60, JSON.stringify(getId));
    logger.info("get data by id");
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
