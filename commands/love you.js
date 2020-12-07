module.exports = {
    name: 'love you',
    discription: 'Placeholder5',
    execute(message) {
        
        message.reply('I love you too!');
        console.log(`Love You command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n\n`);
    }
}