// PM2 Ecosystem file
// https://pm2.keymetrics.io/docs/usage/application-declaration/

module.exports = {
	apps: [{
		name: 'autopublisher',
		script: './src/standalone.js',
		cwd: './',
		max_memory_restart: '150M', // automatically restart the bot if memory usage exceeds 150 MB
		post_update: ['pnpm install'], // commands to run after an update
		
		restart_delay: 5000, // time (in ms) to wait before restarting the app
		min_uptime: 20000, // minimum uptime (in seconds) before the app is considered 'started'
		wait_ready: true, // wait for process.send('ready') instead of a listening event
		max_restarts: 10, // stops restarting the bot if it crashes 10+ times *within a short timespan*
	}]
}