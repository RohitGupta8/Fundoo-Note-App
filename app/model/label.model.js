/* eslint-disable no-undef */
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
    required: true
  }

}, {
  timestamps: true
});

const LabelRegister = mongoose.model("LabelBook", labelSchema);

class LabelModel {
  addlabelById = async (id) => {
    const isAddLabel = await noteModel.findById({ _id: id.noteId });
    if (!isAddLabel) {
      logger.error("noteId note found in DataBase");
      return false
    } else {
      const addLabel = await LabelRegister.findOneAndUpdate({ labelName: id.labelName }, { $addToSet: { noteId: id.noteId } });
      if (addLabel) {
        logger.info("noteId added in given labelName")
        return addLabel;
      } else {
        const labels = new LabelRegister({
          userId: id.userId,
          noteId: id.noteId,
          labelName: id.labelName
        });
        const labelSave = await labels.save();
        if (labelSave) {
          logger.info("new label created")
          return labelSave;
        }
        logger.error("error in creating note");
        return false;
      }
    }
  };

  getLabel = async (id) => {
    const getAll = await LabelRegister.find({ userId: id.id });
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
