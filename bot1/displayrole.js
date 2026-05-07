const Discord = require('discord.js');
module.exports = {
    name: 'displayrole',


    execute(message, args) {

        // Get the member who sent the message
        const roles = message.guild.roles.cache;

    // Filter roles that do not have VIEW_AUDIT_LOG permission, are not bots, and are not @everyone
    const rolesWithoutPermission = roles.filter(role =>
      !role.permissions.has('VIEW_AUDIT_LOG') && !role.managed && role.name !== '@everyone'
    );

    // Map the roles to their names
    const roleNames = rolesWithoutPermission.map(role => role.name);

    // Send a message with the list of roles without VIEW_AUDIT_LOG permission
    // if (roleNames.length > 0) {
    //   message.channel.send(`Roles without VIEW_AUDIT_LOG permission: ${roleNames.join(', ')}`);
    // } else {
    //   message.channel.send('No roles without VIEW_AUDIT_LOG permission found.');
    // }  
    const embed = new Discord.MessageEmbed()
      .setColor('#3BB143')
      .setTitle('Roles available to add!') 
      .setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png', size: 4096 }))
      .setDescription(roleNames.length > 0 ? roleNames.join('\n') : 'No roles found.')
    //  .setFooter('Bot by YourBotName');

    // Send the embed
    message.channel.send({ embeds: [embed] });
  
    }

}