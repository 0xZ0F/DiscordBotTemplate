//Discord bot template by, Kevin Goforth. You can remove this line if you want, this code is all yours :D

//API Setup and bot initialization:
console.log("Bot Started...");
const Discord = require("discord.js");
const config = require("./config.json");

// If you want to change the name of you bot you use in your code, replace the word after const. 
// The default name is "bot" so when you are writing code you will write something like: bot.sendmessage.
// ATTENTION: If you change the bots name, you will need to change a lot of the rest of the code.
const bot = new Discord.Client();

bot.login(config.token);
console.log("Bot Initialized");

// ---From this point on, you can change anything without too much worry. Note: There are notes at the bottom that may help you.

// This is what the user will need to type before the command. Example: "!help".
const prefix = "!";

// When the bot starts, DO:
bot.on('ready', () => {   
    console.log("Bot connected -- Ready for use!");
    // Set the name, game, and status of the bot here. Note: You have to let the bot go offline before the name will change.
    bot.user.setUsername("My Bot Username"); //This can cause a small error saying you can't change your avatar too fast. If this happens, your bot need to go offline for the name change to take effect.
    bot.user.setGame("Discord bot template by, Kevin Goforth.");
    bot.user.setStatus("online");
    // Feel free to modify or remove anything in here!
});

// When a user sends a message do something. This is where you will deal with commands.
// COMMAND HANDLING:
bot.on('message', message =>{
    // Prevents the bot from responding to itself.
    if(message.author.equals(bot.user)) return;
    // Makes command handling easier. You will use msg when checking for the command. msg converts the message that was sent into all lowercase. Be sure that in the code you are checking for all lower case. Example: DON'T do this "if(msg == prefix + "CapitalLetters")"
    var msg = message.content.toLocaleLowerCase();
    // When the user types !help
    if(msg == prefix + "help"){
        message.reply("Help command recived!");
    }
    // When the user types !info
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
