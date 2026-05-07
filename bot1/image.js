const { googleImage } = require('@bochilteam/scraper-images'); // Using the bochilteam scraper
const fs = require('fs');
//https://www.npmjs.com/package/@bochilteam/scraper-images
module.exports = {
  name: 'image',
  async execute(bot, message, args) {

    function logToLogFile(content) {
      const logFilePath = 'imagesentlog.txt';
      // Get the current date and time
      // Create the log message
      const logMessage = `[ ${content}\n`;

      // Append the log message to the file
      fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
          console.error(`Error writing to log file: ${err}`);
        }
      })
    }

    //console.log(message.content + '     ' + message.author.tag + ' ' + new Date());
    // Check if the user provided a query for the image
    if (!message.content.substring(6)) {
      return message.channel.send('What picture would you like? :)');
    }

    // Extract the search query from the message
    var image_query = message.content.substring(6);

    try {
      // Fetch image results using bochilteam scraper (max 51 results)
      var image_results = await googleImage(image_query);

    } catch (error) {
      console.error('Error fetching images:', error);
      return message.reply('Error!! Please retry later. This search engine is terrible 😥');
    }

    if (!image_results || image_results.length === 0) {
      return message.reply('Error!! Please retry later. This search engine is terrible 😥');
    }


    try {
      var imgsend;

      imgsend = image_results[Math.floor(Math.random() * image_results.length)];


      await message.channel.send(imgsend);
      //console.log('Image URL sent:', imgsend);
      logToLogFile("\n" + message.content + ' || ' + message.author.tag + ' || ' + new Date() + ' || Image URL sent: ' + imgsend)

    } catch (error) {
      console.error('An error occurred:', error);
      return message.reply('There was an error processing the image, please retry!');
    }
  },
};
