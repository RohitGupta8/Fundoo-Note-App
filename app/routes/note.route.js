const notes = require('../controller/note.controller')

module.exports = (app) => {
    app.post('/register',notes.register);

    app.get('/register',notes.findAll);
}