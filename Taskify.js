/**
 * Anh Nguyen, Palung Chandra, Jason Villanueva
 * CS 321
 * Main class for Taskify that will use functions from other classes.
 */

 /**
  * Imports commmands from Commands.js.
  */
//import { helpCommand } from './Commands.js'

/**
 * Requires the Discord.js module.
 */
const Discord = require('discord.js')
<<<<<<< HEAD
=======
const fs = require('fs')
>>>>>>> 69370c46ccf57d37c9a5e02100a683b6071a6674

/**
 * Creates new Discord client.
 */
const client = new Discord.Client()
<<<<<<< HEAD
=======
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'))

/**
 * Set above commands to Collection.
 */
for (const file of commandFiles) {
	const command = require(`./Commands/${file}`)
	client.commands.set(command.name, command)
}
>>>>>>> 69370c46ccf57d37c9a5e02100a683b6071a6674

/**
 * Creates a config.json file that contains token and values.
 */
const {prefix, token} = require('./config.json')

/**
 * Behavior when bot connects.
 */
client.once('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("CS 321", {type: "WATCHING"});

    /**
     * List of servers bot is connected to.
     */
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)

        /**
         * List of channels bot has access to.
         */
        guild.channels.cache.forEach((channel) => {
            console.log(` - ${channel.name} (${channel.type}): ${channel.id}`)
        })
        // General Text Channel ID: 767998455980752910
    })

    /**
     * String format of day. 
     * DD/MM/YY @ HH:MM:SS
     */
    var currentDate = new Date()
    var dateTime = ("Last Sync: " + (currentDate.getMonth()+1)  + "/"
                + currentDate.getDate() + "/"
                + currentDate.getFullYear() + " @ "  
                + currentDate.getHours() + ":"  
                + currentDate.getMinutes() + ":" 
                + currentDate.getSeconds())
    
    /**
     * Sends message to text channel when bot logs on.
     */
<<<<<<< HEAD
    let generalChannel = client.channels.cache.get("767998455980752910")
    generalChannel.send("Taskify is online. " + dateTime)
=======
    //let generalChannel = client.channels.cache.get("767998455980752910")
    //generalChannel.send("Taskify is online. " + dateTime)
    receivedMessage.channel.send("Taskify is online. " + dateTime)
>>>>>>> 69370c46ccf57d37c9a5e02100a683b6071a6674
})

/**
 * Behavior when bot receives and sends a message.
 */
client.on('message', (receivedMessage) => {
<<<<<<< HEAD
=======
    console.log(receivedMessage.content)
>>>>>>> 69370c46ccf57d37c9a5e02100a683b6071a6674
    /**
     * Checks if a message is from the bot.
     */
    if (receivedMessage.author == client.user) {
        return
    }

    /**
     * Reads command with prefix.
     */
<<<<<<< HEAD
=======
    
>>>>>>> 69370c46ccf57d37c9a5e02100a683b6071a6674
    if (receivedMessage.content.startsWith(prefix)) {
        processCommand(receivedMessage)
    }
})

/**
 * Processes command from text.
 */
<<<<<<< HEAD
function processCommand(receivedMessage) {
=======

function processCommand(receivedMessage) {
    /*
>>>>>>> 69370c46ccf57d37c9a5e02100a683b6071a6674
    let fullCommand = receivedMessage.content.substr(2)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

<<<<<<< HEAD
    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "server") {
        serverCommand(receivedMessage)
    } else if (primaryCommand == "user") {
        userCommand(receivedMessage)
    }
}
=======

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "server") {
        client.commands.get('server').execute(receivedMessage)
    } else if (primaryCommand == "user") {
        client.commands.get('user').execute(receivedMessage)
    } else if (primaryCommand == "remind") {
        client.commands.get('remind').execute(receivedMessage)
        */
    const args = receivedMessage.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.alises.includes(commandName))

    if (!command) return

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside private messages!');
    }

    if (command.args && !args.length) {
        let reply = "You need arguments!"
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``

        }
        return receivedMessage.channel.send(reply)
    }

    try {
        command.execute(receivedMessage)
    } catch (error) {
        console.error(error)
        receivedMessage.reply('There\'s an error with that command.')
    }
} 
>>>>>>> 69370c46ccf57d37c9a5e02100a683b6071a6674

/**
 * Help command lists available commands.
 */

<<<<<<< HEAD
=======
/*
>>>>>>> 69370c46ccf57d37c9a5e02100a683b6071a6674
 function helpCommand(arguments, receivedMessage) {
    if (arguments.length == 0) {
        receivedMessage.channel.send("Try `t+help [category]`")
    } else if (arguments.length == 1) {
        receivedMessage.channel.send("You need help with `" + arguments + "`")
    } else {
        receivedMessage.channel.send("Too many arguments! Only one category!")
    }
}

<<<<<<< HEAD
/**
 * Prints out server info.
 */
=======
>>>>>>> 69370c46ccf57d37c9a5e02100a683b6071a6674
function serverCommand(receivedMessage) {
    receivedMessage.channel.send(`Server name: ${receivedMessage.guild.name}\nTotal members: ${receivedMessage.guild.memberCount}`)
}

function userCommand(receivedMessage) {
<<<<<<< HEAD
    receivedMessage.channel.send(`Your username: ${receivedMessage.author.username}\nYour ID: ${receivedMessage.author.id}`);

}

=======
    receivedMessage.channel.send(`Your username: ${receivedMessage.author.username}\nYour ID: ${receivedMessage.author.id}`)
}

function remindCommand(receivedMessage) {
    if (!receivedMessage.mentions.users.size) {
        return receivedMessage.reply(`You must tag a user to remind them!`)
    }
    const tagged = receivedMessage.mentions.users.first();
    receivedMessage.channel.send(`Reminder set for ${tagged.username}!`)
} */

>>>>>>> 69370c46ccf57d37c9a5e02100a683b6071a6674
/**
 * Log-in with the bot using its Token credential.
 */
client.login(token);

