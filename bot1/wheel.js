const Discord = require('discord.js');
const { filter } = require('mathjs');
module.exports = {
    name: 'wheel',


    execute(message, args) {
        if (!args[1]) return message.reply('Add content to the wheel! Separate using comma (blank ones will be removed)')

        const userInput = message.content.substring(6);
        function splitTextIntoArray(userInput) {
            // Split the text based on commas
            let individualStrings = userInput.split(',');

            // Trim leading and trailing whitespaces from each string
            individualStrings = individualStrings.map(str => str.trim());

            return individualStrings;
        }

        // Example usage:
        let inputText = userInput;
        let resultArray = splitTextIntoArray(inputText);
        console.log(resultArray)
        const filteredArray = resultArray.filter(str => str !== '');
        const boldArray = filteredArray.map(element => `**${element}**`);
        // Join the array elements with a space after each element
        const formattedArray = boldArray.join(' | ');
        message.channel.send("The options entered are: " + `\n` +  formattedArray )
        
        
        const randomElement = filteredArray[Math.floor(Math.random() * filteredArray.length)];
        setTimeout(() => {
            message.channel.send(`Your result is: ** ${randomElement} **`);
        }, 1000);




    }
}