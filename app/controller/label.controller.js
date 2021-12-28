const validation = require("../utilities/validation");
class AddLabelController {
    addLabel = (req, res) => {
      try {
        const label = {
          labelName: req.body.labelName,
          userId: req.user.dataForToken.id,
          noteId: req.params.id
        };
        const labelValidation = validation.validateLabel.validate(label);
        if (labelValidation.error) {
          console.log(labelValidation.error);
          return res.status(400).send({
            success: false,
            message: "wrong input validation",
            data: labelValidation
          });
        }
        return res.status(201).send({
          success: true,
          message: "SuccessFully Add label....."
        });
      } catch (err) {
        return res.status(500).json({
          message: "Internal Error"
        }
        );
      }
    }
}

module.exports = new AddLabelController();
