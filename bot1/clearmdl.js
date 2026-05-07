const fs = require('fs');
const Discord = require('discord.js');
module.exports = {
    name: 'clearmdl',
    permissions: ["ADMINISTRATOR"],

    execute(message, args) {
        const filePath = 'messagedeletedlog.txt';
        if (!args[1]) return message.reply('Enter the amount of lines to clear!')
        if (isNaN(args[1]) && args[1] != "all") return message.reply('Enter a real number!')
        //if (args[1] >= 100) return message.reply('You cannot clear more than 100 lines!')

        let intValue = parseInt(args[1], 10);



        if (!isNaN(args[1])) {
            var linesToClear = intValue * 6 + intValue + 1; // Specify the number of lines to clear

            // Read the content of the file
            // Update with your actual file path
            let fileContent = fs.readFileSync(filePath, 'utf8').split('\n');

            // Remove the specified number of lines from the end of the file content
            fileContent = fileContent.slice(0, -linesToClear);


            // Write the updated content back to the file
            fs.writeFileSync(filePath, fileContent.join('\n') + '\n');

            message.reply(`Cleared ${intValue} messages from the file.`);
            isTheLine = false;


        }

        if (args[1] == "all") {
            isTheLine = false;
            fs.writeFileSync(filePath, '');
            linesToClear = "all"

            message.reply(`Cleared all messages from the file.`);

        }

        // Reply to the user in Discord


    }
}