import config from '../config/default.config'
import amqp from 'amqplib';

//RabbitMQ connection string
const messageQueueConnection: string = config.CLOUDAMQP_URL;

async function messageService() {
    console.time('messageService');
    console.log('Setting up RabbitMQ Exchange Queues...');
    //Connect to RabbitMQ instance
    let connection = await amqp.connect(messageQueueConnection);

    //Create a channel
    let channel = await connection.createChannel();

    //Create exchange
    await channel.assertExchange('processing', 'direct', { durable: true });

    //Create queues
    await channel.assertQueue('processing.request', { durable: true });
    await channel.assertQueue('processing.response', { durable: true });

    //Bind queues
    await channel.bindQueue('processing.request', 'processing', 'request');
    await channel.bindQueue('processing.response', 'processing', 'response');

    console.info('Setup message service done...');
    console.timeEnd('messageService');
    process.exit;
  }

  export default messageService;