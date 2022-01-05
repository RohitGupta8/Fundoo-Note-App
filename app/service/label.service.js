const labelModel = require("../model/label.model");
const { logger } = require("../../logger/logger");
const redis = require("../middleware/nodeRedis.middleware");

class LabelService {
    label = async (label) => {
      const add = await labelModel.label(label);
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

  upgradeLabelById = (updateNote, callback) => {
    labelModel.upgradeLabelById(updateNote, (error, data) => {
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

  removeLabelById = (id, resolve, reject) => {
    labelModel.removeLabelById(id).then((data) => resolve(data)).catch((err) => reject(err));
  };
}
module.exports = new LabelService();
