const Note = require('../model/note.model')

exports.register = (req, res) => {
    // Validate request
    if (!req.body.name) {
        return res.status(400).send({
            message: "Name can not be empty"
        });
    }
   
    // Validate request
    if (!req.body.email) {
        return res.status(400).send({
            message: "Email can not be empty"
        });
    }
    // Validate request
    if (!req.body.password) {
        return res.status(400).send({
            message: "password can not be empty"
        });
    }
    const note = new Note({
        name: req.body.name,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        password: req.body.password
    });

    note.save().then(data => res.send(data)).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
}

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Note.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};