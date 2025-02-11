const { kafka } = require("./client");

async function init() {
  const consumer = kafka.consumer({ groupId: "group-1" });
  consumer.connect();

  await consumer.subscribe({
    topics: ["rider-updates"],
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(`[${topic}]: PART:${partition}: ${message.value.toString()}`);
    },
  });
}

init();
