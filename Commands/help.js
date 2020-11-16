const { prefix } = require('../config.json')

module.exports = {
     name: 'help',
     aliases: ['h', 'commands'],
     description: 'Sets a Reminder for mentioned user. If none mentioned, set Reminder for author.',
     execute(receivedMessage, args) {
        receivedMessage.channel.send('**Supported Commands:**\n' +
        '**t+help** - Displays help menu\n' +
        '**t+commands** - Displays help menu\n' +
        '**t+add** - Adds a tasks. Bot will loop to ask users for details.\n' +
        '**t+remove** - Removes a task\n' +
        '**t+list** - Returns and prints all tasks\n' +
        '**t+ <int priorityLevel>** - Returns all tasks of the same priorityLevel \n' +
        '**t+due <mm/dd/yyyy>** - Returns all tasks of a given date\n' +
        '**t+dueRange <mm/dd/yyyy> <mm/dd/yyyy>** - Returns all tasks of a given date range. Date1 Date2\n' +
        '**t+user <userName>** - Returns all tasks assigned to a specific user\n' +
        '**t+remind <reminder> <mm/dd/yyyy>** - Sets and Returns Reminders\n' +
        '**t+admin** - Displays settings for Taskify\n')
     }

 }
