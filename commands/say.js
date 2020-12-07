module.exports = {
    name: 'say',
    discription: 'placeholder8',
    execute(message, args) {
        
        if (!args.length) {
            return;
        }
        else {
            let sendMessage = message.content.substring(4);

            console.log(`Say command used in server: ${message.guild.name}\nIssued by: ${message.author.tag}\n\n`);
            message.channel.send(`${sendMessage}`);
            message.delete();
        }
    }
}