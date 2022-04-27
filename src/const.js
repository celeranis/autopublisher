import { Options } from 'discord.js';

/**
 * @typedef {import('discord.js').ClientOptions} ClientOptions
 */

/** @type {ClientOptions} */
export const clientOptions = {
	intents: ['GUILD_MESSAGES', 'GUILDS'],
	partials: ['MESSAGE', 'GUILD_MEMBER', 'USER'],
	presence: {
		status: 'idle'
	},
	// aggressively disable unnecessary caches
	makeCache: Options.cacheWithLimits({
		BaseGuildEmojiManager: 0,
		GuildBanManager: 0,
		GuildEmojiManager: 0,
		GuildInviteManager: 0,
		GuildMemberManager: 0,
		GuildScheduledEventManager: 0,
		GuildStickerManager: 0,
		MessageManager: 5,
		PresenceManager: 0,
		ReactionManager: 0,
		ReactionUserManager: 0,
		StageInstanceManager: 0,
		ThreadManager: 0,
		ThreadMemberManager: 0,
		UserManager: 0,
		VoiceStateManager: 0
	}),
	// remove old messages from the cache
	sweepers: {
		messages: {
			filter: () => msg => !msg.crosspostable,
			interval: 600
		}
	}
}