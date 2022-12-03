module.exports = {
  token: process.env.token, //token du bot
  port: "3000", //Nombre de port ( exemple : 3000 )
  prefix: "-", //prefix du bot
  client: "", //client qui a payer le bot ( exemple "Ξl K4lash#9999 ( client )")
  client_id: "1048301974870835291", // client id du bot
  client_secret: process.env.client_secret, //client secret du bot
  redirect_uri: "", //redirect url de replit
  footer: "Create By Ξl K4lash#9999", //footer des cmd
  support: "", //support du bot
  wehbook: process.env.webhook, //wehbook de logs
  owners: ["703336732447342612"], //owner du bot ( pour plusieur owner : ["owner 1", "owner 2"])
  authLink: "https://discord.com/api/oauth2/authorize?client_id=1048301974870835291&redirect_uri=&response_type=code&scope=identify%20guilds.join", //lien auth du bot

}