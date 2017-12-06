/// THIS IS A TEMPLATE WITH LESS COMMENTS FOR PEOPLE THAT UNDERSTAND WHAT THEY ARE DOING.
/// YOU CAN JUST COPY AND PASTE THIS CODE INTO THE ORIGINAL BOT.JS FILE WITH NO ISSUES unless you changed things in bot.js.

//Discord bot template by, Kevin Goforth. You can remove this line if you want, this code is all yours :D

//API Setup and bot initialization:
console.log("Bot Started...");
const Discord = require("discord.js");
const config = require("./config.json");
// Change the bots name here.
const bot = new Discord.Client();
bot.login(config.token);
console.log("Bot Initialized");
//Variables:
const prefix = "!";

// When the bot starts, DO:
bot.on('ready', () => {   
    console.log("Bot connected -- Ready for use!");
    bot.user.setUsername("My Bot Username"); //This can cause a small error saying you can't change your avatar too fast. If this happens, your bot need to go offline for the name change to take effect.
    bot.user.setGame("Discord bot template by, Kevin Goforth.");
    bot.user.setStatus("online");
});

// COMMAND HANDLING:
bot.on('message', message =>{
    // Prevents the bot from responding to itself.
    if(message.author.equals(bot.user)) return;
    var msg = message.content.toLocaleLowerCase();
        
    if(msg == prefix + "help"){
        message.reply("Help command recived!");
    }
    else if(msg == prefix + "info"){
        message.reply("Here is some info!");
    }
});




/* ---NOTES---
message.reply("") - Will reply like this: @NAME, <message>
message.author.send("") - Will send a private message to the person who sent the message/command.

Use LET when making loops. VAR makes variables that can only be used once.

When using .toLowerCase() be sure the text you are comparing it to is lower case or you will be comparing a message with lowercase letters to a message with capital letters.
In Short: When checking if the user entered a command, make sure the command you are checking it with is lower case.
*/
