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

/**
 * Creates new Discord client.
 */
const client = new Discord.Client()

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
    let generalChannel = client.channels.cache.get("767998455980752910")
    generalChannel.send("Taskify is online. " + dateTime)
})

/**
 * Behavior when bot receives and sends a message.
 */
client.on('message', (receivedMessage) => {
    /**
     * Checks if a message is from the bot.
     */
    if (receivedMessage.author == client.user) {
        return
    }

    /**
     * Reads command with prefix.
     */
    if (receivedMessage.content.startsWith(prefix)) {
        processCommand(receivedMessage)
    }
})

/**
 * Processes command from text.
 */
function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(2)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "server") {
        serverCommand(receivedMessage)
    } else if (primaryCommand == "user") {
        userCommand(receivedMessage)
    }
}

/**
 * Help command lists available commands.
 */

 function helpCommand(arguments, receivedMessage) {
    if (arguments.length == 0) {
        receivedMessage.channel.send("Try `t+help [category]`")
    } else if (arguments.length == 1) {
        receivedMessage.channel.send("You need help with `" + arguments + "`")
    } else {
        receivedMessage.channel.send("Too many arguments! Only one category!")
    }
}

/**
 * Prints out server info.
 */
function serverCommand(receivedMessage) {
    receivedMessage.channel.send(`Server name: ${receivedMessage.guild.name}\nTotal members: ${receivedMessage.guild.memberCount}`)
}

function userCommand(receivedMessage) {
    receivedMessage.channel.send(`Your username: ${receivedMessage.author.username}\nYour ID: ${receivedMessage.author.id}`);

}

/**
 * Log-in with the bot using its Token credential.
 */
client.login(token);

