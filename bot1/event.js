
//const { after } = require('cheerio/lib/api/manipulation');
const Discord = require('discord.js');

const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'event',


    execute(message, args) {
        var afterall = ''
        if (!message.content.substring(6)) {
            //message.channel.send('The !poll function needs a content!')
            const help = new Discord.MessageEmbed()
                .setTitle('Event Help')
                .addField('How to begin:', 'Type !event + the content for event', true)
                .addField('How to end:', 'The event starter reacts to 🆗, then Yuumi will send the results', true)
                .setColor('#39c4b4')
            message.channel.send({ embeds: [help] });
        }

        else {

            message.react('😄').catch(error => console.error('Failed to react:', error));
            message.react('😡').catch(error => console.error('Failed to react:', error));
            message.react('🆗').catch(error => console.error('Failed to react:', error));;
            const filter = (reaction, user) => {
                return reaction.emoji.name === '👍' && user.id === message.author.id;
            };

            const collector = message.createReactionCollector(filter, { time: 1500 });
            var listofpeople = Array()
            collector.on('collect', (reaction, user) => {
                if (user.bot) {

                } else {



                    if (reaction.emoji.name == '😄') listofpeople.push(`${reaction.emoji.name}  ${user.tag}`)
                    //message.reply(`Collected ${reaction.emoji.name} from ${user.tag}`);

                    if (reaction.emoji.name == '😡') listofpeople.push(`${reaction.emoji.name}  ${user.tag}`)

                    if (reaction.emoji.name == '🆗' && user.tag == message.author.tag) {



                        let uniqueChars = listofpeople.filter((c, index) => {
                            return listofpeople.indexOf(c) === index;
                        });




                        for (var x = 0; x < uniqueChars.length; x++) {
                            afterall += uniqueChars[x] + '\n'
                        }

                        if (!afterall) {

                        } else {
                            message.channel.send(afterall)
                        }




                        function empty() {
                            //empty your array
                            listofpeople.length = 0
                        }
                        empty();

                        message.reactions.removeAll().catch(error => console.error('Failed to clear reactions:', error));
                    }
                }
            });


            collector.on('end', collected => {
                console.log(`Collected ${collected.size} items`);
                if (typeof afterall !== 'undefined')
                    message.channel.send(afterall).catch(console.error)
                else {
                    afterall = 'Nothing!';
                    message.channel.send("Original Message Deleted")
                }


            });
        }
    }
}