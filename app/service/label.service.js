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
}
module.exports = new LabelService();
