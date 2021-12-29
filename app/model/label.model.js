/* eslint-disable node/no-callback-literal */
/* eslint-disable semi */
/* eslint-disable node/handle-callback-err */
const mongoose = require("mongoose");
const noteModel = require("../model/note.model").User;
const UserModel = require("../model/user.model").UserDB;
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
  addlabelById = (labelID, callback) => {
    UserModel.findById({ _id: labelID.userId }, (error, data) => {
      if (error) {
        return callback(error, null);
      } else if (!data) {
        return callback("user id not found", null)
      } else {
        noteModel.findById({ _id: labelID.noteId }, (error, data) => {
          if (error) {
            return callback(error, null);
          } else if (!data) {
            return callback("note id note found", null);
          } else {
            const labels = new LabelRegister({
              userId: labelID.userId,
              noteId: labelID.noteId,
              labelName: labelID.labelName
            });
            return labels.save((error, data) => {
              if (error) {
                return callback(error, null);
              } else {
                return callback(null, data);
              }
            });
          }
        })
      }
    });
  }
}
module.exports = new LabelModel();
