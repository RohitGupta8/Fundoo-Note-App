const redis = require("redis");
const client = redis.createClient("redis://127.0.0.1:6379");
const { logger } = require("../../logger/logger");

class Redis {
    redisGetNoteById = (req, res, next) => {
      client.get("getNoteById", (error, redisdata) => {
        if (error) {
          logger.error(error);
          throw error;
        } else if (redisdata) {
          logger.info("Successfully retrieved all notes.......");
          res.status(200).send({
            redisNoteById: JSON.parse(redisdata),
            message: "Successfully retrieved all notes.......",
            success: true
          });
        } else {
          next();
        }
      });
    };

    redisGetLabelById = (req, res, next) => {
      client.get("getLabelById", (error, redisdata) => {
        if (error) {
          logger.error(error);
          throw error;
        } else if (redisdata) {
          logger.info("Successfully retrieved ALL Labels.....");
          res.status(200).send({
            redis_LabelById: JSON.parse(redisdata),
            message: " Successfully retrieved ALL Labels......",
            success: true
          });
        } else {
          next();
        }
      });
    }

    setData = (key, time, redisdata) => {
      client.setEx(key, time, redisdata);
    };

    /**
     * @description clearing cache
     */

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
