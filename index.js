const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();


client.on('ready', function () {
	client.user.setActivity('HelloKitty Online').catch(console.error)
});

client.on('guildMemberAdd', function(member){
	member.guild.channels.cache.find(channel => channel.id === config.CHANNEL_ID).send(':smiley_cat:  Bienvenue sur le salon Hello Kitty, ' + member.displayName)
	.catch(console.error)
});


setInterval(()=> {
	var yourchannel = client.channels.cache.get(config.CHANNEL_ID);
	yourchannel.send('@everyone' + ' Trop Mignon !!!  :3');
	}, 120000);

client.on('message', function(message) {
	if (message.author.bot) return;

	if(message.content === '!ping') {
		message.channel.send('pong')
	}

	if ((message.content.toLowerCase().indexOf('chaton') !== -1)) {
		message.channel.send(':heart_eyes_cat:   I <3 Cats !!!  :3')
	}
	
});

client.login(config.BOT_TOKEN);