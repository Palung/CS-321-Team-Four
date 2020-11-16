const { prefix } = require('../config.json')


module.exports = {
     name: 'help',
     aliases: ['h', 'commands'],
     description: 'Sets a Reminder for mentioned user. If none mentioned, set Reminder for author.',
     execute(receivedMessage, args) {
        receivedMessage.channel.send('
        These are my supported commands:
        **t+help** - Displays help menu
        **t+commands** - Displays help menu
        **t+add** - Adds a tasks to the priority queue. Bot will loop to ask users for details.
        **t+remove** - 
        **t+list** - Returns / prints all tasks 
        **t+ <int priorityLevel>** - Returns all tasks of the same priorityLevel 
        **t+due <mm/dd/yyyy>** - Returns all tasks of a given date
        **t+dueRange <mm/dd/yyyy> <mm/dd/yyyy>** - Returns all tasks of a given date range. Date1 Date2
        **t+user <userName>** - Returns all tasks assigned to a specific user
        **t+remind <reminder> <mm/dd/yyyy>** - Sets and Returns Reminders
        **t+admin** - Displays settings for Taskify
        ')
     }

 }
