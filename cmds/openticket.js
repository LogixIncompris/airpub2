const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {
        
    message.delete()
    if(!message.member.hasPermission("ADMINISTRATOR")) return;

    let OpenTicket = new Discord.MessageEmbed()
    .setDescription("Clique sur la reaction pour ouvrir un ticket")

    let myGuild = bot.guilds.cache.get('797039898619019276');
    let SendChannel = myGuild.channels.cache.get('798064589069484032')
    message.channel.send(OpenTicket)
    .then(msg => msg.react('798441257970040862'))
}

module.exports.config = {
    name: 'openticket'
}