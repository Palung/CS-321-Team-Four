module.exports = {
    name: 'user',
    aliases: ['userinfo'],
    description: 'Prints out user info',
    execute(receivedMessage) {
        receivedMessage.channel.send(receivedMessage.channel.send(`Your username: ${message.author.username}\nYour ID: ${receivedMessage.author.id}`))
    }
}