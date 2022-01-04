const redis = require("redis");

let client;
class RedisServer {
  constructor () {
    this.connect();
  }

  connect = () => {
    client = redis.createClient(6379, "127.0.0.1");
    client.connect();
    client.on("connect", function () {
      console.log("successFully .....Redis server Connected!");
    });
  };

  getData = async (key) => {
    client.get(key + "getRedisById", (error, data) => {
      if (error) {
        throw error;
      } else if (data) {
        return JSON.parse(data);
      } else {
        return null;
      }
    });
  };

  setData = async (key, time, data) => {
    client.setEx(key, time, data);
  };

  clearCache = (key) => {
    client.del(key, (err, res) => {
      if (err) {
        return false;
      } else {
        return true;
      }
    });
  };
}
module.exports = new RedisServer();
