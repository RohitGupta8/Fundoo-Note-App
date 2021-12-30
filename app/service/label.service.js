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

  getLabel = (id, callback) => {
    labelModel.getLabel(id, (error, data) => {
      if (data) {
        logger.info(data);
        callback(null, data);
      } else {
        logger.error(error);
        callback(error, null);
      }
    });
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

  updateLabelById = (id, callback) => {
    return callback(null, id);
  }
}
module.exports = new LabelService();
