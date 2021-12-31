/* eslint-disable node/no-callback-literal */
/* eslint-disable semi */
/* eslint-disable node/handle-callback-err */
const mongoose = require("mongoose");
const noteModel = require("../model/note.model").User;
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
    noteModel.findById({ _id: labelID.noteId }, (error, data) => {
      if (error) {
        logger.error(error);
        return callback(error, null);
      } else if (data) {
        LabelRegister.findOneAndUpdate({ labelName: labelID.labelName }, { $addToSet: { noteId: labelID.noteId } }, (error, data) => {
          if (error) {
            callback(error, null)
          } else if (!data) {
            logger.log("label is  not found");
            return callback("label is not found", data)
          } else {
            logger.error(error);
            return callback(error, data)
          }
        })
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

  getLabel = async (labelID) => {
    const getAll = await LabelRegister.find({ userId: labelID.id });
    if (!getAll) {
      return false;
    }
    return getAll;
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

  deleteLabelById = (id) => {
    return new Promise((resolve, reject) => {
      LabelRegister.findOneAndDelete({ $and: [{ _id: id.id }, { userId: id.userId }] }).then(data => resolve(data)).catch((err) => reject(err));
    })
  }
}
module.exports = new LabelModel();
