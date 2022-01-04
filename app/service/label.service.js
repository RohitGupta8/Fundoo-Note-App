const labelModel = require("../model/label.model");
const { logger } = require("../../logger/logger");
const redis = require("../middleware/nodeRedis.middleware");

class LabelService {
    addLabel = async (label) => {
      const add = await labelModel.addlabelById(label);
      if (add) {
        return add;
      }
      return false;
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
        redis.setData("getLabelById", 60, JSON.stringify(data));
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
        redis.clearCache("getLabelById");
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
