/**
 * Anh Nguyen, Palung Chandra, Jason Villanueva
 * CS 321
 * Main class for Taskify that will use functions from other classes.
 */

/**
 * Requires the Discord.js module.
 */
const Discord = require('discord.js')
const fs = require('fs')

/**
 * Creates new Discord client.
 */
const client = new Discord.Client()
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'))

/**
 * Set above commands to Collection.
 */
for (const file of commandFiles) {
	const command = require(`./Commands/${file}`)
	client.commands.set(command.name, command)
}

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
    //let generalChannel = client.channels.cache.get("767998455980752910")
    //generalChannel.send("Taskify is online. " + dateTime)
    receivedMessage.channel.send("Taskify is online. " + dateTime)
})

/**
 * Behavior when bot receives and sends a message.
 */
client.on('message', (receivedMessage) => {
    console.log(receivedMessage.content)
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

/**
 * Log-in with the bot using its Token credential.
 */
client.login(token);

