const Discord = require("discord.js");
//acebots
module.exports.run = async (client, message, args) => {
    try {
        await message.channel.send(`Komutlar: \n${client.commands.map(props => `\`${props.help.name}\``).join(" | ")}`);
    } catch (e) {
        throw e;
    }//acebots
}

module.exports.conf = {//ikrudka
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],//acebots
  permLevel: 0
};

module.exports.help = {
  name: 'komutlar',
  description: 'Botta bulunan tüm komutları gösterir',//acebots
  usage: 'komutlar'
};//ikrudka
