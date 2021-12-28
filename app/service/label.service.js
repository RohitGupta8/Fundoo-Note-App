class LabelService {
    addLabel = (label, callback) => {
      return callback(null, label);
    };
}
module.exports = new LabelService();
