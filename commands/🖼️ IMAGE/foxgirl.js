const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "foxgirl",
  aliases: [],
  execute: async(client, message, args, data, db) => {
     if (!message.channel.nsfw) {
		message.react('💢');
		return message.channel.send({embed: {
                color: 16734039,
                description: "You can use this command in an NSFW Channel!"
            }})
	}
    superagent.get('https://nekos.life/api/v2/img/fox_girl')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle(":smirk: Fox girl")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`Tags: fox girl`)
      .setURL(response.body.url);
<<<<<<< HEAD
  message.channel.send({embeds: [embed]});
=======
  message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));
	
}
}
module.exports.help = {
    name: "foxgirl",
    description: "Display a random fox girl image/gif",
    usage: "foxgirl",
    type: "NSFW" 
}