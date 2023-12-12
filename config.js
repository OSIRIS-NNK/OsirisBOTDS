
module.exports = {
    "registercommands" : True, //Write True If You Are Launching The Bot First Time
     "token": "pjMyRzhe2nhNfqaPnkrXdrsZhEZLqXqu", //Your Super Secret Bot Token
    "imageapi": "", //Your Amethyste Api You can get it from https://api.amethyste.moe/
    "ownerID": ["489379167373230081"], //Your Discord User ID
"prefix": "!", //Your Bot's Prefix
"chat": {
        "url": "http://api.brainshop.ai/get?bid=179477&key=DZPD70pVYSaR7AWh&uid=[uid]&msg=[msg]",
        "bid": "179477",
        "key": "DZPD70pVYSaR7AWh",
        "uid": "devOsiris"
    }, // You can get This Things from https://brainshop.ai
"api": "AIzaSyCoMYDYMaNon7kfdQfguU9z-eBL4KdoZqI", // Your Youtube Api
"youtubeAPI": "AIzaSyCoMYDYMaNon7kfdQfguU9z-eBL4KdoZqI", // Your Youtube Api
mainprefix: "!",  // Again Your Prefix
"owner": "Osiris Devilish", // Owner Name

  basiclang: "ru", //The basic language of the bot, "fr" for French and "en" for English
    embeds: {
        color: "BLUE", //Embed color (in English)
        footers: "GIVEAWAY :tada: :tada:" //Embed footer
    },

   

    events: {
        addcolor: "GREEN", //The color of the event add (in English)
        remcolor: "RED" //The color of the event remove (in English)
    },

    reaction: "🎉", //Reaction to the giveaways if you in the console you see 'unknown emoji' that's what this emoji is not recognized by Discord

    grole: "Giveaway Manager", //If the member doesn't have permission to handle messages he can still use the giveaways commands if he has the role configured right here

    auth: {
        support: "https://discord.gg/Br5PtjdM", //The link of your Discord server
        dperms: "8" //The permissions that the bot asks on we want to add it on a Discord server (8 = moderator)
    }, 
} 
