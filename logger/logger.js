const winston = require("winston");

module.exports.logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: "info",
      filename: "info.log",
      json: true,
      format: winston.format.combine(winston.format.timestamp(),
        winston.format.json())
    }),
    new winston.transports.File({
      level: "error",
      filename: "error.log",
      json: true,
      format: winston.format.combine(winston.format.timestamp(),
        winston.format.json())
    })
  ]
});
