module.exports = {
    name: 'clear',
    permissions: ["MANAGE_MESSAGES"],

    execute(message, args) {
        if (!args[1]) return message.reply('Enter the amount of lines to clear!')
        if (isNaN(args[1])) return message.reply('Enter a real number!')
        if (args[1] >= 100) return message.reply('You cannot clear more than 100 lines!')

        var lines = args[1];
        lines++;
        message.channel.bulkDelete(lines).catch(console.error)


    }
}