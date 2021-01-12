const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    let mp = args.join(" ");
    let mpstaff = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .addField(`> Message de : ${message.author}`)
    .addField(`> Message :, ${mp}`)
    .addField(`> Date :, ${message.createdAt}`)
    var mpstaffchannel = message.guild.channels.cache.get('797238650914996295')
    if(!mpstaffchannel) return message.channel.send('Salon introuvable !')
    message.delete().catch(O_o=>{});
    mpstaffchannel.send(mpstaff)
}

module.exports.config = {
    name: 'staffhelp'
}