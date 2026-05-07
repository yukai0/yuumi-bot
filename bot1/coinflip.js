const Discord = require('discord.js');
module.exports = {
    name: 'coinflip',


    execute(message, args) {
        var coin = (Math.random());

        const embed2 = new Discord.MessageEmbed()
            .setColor(0x37FF37)
            .setThumbnail('https://images-na.ssl-images-amazon.com/images/I/61%2Bpp5SZGbL._AC_.jpg')

        const embed3 = new Discord.MessageEmbed()
            .setColor(0x33B2FF)
            .setThumbnail('https://i.imgur.com/n2YRAXY.jpg')

        if (coin < 0.5) {
            message.channel.send({ embeds: [embed2]} );
        } else if (coin >= 0.5) {
            message.channel.send({ embeds: [embed3]} );
        }
    }
}