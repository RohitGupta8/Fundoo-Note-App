const validation = require("../utilities/validation");
const labelService = require("../service/label.service");
const { logger } = require("../../logger/logger");

class AddLabelController {
  label = async (req, res) => {
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
      const add = await labelService.label(label);
      if (!add) {
        logger.error("error in add Labels");
        return res.status(400).send({
          success: false,
          message: "Oops Error in Add Label....."
        });
      } else {
        logger.info("successfully add a Label");
        return res.status(201).send({
          success: true,
          message: "Congratulation !!!! Successfully Add Label...........",
          data: add
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Internal server error"
      });
    }
  }

  getLabel = async (req, res) => {
    try {
      const id = { id: req.user.tokenData.id };
      const getLabelValidation = validation.getLabelValidation.validate(id);
      if (getLabelValidation.error) {
        logger.error(getLabelValidation.error);
        console.log(getLabelValidation.error);
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations",
          data: getLabelValidation
        });
      }
      const serviceLabel = await labelService.getLabel(id);
      if (!serviceLabel) {
        logger.error("error in getting all Labels");
        return res.status(400).send({
          success: false,
          message: "error in getting all Labels"
        });
      } else {
        logger.info("successfully getting all Labels");
        return res.status(201).send({
          success: true,
          message: "Successfully....  getting all Labels",
          data: serviceLabel
        });
      }
    } catch (error) {
      console.log("internal =  ", error);
      logger.error("internal server error");
      return res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }
  }

  getLabelById = async (req, res) => {
    try {
      const id = { userId: req.user.tokenData.id, id: req.params.id };
      const getLabelValidation = validation.getLabelByIdValidation.validate(id);
      if (getLabelValidation.error) {
        logger.error(getLabelValidation.error);
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations",
          data: getLabelValidation
        });
      }
      const serviceLabe = await labelService.getLabelById(id);
      if (!serviceLabe) {
        logger.error("error in getting a Label");
        return res.status(400).send({
          success: false,
          message: "error in getting a Label"
        });
      } else {
        logger.info("successfully getting a Label");
        return res.status(201).send({
          success: true,
          message: "Successfully....  getting a Label",
          data: serviceLabe
        });
      }
    } catch (error) {
      logger.error("internal server error");
      return res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }
  }

  upgradeLabelById = (req, res) => {
    try {
      const updateLabel = {
        id: req.params.id,
        userId: req.user.tokenData.id,
        labelName: req.body.labelName
      };
      const updateLabelValidation = validation.labelUpdateValidation.validate(updateLabel);
      if (updateLabelValidation.error) {
        logger.error(updateLabelValidation.error);
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations",
          data: updateLabelValidation
        });
      }
      labelService.upgradeLabelById(updateLabel, (error, data) => {
        if (error) {
          logger.error(error);
          return res.status(400).json({
            message: "Failed to update note",
            success: false
          });
        } else {
          logger.info("successfully updated...");
          return res.status(201).send({
            message: "Successfully updated....",
            success: true,
            data: data
          });
        }
      });
    } catch (error) {
      logger.error(error);
      return res.status(500).json({
        message: "Internal server error",
        success: false
      });
    }
  }

  removeLabelById = (req, res) => {
    try {
      const id = { userId: req.user.tokenData.id, id: req.params.id };
      const deleteLabelValidation = validation.validateDeleteLabel.validate(id);
      if (deleteLabelValidation.error) {
        logger.error(deleteLabelValidation.error);
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations",
          data: deleteLabelValidation
        });
      }
      labelService.removeLabelById(id, resolve, reject);
      function resolve (data) {
        logger.info("Delete Label successfully");
        return res.status(201).send({
          message: "Delete label successfully",
          success: true,
          data: data
        });
      }
      function reject () {
        logger.error("Failed to delete Label");
        return res.status(400).json({
          message: "failed to delete Label",
          success: false
        });
      }
    } catch {
      logger.error("internal server error");
      return res.status(500).json({
        message: "Internal server error",
        success: false
      });
    }
  }
}

module.exports = new AddLabelController();
