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
    if (id) {
      callback(null, id.data);
    }
  };
}
module.exports = new NoteModel();
