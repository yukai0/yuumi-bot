const Discord = require('discord.js');
const math = require('mathjs')
module.exports = {
    name: 'calculate',


    execute(message, args) {
        try {
            const help = new Discord.MessageEmbed()
                .setTitle(message.content.substring(6) + " = " + math.evaluate(message.content.substring(6)))
                .setColor('#fcba03')
                .setAuthor({ name: 'Calculator', iconURL: 'https://cdn.icon-icons.com/icons2/2248/PNG/512/calculator_icon_136848.png' })
                .setFooter({ text: 'Round-off error might occur if too many decimals.' })
            message.channel.send({ embeds: [help] });
        } catch (err) {
            message.channel.send('Math Notation only!')
        }




    }

}