const Discord = require('discord.js');
module.exports = {
    name: 'yhelp',


    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle('What can Yuumi do for you?')
            .addField("📋 " + '!poll', 'Make a yes/no poll!', true)
            .addField("💰" + '!coinflip', 'Flip a coin!', true)
            .addField("🎲" + '!dice', 'Roll a dice!', true)
            .addField("🖼️" + '!image + (content)', 'Yuumi scraping \n images. Be patient!', true)
            .addField("🎱" + '!8ball', 'Can\'t decide?', true)
            .addField("👊✋✌" + '!rps', 'Destroy your friend in rock paper scissors', true)
            .addField("🎫" + '!event', 'Start a small event and see who joins', true)
            .addField("💯" + '!calc', 'Calculator!', true)
            .addField("📝" + '!report', 'Start rambling to your server owner', true)
            .addField("🥊" + '!temprole', 'Add a temporary role to member!', true)
            .addField("🎡" + '!wheel', 'Decide!', true)
            .addField("📙" + '!displayrole', 'Display roles available to add!', true)
            .addField("➕" + '!addrole', 'Add roles!', true)
            .addField("➖" + '!removerole', 'Remove roles!', true)
            .addField("👀" + '!sendhistory', 'Send history of messages that were deleted!', true)
            .setColor(0xF1C40F)
            .setThumbnail('https://i.redd.it/3gwo4xzzk4v41.jpg')
            .setFooter({ text: '!access let Yuumi Zoomies on your server!', iconURL: 'https://1.bp.blogspot.com/-LLZRrsxgsu0/XMMP0h3NmxI/AAAAAAABR-I/gaNAhsCvRYUalMZNbteXd0C9krTr5lz6QCLcBGAs/s1600/3_Yuumi_W1.jpg' })
        message.channel.send({ embeds: [embed] });
    }
}