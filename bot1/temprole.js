const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    name: 'temprole',
    permissions1: ["ADMINISTRATOR"],
    execute(message, args) {
        //https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/understanding/roles.md


        //     console.log(message.author)
        //     message.author.roles.add('MOD')
        // }

        //     var role = message.guild.roles.cache.find(role => role.name === "MOD");
        //     //if (!args[1]) return message.reply('Tag a person')


        //     // if (!(args[1]).startsWith("@")) {
        //     //     message.reply('Tag a person')
        //     // } else {
        //     //     args[1].id.add(role).catch(console.error);
        //     // }


        //    mention.roles.add(role)
        // function getUserFromMention(mention) {
        //     if (!mention) return;

        //     if (mention.startsWith('<@') && mention.endsWith('>')) {
        //         mention = mention.slice(1, -1);

        //         if (mention.startsWith('!')) {
        //             mention = mention.slice(1);
        //         }

        //         return bot.users.cache.get(mention);
        //     }
        // }
        if (!args[1] || !args[2]) return message.reply('Use format: !temprole time(ms) role_name tag_user')
        // if (isNaN(args[1])) return message.reply('Enter a real number in ms!')


        const roleName = args[2];

        // Get the guild (server) where the message was sent
        const guild = message.guild;

        // Check if the role exists in the guild
        const checkrole = guild.roles.cache.find(role => role.name === roleName);

        if (!checkrole) return message.channel.send(`The ${roleName} role does not exist in this server.`)



        let role = message.guild.roles.cache.find(r => r.name === args[2]);

        // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
        let member = message.mentions.members.first();

        const timeString = args[1];
        const duration = ms(timeString);

        // Check if the duration is valid
        if (duration !== undefined) {
            // Calculate the timestamp by adding the current time to the duration
            // const timestamp = Date.now() + duration;

            // Respond with the timestamp
            // message.reply(`Timestamp for ${timeString}: ${new Date(timestamp).toLocaleString()}`);
        } else {
            message.reply('Invalid time format. Example: 10m, or use miliseconds');
        }


        var timeforchange
        var actualtime
        if (!isNaN(args[1])) {
            if (args[1] < 60000) {
                timeforchange = args[1] / 1000 + ' second(s)'
            } else {
                timeforchange = args[1] / 1000 / 60 + ' minute(s)'
            }
            message.channel.send('<@' + message.mentions.members.first() + '>' + ', You have been granted: ' + timeforchange + ' for admin!')
            actualtime = args[1]

        } else if (duration !== undefined) {
            if (duration < 60000) {
                timeforchange = duration / 1000 + ' second(s)'
            } else {
                timeforchange = duration / 1000 / 60 + ' minute(s)'
            }
            message.channel.send('<@' + message.mentions.members.first() + '>' + ', You have been granted: ' + timeforchange + ' for admin!')
            actualtime = duration
        }

        // or the person who made the command: let member = message.member;
        //message.mentions.members.first().user.tag
        // Add the role!


        member.roles.add(role).catch(console.error);

        setTimeout(() => {
            member.roles.remove(role).catch(console.error);

        }, actualtime)



    }
}
