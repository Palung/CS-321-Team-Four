const { prefix } = require('../config.json')

module.exports = {
    name: 'help',
    aliases: ['h', 'commands'],
    description: 'Lists all commands. If specific command, lists its functionality.',
    execute(receivedMessage, args) {
        // ...
    }
}