const Discord = require('discord.js');
module.exports = {
    name: 'addrole',


    execute(message, args) {

        // Get the member who sent the message
        const targetUser = message.member;
        
        if (!args[1]) return message.reply('What role would you like to add? (case sensitive)')
        // Get the role by name (change 'RoleName' to the actual name of the role)
        const roleName = message.content.substring(9);
        const role = message.guild.roles.cache.find((r) => r.name === roleName);

        // Check if the role exists
        if (!role) {
            return message.reply(`Role '${roleName}' not found.`);
        }
        if (role.permissions.has('VIEW_AUDIT_LOG')) {
            return message.reply(` Failed to add role `);
          }
        // Add the role to the member who sent the message
        targetUser.roles.add(role)
            .then(() => {
                message.reply(`Role '${role.name}' added to you.`);
            })
            .catch((error) => {
                console.error('Error adding role:', error);
                message.reply('There was an error adding the role.');
            });

    }

}