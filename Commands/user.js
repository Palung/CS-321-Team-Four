module.exports = {
    name: 'user',
    aliases: ['userinfo'],
    description: 'Prints out user info',
    execute(receivedMessage) {
        receivedMessage.channel.send(`Server name: ${receivedMessage.guild.name}\nTotal members: ${receivedMessage.guild.memberCount}`);
    }
}