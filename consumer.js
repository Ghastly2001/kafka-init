const { kafka } = require("./client");

async function init() {
  const consumer = kafka.consumer({ groupId: "group-1" });
  consumer.connect();
}
