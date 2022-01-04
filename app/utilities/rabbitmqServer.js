/* eslint-disable prefer-promise-reject-errors */
const amqp = require("amqplib/callback_api");
class RabitMqServer {
    sender = (data, queue) => {
      amqp.connect("amqp://localhost", (error, connection) => {
        if (error) {
          throw error;
        } else {
          connection.createChannel((error, channel) => {
            if (error) {
              throw error;
            } else {
              const tt = JSON.stringify(data);
              channel.assertQueue(queue);
              channel.sendToQueue(queue, Buffer.from(tt));
            }
          });
        }
      });
    };

    receiver = (queue) => {
      return new Promise((resolve, reject) => {
        amqp.connect("amqp://localhost", (error, connection) => {
          if (error) {
            throw error;
          } else {
            connection.createChannel((error, channel) => {
              if (error) {
                reject(error);
              } else {
                channel.assertQueue(queue);
                channel.consume(queue, (msg) => {
                  resolve(msg.content.toString());
                });
              }
            });
          }
        });
      });
    };
}
module.exports = new RabitMqServer();
