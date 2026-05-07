const Discord = require('discord.js');
module.exports = {
    name: 'removerole',


    execute(message, args) {

        // Get the member who sent the message
        const targetUser = message.member;
        
        if (!args[1]) return message.reply('What role would you like to remove? (case sensitive)')
        // Get the role by name (change 'RoleName' to the actual name of the role)
        const roleName = message.content.substring(12);
        const role = message.guild.roles.cache.find((r) => r.name === roleName);

        // Check if the role exists
        if (!role) {
            return message.reply(`Role '${roleName}' not found.`);
        }
        if (role.permissions.has('VIEW_AUDIT_LOG')) {
            return message.reply(` Failed to remove role `);
          }
        // Add the role to the member who sent the message
        targetUser.roles.remove(role)
            .then(() => {
                message.reply(`Role '${role.name}' removed from you.`);
            })
            .catch((error) => {
                console.error('Error removing role:', error);
                message.reply('There was an error removing the role.');
            });

    }

}