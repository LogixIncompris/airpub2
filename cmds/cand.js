const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const PREFIX = '/+';
const client = new Client();
const candid_channel = '722009002745266247';

module.exports.run = async (bot,message,args) => {

const args1 = message.content.slice(PREFIX.lenght).split('/ +/');
    if(message.content.toLowerCase().startsWith(PREFIX + 'candid')){
        if(message.author.bot) return;
 
        const candidature = args1.slice(0).join(" ");
        const candidat = message.guild.members.cache.get(message.author.id);
        const staffRole = message.guild.roles.cache.get('720289765051859035');
 
        message.delete();
        message.channel.send(`Parfait ${candidat}, j ai bien reçu ta candidature, elle sera traité sous 24h, soit patient, je reviendrais vers toi dans peu de temps ^.^`);
 
        const traitCandid = new Discord.MessageEmbed()
            .setTitle('Nouvelle candidature :')
            .setColor()
            .setDescription(`Hey ${staffRole}, ${candidat} vient de vous envoyez une candidature, je vous la joint à mon message, pour me donner votre avis réagissez avec le 👍 ou le 👎`)
            .addField("La candidature :", `${candidature}`);
        client.channels.cache.get(candid_channel).send(traitCandid).then(async msg => {
            await msg.react('👍');
            await msg.react('👎');
 
            const filter = (reaction) => {
                return ['👍', '👎'].includes(reaction.emoji.name);
            };
 
            msg.awaitReactions(filter, { max: 10, time: 15000, errors: ['time'] })
    .           then(collected => {
                    const reaction = collected.first();
 
                    if (reaction.emoji.name === '👍') {
                        message.reply('tu as réagis avec le 👍.');
                    } else {
                        message.reply('tu as réagis avec le 👎.');
                    }
                })
            .catch(collected => {
                message.reply('tu n\'as réagis avec aucun des 👍 ou 👎 ');
            });
        });
}};

module.exports.config = {
    name: 'candidature'
}