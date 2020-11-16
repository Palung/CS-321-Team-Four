module.exports = {
    name: 'remind',
    aliases: ['r', 'reminder', 'alert'],
    description: 'Sets a Reminder for mentioned user. If none mentioned, set Reminder for author.',
    execute(receivedMessage) {
        const tag = receivedMessage.mentions.users.first()
        if (!receivedMessage.mentions.user.size) {
            return receivedMessage.reply('reminder set for you')
        }
        receivedMessage.channel.send(`Reminder set for: ${tag.username}`)
    }
}