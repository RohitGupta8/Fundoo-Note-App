class NoteController {
  createNote = (req, res) => {
    try {
      const token = req.user;
      if (token) {
        return res.status(201).send({
          message: "Found Token",
          success: true
        });
      } else {
        return res.status(400).send({
          success: false,
          message: "Wrong Input Validations"
        });
      }
    } catch (error) {
      return res.status(500).send({
        success: false,
        message: "Internal server error"
      });
    }
  }
}
module.exports = new NoteController();
