/**
 * @typedef {import('discord.js').Client} Client
 * @typedef {import('discord.js').Message} Message
 */

/**
 * Acts on the given message.
 * @param {Message} msg 
 * @returns {Promise<Error | Message> | void}
 */
export function handleMessage(msg) {
	if (msg.crosspostable && msg.author.bot) {
		return msg.crosspost().catch(err => {
			console.warn('Failed to crosspost message: %O', err)
			return err
		})
	}
}

/**
 * Initializes this module.
 * @param {Client} client 
 */
export function init(client) {
	client.on('messageCreate', msg => void handleMessage(msg))
}

export default init;