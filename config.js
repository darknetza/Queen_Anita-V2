//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Harare, Zimbabwe";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://test:<test>@cluster0.axdtbzb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Harare";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "263713571083";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true
";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE44YTA1a00xTXRJWGdPNEtGNWpxMmtzTktCNnJXcmRhT1NTUExrNU9rQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSndvMDE3K2xtZyt5dFhtY2MzcExyVndlOW52bitMU2syS1dvd3pIRFkzTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSHpIQ0NMQUt3WGdSSllnakRqZVZHUDg2V01sVkZFYkpFdUI3SzJsdzBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrNXVXLzFTcUU1WUc1Z21HTmY1SFh0M1gxMHdvVmhlckxHWjdCUkNpc3pzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPeFZ4NWFLT1ZVM0JKUmd5MjVOa3JPZmNjdHJBOE5GZGtqNzQxdEdaV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVPdXVQNlJoTGZRRytVelk4RWJyWlVrcUhxNmZJWVpzYVdteUkzSjBmRFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hhRUcyZ3hPREVvRVYxS1kwRmF2MC9yTlZpRzBCazhyTGxCbURvTVNGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2pHY3pyUUtPemxwaGJVQTFwb0dYRzN1WnlKVytTTEJVTVBpK1liSHJBQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndWdkhKWUU3MHovdklLRFpvLzI2QUdVUk9VTlZvQW93UlROQXRUTml1TldPN1lwN1Z0WkIwVVNXaWF3cjFSWHkwaXQwMjJ6dzN1cjllc3ZiQjJseUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJZdDdvdXZDRTY3bWJuSlhwQS9jV1NEZXhIQjNWcHRIY3V2WGhycUhraDJJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCeGdldXRPb1EyU1h0eUtWTFBuUkNBIiwicGhvbmVJZCI6IjBmNTRjZDMyLWZmZWYtNGIwYy04OWNiLWFmNTVlZTBhOGM0YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCTDlpbUVrdFRSdjVCeFdTRnhlRDE3QVNoRHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2NSN2ZNS0FsNCs2dEpsYlI0R2Zna1FWSXVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJSMTJZNDRNIiwibWUiOnsiaWQiOiIyNjM3MTM1NzEwODM6MjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGVlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZVV3ZVVERUx5RWpiVUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGMkJTWXRaL1lVYUhxbk1ZU0Q0U3YyaEpwUlBlSnZJSk16NE5GL0tKdm5FPSIsImFjY291bnRTaWduYXR1cmUiOiJyclRuT3psaTYyaExLTU9DYmE2aW5GTnl3KzJtU2RoUEF3a1o5RGdBOHhXbUtBOUJ5cjBpOGtKbThVbVJydVVKUTJOSkw5dTNadnVKcU81T3h1YnlCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNHM4Rnh2R1ZLTVBpWEZnR3U3aFJEdlp5cmFJR1YvY1lIOWJMNlYxdTgyQXFBbjRTQUZ1RTJaTEZTcGZNUTBCWVBSS3pTSGxkWE41UE0yNU14MVNiQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTM1NzEwODM6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmRnVW1MV2YyRkdoNnB6R0VnK0VyOW9TYVVUM2lieUNUTStEUmZ5aWI1eCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTk3NTM3MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKL0gifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "DARKNET",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
