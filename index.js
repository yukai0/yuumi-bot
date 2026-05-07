const Discord = require('discord.js');

require('dotenv').config();

const { Client, Intents } = require('discord.js');

const { MessageEmbed } = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

const PREFIX = '!'

//const cheerio = require('cheerio');
const { exec } = require('child_process'); 

const { MessageAttachment } = require('discord.js')
//random champion cmd 
const fs = require('fs');
bot.commands = new Discord.Collection();
// const commandFiles = fs.readdirSync('./roleselecter').filter(file => file.endsWith('.js'));
// for (const file of commandFiles) {
//     const roleselecter = require(`./roleselecter/${file}`);
//     bot.commands.set(roleselecter.name, roleselecter);
// }
const commandFiles1 = fs.readdirSync('./bot1').filter(file => file.endsWith('.js'));
for (const file1 of commandFiles1) {
    const bot1 = require(`./bot1/${file1}`);
    bot.commands.set(bot1.name, bot1);
}

const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
]

const clear = require('./bot1/clear');
const { permissions } = require('./bot1/clear');

const temprole = require('./bot1/temprole');
const { permissions1 } = require('./bot1/temprole');

bot.on('ready', () => {
    console.log('You and me, we got this!');
    bot.user.setActivity('Luden\'s Echo');
})

// bot.on("voiceStateUpdate", async (oldVoiceState, newVoiceState) => {
//     if (newVoiceState.streaming) {
//         console.log("<@" + newVoiceState + ">" + "the user is streaming")
//         console.log(newVoiceState.guild.id)

//     }
// });


bot.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('932435434636705923').send(`Welcome <@${guildMember.user.id}>!`)
});


bot.on('messageCreate', message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    mention = message.mentions.users.first();
    if (message.content.substring(0, 1) === PREFIX) {
        switch (args[0]) {
            case 'yhelp':
                bot.commands.get('yhelp').execute(message, args);
                break;
            case 'poll':
                if (!message.content.substring(5)) {
                    message.channel.send('The !poll function needs a content!')
                } else {
                    message.channel.send('<@' + message.author.id + '>' + "'s poll: " + message.content.substring(5)).then(msg => {
                        msg.react("1️⃣").catch(error => console.error('One of the emojis failed to react:', error));
                        msg.react("2️⃣").catch(error => console.error('One of the emojis failed to react:', error));
                        
                        msg.react("✅").catch(error => console.error('One of the emojis failed to react:', error));
                        msg.react("❌").catch(error => console.error('One of the emojis failed to react:', error));
                    }).catch(error => console.error('One of the emojis failed to react:', error));
                }
                message.delete(1000).catch(console.error)
                break;

            case 'coinflip':
                bot.commands.get('coinflip').execute(message, args);
                break;

            case 'dice':
                bot.commands.get('dice').execute(message, args);
                break;

            case 'image':
                bot.commands.get('image').execute(bot, message, args);
                break;

            case '8ball':
                bot.commands.get('8ball').execute(message, args);
                break;

            case 'rps':
                bot.commands.get('rps').execute(message, args);
                break;

            case 'mclear':
                for (const perm of clear.permissions) {
                    if (!validPermissions.includes(perm)) {
                        return console.log(`Invalid Permissions ${perm}`);
                    } if (!message.member.permissions.has(perm)) {
                        message.channel.send('You do not have permission!')
                        break;
                    } else {
                        bot.commands.get('clear').execute(message, args);
                    }
                }
                break;

            case 'temprole':
                for (const perm of temprole.permissions1) {
                    if (!validPermissions.includes(perm)) {
                        return console.log(`Invalid Permissions ${perm}`);
                    } if (!message.member.permissions.has(perm)) {
                        message.channel.send('You do not have permission!')
                        break;
                    } else {
                        bot.commands.get('temprole').execute(message, args);
                    }
                }
                break;

            case 'addrole':
                if (!message.member.permissions.has('VIEW_AUDIT_LOG')) {
                    return message.reply("You don't have the permission to add roles.");
                }
                bot.commands.get('addrole').execute(message, args);
                break;

            case 'removerole':
                if (!message.member.permissions.has('VIEW_AUDIT_LOG')) {
                    return message.reply("You don't have the permission to add roles.");
                }
                bot.commands.get('removerole').execute(message, args);
                break;

            case 'displayrole':
                bot.commands.get('displayrole').execute(message, args);
                break;

            case 'event':
                bot.commands.get('event').execute(message, args);
                break;

            case 'calc':
                bot.commands.get('calculate').execute(message, args);
                break;
            case 'vote':
                bot.commands.get('vote').execute(message, args);
                break;
            case 'report':
                bot.commands.get('report').execute(message, args);
                break;

            case 'wheel':
                bot.commands.get('wheel').execute(message, args);
                break;

            case 'netease':
                const url = 'https://music.163.com/'
                const platform = process.platform;
                let command;
        
                if (platform === 'win32') {
                    command = `start ${url}`;
                } else if (platform === 'darwin') {
                    command = `open ${url}`;
                } else if (platform === 'linux') {
                    command = `xdg-open ${url}`;
                }
        
                exec(command, (error) => {
                    if (error) {
                        console.error(error);
                        message.reply('Failed to open the URL. Please ensure the URL is valid and the system supports this command.');
                    } else {
                        //message.reply(`Opened in the browser.`);
                        message.delete();
                    }
                    
                });

                break;

            case 'access':
                const application1 = new Discord.MessageEmbed()
                    .setTitle('Yuumi W')
                    .addField('You and me, we got this!', ' https://discord.com/oauth2/authorize?client_id=717150723124625498&scope=bot&permissions=8', true)
                    .setColor('#FF5733')
                    .setAuthor({ name: '🐱', iconURL: 'https://lol-skin.weblog.vc/img/wallpaper/tiles/Yuumi_28.webp?1701786024', url: 'https://www.leagueoflegends.com/en-pl/champions/yuumi/' })
                    .setThumbnail('https://i.redd.it/849hp76jous41.png')
                    .setFooter({ text: 'Add this useless bot!', iconURL: 'https://lol-skin.weblog.vc/img/wallpaper/tiles/Yuumi_19.webp?1701786024' });
                //  .setFooter({ text: '!author for author info!' })
                message.channel.send({ embeds: [application1] });

                break;

            case 'kekw':
                const kekwembed = new Discord.MessageEmbed()
                    .setColor('#DE5100')
                    .setTitle('kekw')
                    .setURL('https://i.redd.it/qen45uphfmq41.jpg')
                    .setAuthor({ name: 'kekw', iconURL: 'https://i.redd.it/qen45uphfmq41.jpg', url: 'https://i.redd.it/qen45uphfmq41.jpg' })
                    .setDescription('kekw')
                    .setThumbnail('https://i.redd.it/qen45uphfmq41.jpg')
                    .addFields({ name: 'kekw', value: 'kekw', inline: true })
                    .setImage('https://i.redd.it/qen45uphfmq41.jpg')
                    .setTimestamp()
                    .setFooter({ text: 'kekw', iconURL: 'https://i.redd.it/qen45uphfmq41.jpg' });
                message.channel.send({ embeds: [kekwembed] });
                break;

            case 'clearmdl':
                bot.commands.get('clearmdl').execute(message, args);
                break;

            case 'sendhistory':
                // Read the content of the file
                const fileContent = fs.readFileSync('messagedeletedlog.txt', 'utf8');
                // Create a Buffer from the file content
                const buffer = Buffer.from(fileContent, 'utf8');
                // Create a MessageAttachment with the Buffer
                const attachment = new MessageAttachment(buffer, 'messages_that_were_deleted.txt');
                // Send the file to the channel
                message.channel.send({ files: [attachment] });
                break;

        }
    }
    if (message.mentions.users.first() == 717150723124625498 && message.author != 717150723124625498) {
        const hellocode = Array('*I bet we\'ll be friends forever! Well, unless you wander into the brush with your face.*', 'Type !yhelp for help!', '***UwU~***', '*So, who wants to be my best friend? ...Book, I know you\'re already my best friend!*', '*Don\'t tell anyone but... I love hugs.*', '*Book, float us that-a-way!*', '*Naps make my magic stronger! It\'s true! Look! I\'m so strong, mmh, so strong!*', '*The only thing standing between us and lunch is... our enemies.*', '***RAWR!!!***')
        message.channel.send(hellocode[Math.floor(Math.random() * hellocode.length)])
    }
    if (message.content.endsWith('diff')) {
        message.channel.send('<:mastery7:874800242858528798>')
    }
    if (message.content.endsWith('gg') || message.content.startsWith('gg')) {
        message.channel.send('<:uhm:924502401849913424>')
    }
    if (message.content.startsWith('?')) {
        message.channel.send('<:missing:714913858040496209> ')
    }
    if (message.content.includes('slash command')) {
        message.channel.send('Screw / commands')
    }


})




bot.login(process.env.DISCORD_TOKEN);







//https://discordjs.guide/popular-topics/embeds.html#embed-preview


bot.on('messageDelete', (deletedMessage) => {
    // Check if the deleted message is from a guild (server)
    if (deletedMessage.guild) {
        const { guild, author, content, createdAt } = deletedMessage;
        // console.log(`Message deleted in ${guild.name}`);
        // console.log(`Author: ${author.tag}`);
        // console.log(`Content: ${content}`);
        // console.log(`Deleted at: ${createdAt.toISOString()}`);
        // console.log('---');
        function logToLogFile(content) {
            const logFilePath = 'messagedeletedlog.txt';
            // Get the current date and time
            // Create the log message
            const logMessage = `[ ${content}\n`;

            // Append the log message to the file
            fs.appendFile(logFilePath, logMessage, (err) => {
                if (err) {
                    console.error(`Error writing to log file: ${err}`);
                }
            })
        }
        logToLogFile(`Message deleted in ${guild.name}\nAuthor: ${author.tag}\nContent: ${content}\nDeleted by: ${deletedMessage.author.tag}\nDeleted at: ${createdAt.toISOString()}\n-----\n`)
        // Optionally, you can send the log to a specific channel
        const logChannel = guild.channels.cache.find((channel) => channel.name === 'deleted-message-logs');
        if (logChannel) {
            logChannel.send(
                `Message deleted by ${author.tag} in ${guild.name}:\n\`\`\`${content}\`\`\``
            );
        }
    }
}


);