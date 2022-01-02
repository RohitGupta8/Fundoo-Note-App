const redis = require("redis");
const logger = require("../../logger/logger");
const client = redis.createClient();

class RedisClass {
  redisGetNoteById = (req, res, next) => {
    client.get(req.params.id, (error, data) => {
      if (error) {
        throw error;
      } else if (data) {
        logger.info("GetNoteById RedisNotes successfully !");
        res.status(201).send({
          message: "GetNoteById RedisNotes successfully !",
          success: true,
          data: JSON.parse(data)
        });
      } else {
        next();
      }
    });
  }

  redisGetLabelById = (req, res, next) => {
    client.get(req.params.id, (error, data) => {
      if (error) {
        throw error;
      } else if (data) {
        logger.info("GetLabelById RedisGet successfully !");
        res.status(201).send({
          message: "GetLabelById RedisGet successfully !",
          success: true,
          data: JSON.parse(data)
        });
      } else {
        next();
      }
    });
  }

  setData (key, time, data) {
    client.setEx(key, time, data);
  }

  clearCache = (key) => {
    client.del(key, (err, res) => {
      if (err) {
        logger.error("cache not cleared");
      } else {
        console.log("Cache cleared");
        logger.info("Cache cleared");
      }
    });
  };
}
module.exports = new RedisClass();
