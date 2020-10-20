/**
 * Anh Nguyen, Palung Chandra, Jason Villanueva
 * CS 321
 * Main class for Taskify that will use functions from other classes.
 */
const Discord = require('discord.js')
const client = new Discord.Client()

/**
 * Behavior when bot connects.
 */
client.on('ready', () => {
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

    let generalChannel = client.channels.cache.get("767998455980752910")
    generalChannel.send("Taskify is online.")
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
    if (receivedMessage.content.startsWith("t!")) {
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
    }
}

/**
 * Help command lists available commands.
 */
function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send("You need help with `" + arguments + "`")
    } else {
        receivedMessage.channel.send("Try `t!help [category]`")
    }
}

/**
 * Log-in with the bot using its Token credential.
 */
client.login("NzY3OTk5MTcxNTgzMjc5MTM0.X46E9w.BlV49zUiGryaCbA5x-AcCXaQjqk");

