const https = require('https');
const Discord = require('discord.js');
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'

module.exports = {
  name: "meme",
  aliases: [],
  execute: async(client, message, args, data, db) => {

        https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                if (index.post_hint !== 'image') {

                    var text = index.selftext
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

<<<<<<< HEAD
                    message.channel.send({embeds: [textembed]})
=======
                    message.channel.send(textembed)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
                }

                var image = index.preview.images[0].source.url.replace('&amp;', '&')
                var title = index.title
                var link = 'https://reddit.com' + index.permalink
                var subRedditName = index.subreddit_name_prefixed

                if (index.post_hint !== 'image') {
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

<<<<<<< HEAD
                    message.channel.send({embeds: [textembed]})
=======
                    message.channel.send(textembed)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
                }
               
                const imageembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor(9384170)
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`)
<<<<<<< HEAD
                message.channel.send({embeds: [imageembed]})
=======
                message.channel.send(imageembed)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
            }).on('error', function (e) {
                console.log('Got an error: ', e)
            })
        })
    }
}
module.exports.help = {
    name: "meme",
    description: "Sends a random meme",
    usage: "meme",
    type: "Fun" 
}