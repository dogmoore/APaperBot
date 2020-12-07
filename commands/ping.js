module.exports = {
    name: 'ping',
    discription: 'ping!',
    execute(message, args) {
        message.channel.send('Pong.');
    }
}