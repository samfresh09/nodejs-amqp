const amqp = require('amqplib');

const url = 'amqp://localhost';

const exchange = 'user.notification.handle';


exports.createNewUserTopic =  async (user,routingKey) => {
    try {
        const connection = await amqp.connect(url);
        const channel = await connection.createChannel();

        //declaration de exchange
        await channel.assertExchange(exchange,'topic');

        //publication du message
        await channel.publish(exchange,routingKey,Buffer.from(JSON.stringify(user)));

        console.log(`Un message a ete publier dans exchange ${exchange} : ${user}`);
        
        await channel.close();
        await connection.close();


    } catch (error) {
        console.error(error);
        
    }
}