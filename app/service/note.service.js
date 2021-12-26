class NoteService {
    createNote = (note, callback) => {
      if (note) {
        callback(null, note);
      }
    }
}
module.exports = new NoteService();
