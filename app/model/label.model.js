const mongoose = require("mongoose");
const labelSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  noteId: [{ type: mongoose.Schema.Types.ObjectId, ref: "NoteRegister" }],

  labelName: {
    type: String,
    required: true
  }

}, {
  timestamps: true
});

const LabelRegister = mongoose.model("LabelBook", labelSchema);

class LabelModel {
    addlabelById = (label, callback) => {
      const labels = new LabelRegister({
        userId: label.userId,
        noteId: label.noteId,
        labelName: label.labelName
      });
      labels.save((error, data) => {
        if (error) {
          return callback(error, null);
        } else {
          return callback(null, data);
        }
      });
    }
}
module.exports = new LabelModel();
