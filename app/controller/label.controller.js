const validation = require("../utilities/validation");
const labelService = require("../service/label.service");
const { logger } = require("../../logger/logger");
class AddLabelController {
  addLabel = (req, res) => {
    try {
      const label = {
        labelName: req.body.labelName,
        userId: req.user.tokenData.id,
        noteId: req.params.id
      };
      const labelValidation = validation.validateLabel.validate(label);
      if (labelValidation.error) {
        logger.error(labelValidation.error);
        console.log(labelValidation.error);
        return res.status(400).send({
          success: false,
          message: "wrong input validation",
          data: labelValidation
        });
      }
      labelService.addLabel(label, (error, data) => {
        if (error) {
          logger.error(error);
          return res.status(400).json({
            message: "Note Id Not found / invalid note id..",
            success: false
          });
        } else {
          logger.info("successfully Add Label..");
          return res.status(201).send({
            message: "Successfully Add label..",
            success: true,
            data: data
          });
        }
      });
    } catch (error) {
      logger.error(error);
      return res.status(500).send({
        success: false,
        message: "Internal server error"
      });
    }
  }

  getLabel = (req, res) => {
    try {
      const id = { id: req.user.tokenData.id };
      const getLabelValidation = validation.getLabelValidation.validate(id);
      if (getLabelValidation.error) {
        console.log(getLabelValidation.error);
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations",
          data: getLabelValidation
        });
      } return res.status(201).json({
        message: "Successfully labels retrieve.....",
        success: true
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }
  }
}

module.exports = new AddLabelController();
