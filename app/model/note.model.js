const mongoose = require("mongoose");
const { logger } = require("../../logger/logger");
const noteSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
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
  createNote = (note, callback) => {
    const notes = new NoteRegister({
      userId: note.userId,
      title: note.title,
      description: note.description
    });
    notes.save((error, data) => {
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
    NoteRegister.find({ userId: id.id }, (error, data) => {
      if (data) {
        logger.info("Successfully retrieve all notes.");
        console.log(data);
        callback(null, data);
      } else {
        logger.error(error);
        callback(error, null);
      }
    });
  }

  getNoteById = (id, callback) => {
    NoteRegister.find({ userId: id.UserId, _id: id.noteId }, (error, data) => {
      if (data) {
        console.log(data);
        logger.info(data);
        callback(null, data);
      } else {
        logger.error(error);
        callback(error, null);
      }
    });
  }

  updateNoteById = (updatedNote, callback) => {
    NoteRegister.findByIdAndUpdate(updatedNote.id, { title: updatedNote.title, description: updatedNote.description }, { new: true }, (err, data) => {
      if (err) {
        return callback(err, null);
      } else {
        return callback(null, data);
      }
    });
  }
}
module.exports = new NoteModel();
