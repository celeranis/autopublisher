const { Client } = require('discord.js')

if (!process.env.DISCORD_TOKEN) {
	require('dotenv').config()
}

const client = new Client({
	intents: ['GUILD_MESSAGES', 'GUILDS'], 
	partials: ['MESSAGE', 'GUILD_MEMBER', 'USER'],
	presence: {
		status: 'idle'
	}
})

client.on('messageCreate', msg => {
	if (msg.crosspostable && msg.author.bot) {
		msg.crosspost().catch(err => {
			console.warn(`Failed to crosspost: ${err.message}`)
		})
	}
})

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.login() // uses DISCORD_TOKEN environment variable by default