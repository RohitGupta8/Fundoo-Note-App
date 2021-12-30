/* eslint-disable node/no-callback-literal */
/* eslint-disable semi */
/* eslint-disable node/handle-callback-err */
const mongoose = require("mongoose");
const noteModel = require("../model/note.model").User;
const UserModel = require("../model/user.model").UserDB;
const { logger } = require("../../logger/logger");
const labelSchema = mongoose.Schema({
  userId: [{ type: mongoose.Schema.Types.ObjectId, ref: "UserInformation" }],

  noteId: [{ type: mongoose.Schema.Types.ObjectId, ref: "NoteBook" }],

  labelName: {
    type: String,
    required: true,
    unique: true
  }

}, {
  timestamps: true
});

const LabelRegister = mongoose.model("LabelBook", labelSchema);

class LabelModel {
  addlabelById = (labelID, callback) => {
    UserModel.findById({ _id: labelID.userId }, (error, data) => {
      if (error) {
        logger.error(error);
        return callback(error, null);
      } else if (!data) {
        logger.error("user id not found")
        return callback("user id not found", null)
      } else {
        noteModel.findById({ _id: labelID.noteId }, (error, data) => {
          if (error) {
            logger.error(error);
            return callback(error, null);
          } else if (!data) {
            logger.error("noteId not found")
            return callback("note id note found", null);
          } else {
            const labels = new LabelRegister({
              userId: labelID.userId,
              noteId: labelID.noteId,
              labelName: labelID.labelName
            });
            return labels.save((error, data) => {
              if (error) {
                logger.error(error);
                return callback(error, null);
              } else {
                logger.info(data);
                return callback(null, data);
              }
            });
          }
        })
      }
    });
  }

  getLabel = (labelID, callback) => {
    LabelRegister.find({ userId: labelID.id }, (error, data) => {
      if (data) {
        logger.info(data);
        callback(null, data);
      } else {
        logger.error(error);
        callback(error, null);
      }
    })
  };

  getLabelById = (id, callback) => {
    LabelRegister.find({ userId: id.userId, _id: id.id }, (error, data) => {
      if (data) {
        logger.info(data);
        callback(null, data);
      } else {
        logger.error(error);
        callback(error, null);
      }
    })
  };

  updateLabelById = (id, callback) => {
    LabelRegister.findByIdAndUpdate(id.id, { labelName: id.labelName }, { new: true }, (err, data) => {
      if (err) {
        logger.error(err);
        return callback(err, null);
      } else {
        logger.info(data);
        return callback(null, data);
      }
    });
  }

  deleteLabelById = (id, callback) => {
    return callback(null, id);
  };
}
module.exports = new LabelModel();
