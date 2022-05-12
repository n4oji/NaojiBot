module.exports = {
    name: 'clear',
    description: "Command for clear chat",
    async execute(message, args){
        if(message.member.permissions.has("MANAGE_MESSAGES")){
            if(!args[0]) return message.reply("Insira um número de mensagens para serem deletadas.")
            if(isNaN(args[0])) return message.reply("Insira um número válido")

            if(args[0] > 100) return message.reply("Limite de 100 mensagens por comando.")
            if(args[0] < 1) return message.reply("Número inválido.")

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
        } else return message.reply("Voce não tem permissão para usar esse comando!")
    }
}