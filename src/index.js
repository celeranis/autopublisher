import { Client } from 'discord.js';
import { clientOptions } from './const.js';
import * as autopublisher from './module.js';

if (!process.env.DISCORD_TOKEN) {
	await import('dotenv/config')
}

const client = new Client(clientOptions)

client.on('ready', client => {
	console.log('Logged in as %s', client.user.tag)
	autopublisher.init(client)
})

client.login() // uses DISCORD_TOKEN environment variable by default

export default client;