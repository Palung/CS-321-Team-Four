module.exports = {
    name: 'user',
    aliases: ['userinfo'],
    description: 'Prints out server info',
    execute(receivedMessage) {
        receivedMessage.channel.send(receivedMessage.channel.send(`Your username: ${message.author.username}\nYour ID: ${receivedMessage.author.id}`))
    }
}