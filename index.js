const disc = require('discord.js')
const client = new disc.Client({intents: ['GUILD_MESSAGES', 'GUILDS']})

const config = require('./config.json')

client.on('messageCreate', msg => {
	if (msg.crosspostable && msg.author.bot) {
		msg.crosspost()
	}
})

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
	client.user.setPresence({
		activities: [
			{
				name: 'your messages',
				type: 'WATCHING'
			}
		],
		status: 'idle',
		afk: true
	})
})

client.login(config.bot_token)