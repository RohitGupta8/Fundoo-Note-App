const noteModel = require("../model/note.model");
class NoteService {
    createNote = (note, callback) => {
      noteModel.createNote(note, (error, data) => {
        if (error) {
          return callback(error, null);
        } else {
          return callback(null, data);
        }
      });
    }
}
module.exports = new NoteService();
