const disc = require('discord.js')
const client = new disc.Client({
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