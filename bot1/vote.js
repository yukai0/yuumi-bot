const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'vote',


    execute(message, args) {
        const help = new Discord.MessageEmbed()
            .setTitle('Vote for GOAT')

            .addField('How to vote:', 'React to the person who deserves GOAT of the month', true)
            .setColor('#c1ff00')
        message.channel.send({ embeds: [help] }).then(msg => {
            msg.react("<:diychannel:906761070994149407>  "); msg.react("<:franknut:882474143692521473> "); msg.react("<:shahnaz2:945917269836460062> ");
            msg.react("<:paoloserious:1026349172741373953> "); msg.react("<:hampreet:819669076922073098>   "); msg.react("<:samay2:955338539481051146>   "); msg.react("<:danny:916572313112182794> ");

        }).catch();

    }
}