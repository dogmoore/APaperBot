module.exports = {
    name: 'shutdown',
    discription: 'Placeholder3',
    execute(message) {
        
        console.log(`Shutdown command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n\n`);
        console.log('shutting down...');
        message.reply('You fucking killed me!');
        setTimeout(() => { process.exit(); }, 2000);
    }
}