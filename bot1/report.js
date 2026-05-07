const Discord = require('discord.js');
module.exports = {
    name: 'report',


    async execute(message, args) {
        if (!message.content.substring(7)) {
            message.channel.send('The !report function needs a content!')
        } else {
            const owner = await message.guild.fetchOwner();
            owner.send('**' + message.author.tag + ' from ' + message.guild.name + ' reported: ' + '**' + message.content.substring(7))
            message.delete(1000).catch(console.error)
            message.channel.send(message.author.tag + ' Your report has been sent to server owner!')
        }
    }
}