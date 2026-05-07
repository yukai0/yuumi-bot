const Discord = require('discord.js');
module.exports = {
    name: 'dice',


    execute(message, args) {
        var dice = (Math.random() * 7);

        const pic1 = new Discord.MessageEmbed()
            .setThumbnail('https://random-ize.com/dice-rolling/dice-images/full-images/dice-1-1.gif')
            .setColor(0xFFFFFF)

        const pic2 = new Discord.MessageEmbed()
            .setThumbnail('https://random-ize.com/dice-rolling/dice-images/full-images/dice-1-2.gif')
            .setColor(0xFFFFFF)

        const pic3 = new Discord.MessageEmbed()
            .setThumbnail('https://random-ize.com/dice-rolling/dice-images/full-images/dice-3-1.gif')
            .setColor(0xFFFFFF)

        const pic4 = new Discord.MessageEmbed()
            .setThumbnail('https://random-ize.com/dice-rolling/dice-images/full-images/dice-4-1.gif')
            .setColor(0xFFFFFF)

        const pic5 = new Discord.MessageEmbed()
            .setThumbnail('https://random-ize.com/dice-rolling/dice-images/full-images/dice-5-2.gif')
            .setColor(0xFFFFFF)

        const pic6 = new Discord.MessageEmbed()
            .setThumbnail('https://random-ize.com/dice-rolling/dice-images/full-images/dice-6-1.gif')
            .setColor(0xFFFFFF)

        if (dice >= 0 && dice < 1) {
            message.channel.send({ embeds: [pic1]} );
        } else if (dice >= 1 && dice < 2) {
            message.channel.send({ embeds: [pic2]} );
        } else if (dice >= 2 && dice < 3) {
            message.channel.send({ embeds: [pic3]} );
        } else if (dice >= 3 && dice < 4) {
            message.channel.send({ embeds: [pic4]} );
        } else if (dice >= 4 && dice < 5) {
            message.channel.send({ embeds: [pic5]} );
        } else if (dice >= 5 && dice < 6) {
            message.channel.send({ embeds: [pic6]} );
        }

     
        
    }
}