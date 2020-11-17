module.exports = {
    name: 'server',
    aliases: ['serverinfo'],
    description: 'Prints out server info',
    execute(receivedMessage) {
        receivedMessage.channel.send(`Server name: ${receivedMessage.guild.name}\nTotal members: ${receivedMessage.guild.memberCount}`)
    }
}