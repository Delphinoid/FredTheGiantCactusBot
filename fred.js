const Discord = require("discord.js");
const client = new Discord.Client();

client.login("token");

// Joined the server
client.once("ready", () => {
	console.log("Bot up and running. Currently connected as " + client.user.username + ".");
	client.user.setGame("!ftgc_help");
});

// New member joined
client.on("guildMemberAdd", (member) => {
member.guild.channels.get(member.guild.id).sendMessage("Hi " + member.toString() + ", I'm Fred the Giant Cactus. " +
	                                                   "Welcome to the Platform Racing Discord server!\n\n" +
	                                                   "Let me notify the staff so they can verify you. @Owner @Admins @Moderators\n" +
	                                                   "In the mean time, please consider looking at the #rules.\n\n" +
	                                                   "I'll be seeing you around.  :fred:");
});

// Help command posted
client.on("message", (message) => {
	if(message.content == "!ftgc_help"){
		message.member.sendMessage("Sorry, until I add more functionality to this bot this message won't contain anything useful.");
	}
});