const redis = require("redis");
const client = redis.createClient(process.env.REDIS_PORT);
const { logger } = require("../../logger/logger");

class Redis {
  redisNOteById = (req, res, next) => {
    client.get("getNoteById", (error, redisdata) => {
      if (error) {
        logger.error(error);
        throw error;
      } else if (redisdata) {
        logger.info("getNote successfully retrieved");
        res.status(201).send({
          redis_NoteById: JSON.parse(redisdata),
          message: "getNote successfully retrieved",
          success: true
        });
      } else {
        next();
      }
    });
  };

  redisLabelById = (req, res, next) => {
    client.get("getLabelById", (error, redisdata) => {
      if (error) {
        logger.error(error);
        throw error;
      } else if (redisdata) {
        logger.info("getLabel successfully retrieved");
        res.status(201).send({
          redis_LabelById: JSON.parse(redisdata),
          message: "getLabel successfully retrieved",
          success: true
        });
      } else {
        next();
      }
    });
  }

  setData = (key, time, redisdata) => {
    client.setex(key, time, redisdata);
  };

  clearCache = (key) => {
    client.del(key, (err, res) => {
      if (err) {
        logger.error("cache not cleared");
      } else {
        console.log("Cache cleared");
        logger.info("Cache cleared");
      }
    });
  }
}

module.exports = new Redis();
