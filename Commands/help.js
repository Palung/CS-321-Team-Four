const { prefix } = require('../config.json')

//Palung's add
const Discord = require('discord.js')
const client = new Discord.Client()
//Palung End

// module.exports = {
//     name: 'help',
//     aliases: ['h', 'commands'],
//     description: 'Sets a Reminder for mentioned user. If none mentioned, set Reminder for author.',
    // execute(receivedMessage, args) {
    //     const data = [];
    //     const { commands } = message.client;
        
    //     if (!args.length) {
    //         data.push('Here\'s a list of all my commands:');
    //         data.push(commands.map(command => command.name).join(', '));
    //         data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
            
    //         return receivedMessage.author.send(data, { split: true })
    //             .then(() => {
    //                 if (receivedMessage.channel.type === 'dm') return;
    //                 receivedMessage.reply('I\'ve sent you a DM with all my commands!');
    //             })
    //             .catch(error => {
    //                 console.error(`Could not send help DM to ${receivedMessage.author.tag}.\n`, error);
    //                 message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
    //             })
    //     }
    //     const name = args[0].toLowerCase();
    //     const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    //     if (!command) {
    //         return message.reply('that\'s not a valid command!');
    //     }

    //     data.push(`**Name:** ${command.name}`);

    //     if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
    //     if (command.description) data.push(`**Description:** ${command.description}`);
    //     if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

    //     receivedMessage.channel.send(data, { split: true }); 
    // }

    //Palung's add
    client.on('ready', () => {
            console.log('The cleint is ready!')

            command(client, 'help', (message) => {
                message.channel.send('
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
            })
            console.log('Prefix:', prefix)
        })
    client.login(config.token)
    //Palung End
// }