const main = require("./classes/main");

const config = require("./config.js");

require("./database/main");
require('dotenv').config();

const express = require("express");

const app = express();

console.log(process.env.token)

const client = new main({
    token: process.env.token,
    prefix: config.prefix,
    client_id: config.client_id,
    client_secret: process.env.client_secret,
    redirect_uri: config.redirect_uri
});

client.on("ready", (bot) => {
    console.log(`Logged in as ${bot.user.tag}`)
});

client.on("message", async (bot, message, args, command) => {
    if(!message.content.startsWith(config.prefix)) return;
    if(!config.owners.includes(message.author.id)) return;

    if(command === "all"){
        const amount = await client.tokenCount();
        message.channel.send({
            embed: {
                title: "Total Authorized Members",
                description: `**We have ${amount} Members in the database**`,
                color: "BLUE"
            }
        });
    }

    if(command === "join"){
        if(!args[0] || !args[1]) return message.channel.send("Wrong usage, `join <server id> <number of join>`")
        await client.manageJoin({
            amount: args[1],
            guild_id: args[0]
        }, message);
    }

    if(command === "verify"){
        message.channel.send(`Your verify link is ready: ${config.oauth_link} authorize us to instantly redeem your prize! `)
    }
});

app.get("/", (req, res) => {
   res.redirect(config.oauth_link);
});

app.get("/authorized", async (req, res) => {
    const data = await client.manageAuth({code: req.query.code});
    const user_id = await client.requestId(data.access_token);
    const obj = {
        ...data,
        user_id
    };
    client.saveAuth(obj);
    res.redirect("https://discord.com/oauth2/authorized");
});

app.listen(80);