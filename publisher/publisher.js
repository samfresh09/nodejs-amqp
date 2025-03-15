const amqp = require('amqplib');

const url = 'amqp://localhost';

const exchange = 'node.new.user';

exports.createNewUserFanout =  async (user) => {
    try {
        const connection = await amqp.connect(url);
        const channel = await connection.createChannel();

        //declaration de exchange
        await channel.assertExchange(exchange,'fanout');

        //publication du message
        await channel.publish(exchange,'',Buffer.from(JSON.stringify(user)));

        console.log(`Un message a ete publier dans exchange ${exchange} : ${user}`);
        
        await channel.close();
        await connection.close();


    } catch (error) {
        console.error(error);
        
    }
}