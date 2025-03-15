const amqp = require("amqplib");

const url =  "amqp://localhost";

exports.getNewUser = async (queueName) => {
    //connection de application au serveur
    const connection = await amqp.connect(url);
    const channel =  await connection.createChannel();

    //declare th queue to use
    await channel.assertQueue(queueName);

    //bind the queue on exchange

    //receive messages from the queue
    channel.consume(queueName, (mgs) => {
        console.log('NOUVEAU MESSAGE REUSSIT DANS LA QUEUE...', mgs.content.toString());

        channel.ack(mgs);
    });

    console.log("En attente de nouveau message...");

}