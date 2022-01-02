/* eslint-disable node/no-callback-literal */
const mongoose = require("mongoose");
const { logger } = require("../../logger/logger");
const noteSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserInformation" },
  title: {
    type: String,
    required: true,
    minlength: 2
  },
  description: {
    type: String,
    required: true,
    minlength: 2
  }
}, {
  timestamps: true
});
const NoteRegister = mongoose.model("NoteBook", noteSchema);

class NoteModel {
  createNote = async (note) => {
    const notes = new NoteRegister({
      userId: note.userId,
      title: note.title,
      description: note.description
    });
    const success = await notes.save();
    if (!success) {
      return false;
    }
    return success;
  }

  getNote = async (id) => {
    const getAll = await NoteRegister.find({ userId: id.id });
    if (!getAll) {
      return false;
    }
    return getAll;
  }

  getNoteById = async (id) => {
    const getId = await NoteRegister.find({ userId: id.userId, _id: id.id });
    if (!getId) {
      return false;
    }
    return getId;
  }

  updateNoteById = (updatedNote, callback) => {
    NoteRegister.findByIdAndUpdate(updatedNote.id, { title: updatedNote.title, description: updatedNote.description }, { new: true }, (err, data) => {
      if (err) {
        logger.error(err);
        return callback(err, null);
      } else {
        logger.info("updated successfully");
        console.log(data);
        return callback(null, data);
      }
    });
  }

  deleteNoteById = (id) => {
    return new Promise((resolve, reject) => {
      NoteRegister.findOneAndDelete({ $and: [{ _id: id.noteId }, { userId: id.userId }] }).then(data => resolve(data)).catch((err) => reject(err));
    });
  }
}
module.exports = {
  UserModel: new NoteModel(),
  User: NoteRegister
};
