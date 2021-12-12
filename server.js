const express = require('express');
const mongoose = require('mongoose');

// Configuring the database
const dbConfig = require('./config/database.config.js');

// create a app
const app = express();

app.use(express.json());

// Listen a request
app.listen(4000, () => console.log("Server is Listening Port: 4000..... SuccessFully !!!"));

//Define a Simple Route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Fundoo Note Application" })
})

//Require Notes routes
require('./app/routes/note.route.js')(app);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to the database....Successfully !!!");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

