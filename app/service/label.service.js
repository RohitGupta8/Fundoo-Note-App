const labelModel = require("../model/label.model");
const { logger } = require("../../logger/logger");
class LabelService {
    addLabel = (label, callback) => {
      labelModel.addlabelById(label, (error, data) => {
        if (error) {
          logger.error(error);
          return callback(error, null);
        }
        logger.info(data);
        return callback(null, data);
      });
    };

  getLabel = async (id) => {
    const get = await labelModel.getLabel(id);
    if (!get) {
      return false;
    }
    return get;
  };

  getLabelById = (id, callback) => {
    labelModel.getLabelById(id, (error, data) => {
      if (data) {
        logger.info(data);
        callback(null, data);
      } else {
        logger.error(error);
        callback(error, null);
      }
    });
  };

  updateLabelById = (updateNote, callback) => {
    labelModel.updateLabelById(updateNote, (error, data) => {
      if (error) {
        logger.error(error);
        return callback(error, null);
      } else {
        logger.info(data);
        return callback(null, data);
      }
    }
    );
  }

  deleteLabelById = (id, resolve, reject) => {
    labelModel.deleteLabelById(id).then((data) => resolve(data)).catch((err) => reject(err));
  };
}
module.exports = new LabelService();
