const fs = require('fs')
const path = '.'
fs.readdir(path, (err, files) => {
    files.forEach(file => {
        console.log(file)
    })
})

const Reminder = require('../Reminder')
console.log(`User: ${Reminder.addTask}`);

module.exports = {
    name: 'remind',
    aliases: ['r', 'reminder', 'alert'],
    description: 'Sets a Reminder for mentioned user. If none mentioned, set Reminder for author.',
    args: true,
    usage: '<taskName> <dueDate> <priorityLevel> <description> <roles>',
    execute(receivedMessage, args) {
        // (name, dueDate, priority, description, roles)
        let name = 'Deliverable 4'
        let dueDate = '11/16/2020'
        let priority = 3
        let description = 'Test & Demo'
        let roles = 'CS 321'
        if (args[0]) {
            name = args[0]    
        }
        if (args[1]) {
            dueDate = args[1]
        }
        if (args[2]) {
            priority = args[2]    
        }
        if (args[3]) {
            description = args[3]    
        }
        if (args[4]) {
            roles = args[4]    
        }
        //Reminder.addTask(name, dueDate, priority, description, roles)
        receivedMessage.channel.send(`Reminder set for: ${receivedMessage.author}\n` +
            `Name: ${name}\n` + 
            `Due Date: ${dueDate}\n` + 
            `Priority: ${priority}\n` + 
            `Description: ${description}\n` + 
            `Role(s): ${roles}\n`)
        /*receivedMessage.channel.send(`Reminder set for: ${receivedMessage.author}\n` +
            `Name: ${name}\n`)*/
    }
}