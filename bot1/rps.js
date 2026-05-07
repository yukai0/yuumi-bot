const Discord = require('discord.js');

const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'rps',


    execute(message, args) {
        if (!message.mentions.members.first()) {
            return message.channel.send('Tag someone you wanna play with!')
        }
        var ifsend = false;
        var emojiarray = Array('✌', '✋', '👊')
        const opponent = message.mentions.members.first().user.username + '#' + message.mentions.members.first().user.discriminator
        message.react('👍').catch(error => console.error('One of the emojis failed to react:', error));
        message.channel.send(message.mentions.members.first().user.username + ',' + ' react to the thumbs up to play!')
        const filter = (reaction, user) => {
            return reaction.emoji.name === '👍' && user.id === message.mentions.members.first().user.id;
        };

        const collector = message.createReactionCollector({ filter, time: 6500 });

        collector.on('collect', (reaction, user) => {
            //console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
            //console.log(user.id)
            //console.log(message.mentions.members.first().user.id)
            if (user.id == message.mentions.members.first().user.id) {
                message.channel.send('game starting...')
                ifsend = true;
            }
        });

        collector.on('end', collected => {
            //console.log(`Collected ${collected.size} items`);
            message.reactions.removeAll().catch(error => console.error('Failed to clear reactions:', error));
            if (ifsend) {
                const rpsembed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setDescription(message.author.tag + ' & ' + opponent + '\'s game')
                    .addField(message.author.username, emojiarray[Math.floor(Math.random() * emojiarray.length)], true)
                    .addField(message.mentions.members.first().user.username, emojiarray[Math.floor(Math.random() * emojiarray.length)], true)
                    .setTimestamp()
                message.channel.send({ embeds: [rpsembed] });
            } else {
                message.channel.send('Opponent did not initiate match.')
            }
        });
    }
}