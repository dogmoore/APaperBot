module.exports = {
    name: 'server',
    discription: 'Placeholder2',
    execute(message) {
        
        message.channel.send(`This horrible server's name is: ${message.guild.name}\nTotal whor- I mean members: ${message.guild.memberCount}`);
        console.log(`Server command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n\n`);
    }
}
