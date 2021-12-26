const mongoose = require("mongoose");
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
          return callback(error, null);
        } else {
          return callback(null, data);
        }
      });
    }
}
module.exports = new NoteModel();
