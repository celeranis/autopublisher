const disc = require('discord.js')
const client = new disc.Client({intents: ['GUILD_MESSAGES', 'GUILDS']})

const config = require('./config.json')

client.on('messageCreate', msg => {
	console.log(msg.content, msg.crosspostable, msg.author.bot)
	if (msg.crosspostable && msg.author.bot) {
		msg.crosspost()
	}
})

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.login(config.bot_token)