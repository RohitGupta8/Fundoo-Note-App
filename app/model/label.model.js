const mongoose = require("mongoose");
const noteModel = require("../model/note.model").User;
const labelSchema = mongoose.Schema({
  userId: [{ type: mongoose.Schema.Types.ObjectId, ref: "UserInformation" }],

  noteId: [{ type: mongoose.Schema.Types.ObjectId, ref: "NoteBook" }],

  labelName: {
    type: String,
    required: true
  }

}, {
  timestamps: true
});

const LabelRegister = mongoose.model("LabelBook", labelSchema);

class LabelModel {
  addlabelById = (labelData, callback) => {
    noteModel.find({ _id: labelData._id }, (data, error) => {
      if (data) {
        return callback(error, null);
      } else {
        LabelRegister.findOne({ labelName: labelData.labelName, noteId: labelData.noteId }, { new: true }, (data, error) => {
          if (data) {
            return callback(error, null);
          } else {
            const labels = new LabelRegister({
              noteId: labelData.noteId,
              userId: labelData.userId,
              labelName: labelData.labelName
            });
            return labels.save((error, data) => {
              if (error) {
                return callback(error, null);
              } else {
                return callback(null, data);
              }
            });
          }
        });
      }
    });
  }
}
module.exports = new LabelModel();
