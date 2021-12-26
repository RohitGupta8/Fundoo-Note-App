class NoteModel {
    createNote = (note, callback) => {
      if (note) {
        callback(null, note);
      }
    }
}
module.exports = new NoteModel();
