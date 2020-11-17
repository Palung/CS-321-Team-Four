module.exports = {
    name: 'user',
    aliases: ['userinfo'],
    description: 'Prints out user info',
    execute(receivedMessage) {
        receivedMessage.channel.send(`Username: ${receivedMessage.author.username}\nYour ID: ${receivedMessage.author.id}`)
    }
}