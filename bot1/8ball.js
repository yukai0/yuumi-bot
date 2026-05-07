const Discord = require('discord.js');
module.exports = {
    name: '8ball',


    execute(message, args) {
         var ball = [
            'It is certain',
            'It is decidedly so.',
            'Without a doubt.',
            'Yes definitely.',
            'You may rely on it.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good.',
            'Yes.',
            'Signs point to yes.',
            'Reply hazy, try again.',
            'Ask again later.',
            'Better not tell you now.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            'Don\'t count on it.',
            'My reply is no.',
            'My sources say no.',
            'Outlook not so good. ',
            'Very doubtful.'
        ]
        const ballcontent = new Discord.MessageEmbed()
            .setAuthor({ name: 'Magic 8 Ball' })
            .setColor('#000000')
            .setTitle(ball[Math.floor(Math.random() * ball.length)])
            .setTimestamp()
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/9/90/Magic8ball.jpg')
            .setFooter({ text: message.author.username })
        message.channel.send({ embeds: [ballcontent] });

    }
}