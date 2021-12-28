class LabelModel {
    addLabel = (label, callback) => {
      return callback(null, label);
    };
}
module.exports = new LabelModel();
