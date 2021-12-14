const express = require('express');
require('dotenv').config();

// create a app
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

// Listen a request
app.listen(process.env.PORT, () => console.log("Server is Listening Port: 4000..... SuccessFully !!!"));

//Define a Simple Route
app.get('/', (req, res) => res.json({ "message": "Welcome to Fundoo Note Application" }))

//Require Notes routes
require('./app/routes/note.route.js')(app);

// Configuring the database
const dbConfig = require('./config/database.config.js');
dbConfig.connection();

module.exports = app;


