const express = require("express");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger/swagger.json");

// create a app
const app = express();

app.use(express.json());

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Listen a request
app.listen(process.env.PORT, () => console.log("Server is Listening Port: 4000..... SuccessFully !!!"));

// Define a Simple Route
app.get("/", (req, res) => res.json({ message: "Welcome to Fundoo Note Application" }));

// Require Notes routes
require("./app/routes/note.route.js")(app);

// Configuring the database
const dbConfig = require("./config/database.config.js");
dbConfig.connection();

module.exports = app;
