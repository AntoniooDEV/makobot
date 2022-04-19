module.exports = {
  Admins: ["932013593342382141", "932013593342382141"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 300, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/GesMYyQzVT", //Support Server Link
  Token: process.env.Token || "your token", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "client id", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "secret id", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 80, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "your secret password", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/AntoniooDEV/makobot/main/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "BLUE", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "your website", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  //If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.
  
  Presence: {
    status: "dnd", // You can show online, idle, and dnd
    name: ">help 〡 Mako-bot.cf", // The message shown
    type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

   // Leave as it is
  // If it doesnt work set new lavalink
  Lavalink: {
    id: "Main", //- Used for indentifier. You can set this to whatever you want.
    host: "lavalink.oops.wtf", //- The host name or IP of the lavalink server.
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "www.freelavalink.ga", //- The password of the lavalink server.
    secure: true, // Set this to true if the lavalink uses SSL. if not set it to false.
  },

  //Leave this as it is
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "52d8870052f346719346b35001656ec4", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "c98471b7b90e43539865d87c5db18007", //Spotify Client Secret
  },
};
