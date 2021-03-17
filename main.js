require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');



client.commands = new Discord.Collection();
client.events = new Discord.Collection();
//simply moving over to the handlers, no further code needed here yet
require('./handlers/command_handler')(client, Discord);
require('./handlers/event_handler')(client, Discord);



client.login(process.env.API_TOKEN)