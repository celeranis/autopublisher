# Autopublisher

Automatically publishes new messages sent into announcement channels by bots and webhooks.

## Usage
First, add the bot [here](https://discord.com/api/oauth2/authorize?client_id=896487543732834395&permissions=11264&scope=bot%20applications.commands).

You can enable/disable the bot on a per-channel basis using permission overrides.

The bot will publish all bot (and webhook) messages in any announcement channel where it has the following permissions:
- Read Messages
- Manage Messages

Keep in mind that announcement channels can only publish 10 messages per hour.

## Self-hosting
> This guide is intended for **technical users** who want to run the bot on their own server. For a general usage guide, scroll back up.

### Initial setup
1. Install the latest version of [Node](https://nodejs.org/en/).

	> If you already have node installed, run `node --version` and make sure you're using version **16.9.0** or later, as it's required by discord.js.

2. Clone the repository with [git](https://git-scm.com/) and enter the resulting folder:
	```sh
	git clone https://github.com/celeranis/autopublisher
	cd autopublisher
	```

3. Install required dependencies.
	```sh
	pnpm install --prod
	```

	> If you don't have pnpm installed, you have three options.
	> - **Option 1:** Run `corepack enable` to enable [corepack](https://github.com/nodejs/corepack),
	>	a handy tool for managing package managers, included with modern versions of Node.
	>	pnpm will then be installed the next time you try to use it.
	> - **Option 2:** [Install pnpm manually.](https://pnpm.io/installation)
	> - **Option 3:** Use the equivalent install command for your preferred package manager.

4. Set the `DISCORD_TOKEN` environment variable. 
	
	In most cases, you'll want to do this by creating a new file named `.env`
	like the following:
	
	```toml
	DISCORD_TOKEN = "YOUR_TOKEN_HERE"
	```

### Starting the bot

#### Directly with node

```sh
pnpm start
# or
node src/standalone.js
```
> If you're using a different package manager,
> you can still use the first method by switching
> the base command while keeping the same arguments.
	
#### Using [pm2](https://www.npmjs.com/package/pm2)
	
```sh
pnpm add -g pm2
pm2 start ecosystem.config.cjs
```

#### As a module
```js
import autopublisher from 'autopublisher/module';

autopublisher.init(client)
```
> ℹ️ Keep in mind that this behavior is not *fully* supported
> and may be removed in v3.0.0

### Updating the bot

If you downloaded the bot using git, it can be easily updated using:
```sh
git pull
```