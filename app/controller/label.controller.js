class AddLabelController {
    addLabel = (req, res) => {
      try {
        return res.status(201).json({
          message: "Valid ENtry of Token"
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
