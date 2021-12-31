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
        logger.error(getLabelValidation.error);
        console.log(getLabelValidation.error);
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations",
          data: getLabelValidation
        });
      }
      labelService.getLabel(id, (error, data) => {
        if (error) {
          logger.error(error);
          return res.status(400).json({
            message: "failed to get all notes",
            success: false
          });
        } else {
          logger.info("get all labels");
          return res.status(201).json({
            message: "Get All label successfully",
            success: true,
            data: data
          });
        }
      });
    } catch (error) {
      logger.error("internal server error");
      return res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }
  }

  getLabelById = (req, res) => {
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
      labelService.getLabelById(id, (error, data) => {
        if (error) {
          logger.error(error);
          return res.status(400).json({
            message: "Oops....failed to get a notes",
            success: false
          });
        } else {
          logger.info("success get label");
          return res.status(201).json({
            message: "Hurray....!!!.Get  label successfully.....",
            success: true,
            data: data
          });
        }
      });
    } catch (error) {
      logger.error(error);
      return res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }
  }

  updateLabelById = (req, res) => {
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
      labelService.updateLabelById(updateLabel, (error, data) => {
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

  deleteLabelById = (req, res) => {
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
      labelService.deleteLabelById(id, resolve, reject);
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
