const config = require('./config.json');
const Discord = require('discord.js');
const token = config.token;
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = '?';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Naoji Bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'roll' || command === 'r'){
        client.commands.get('roll').execute(message, args);
    } else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
}
);



client.login(token);
