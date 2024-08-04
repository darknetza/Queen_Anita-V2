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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVBQUWNod1Vvc0xlZU52UG1PTjVvY2JBYUZDc1h0VDNzVjFrQjdnV2ExOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlBUeURhOWZDa0gxSjg2QXU1N1c1VEthVWVmdStxWXpBQkw0bHB6Z3YzYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSFpRNWtQVmczTGdGNmlVdGJIb2ptK3cyeXpUWXYyTTlrK0xGUThHR1hnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5K1cyeXNPd0M1ZzN4b0R0SFVkRUJUZE1jUXgvQlpTZis1aXc0cG5lb0U4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVJSXBxbzRlS1dKU29aUngzUlBmbHUzUDc0Ri9PM0Vkam8wU3RPM2dKMDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVtNFRVdEdGUkxqR3piMU80eGx5KzhvbitpTHhRUlNJMmpTdDFDaUE4Um89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUJmOUIrbGk5VEg3MlZoeU9PREd3N3NrVy8rYjNUU3dKb0FHc292OUZGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTm1zNUNZVmkweEdMVVlhZFZlUHBJVTByVEZhd3VkYjRiUFhGNHE4UStFcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtleUZRZmI1OUZsMGwrSXZFZnlBanV1ODJ1QXhiL1Erc1puQ2FJU21FL1VMMGJ0amJrOWU4MzJOWTJUTFk0UmYrVEJ6dk9QYnFpd0x4K01FSEs4UkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJmZkxVUHFuN013Yy94TCs5aHFEeGxQWlcxbjlKeGhGQmtPZWlBaGFLdUpBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxMzU3MTA4M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0NzFGQTQ2NTVBN0Y1MERFODg4MDdCM0JDREI5MDQ5QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyODA2NTIyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTM1NzEwODNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkIwODczMDlDODhBNDQ1RjM1OTgyNjc5MjRCNDE2RTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjgwNjUyNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid3REMFZ3ellSbFdSOWk3UHBmRnhSQSIsInBob25lSWQiOiJjNzRjNWJmOC04NmViLTRiMGItYjNkZS0xM2RlZDQ1MTJlODQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzhJMHZLcGhZRFljUlVVc25HYVFpZ0FBQko0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhDRzdPcmM3ZURmL0pMZk5vRE1HZWJ0YkxpWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIyMjhKRDkxWSIsIm1lIjp7ImlkIjoiMjYzNzEzNTcxMDgzOjQ5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRlZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEt4M2RVQkVPbmh2N1VHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNENHbk1rcXJNVzVBRWpPSU4vWStVK0ZWN2ZDd2FVVUdmbi8rS01URUNuST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY2EzRU5sUDJDMU9qM0N6QWZBMmxSS1VvNmUwbGplMzRzbHNpSVNIUGhZb0xUc2hSeTJMV0hmTzV0Y1VTRmxWVnBJNEIyeUtlN1dMNlRZYzMreENjQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjlLYUJJV2lmeXg1eHBBZ0pkM0NqcUVJcUpJVllub3FTTlFKZjc4TTQ0TU9LN05HOHF1ckFCN00zbU94MnBGaGhYczFiTTFQQlF6WXMxS0NONzNIaURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzEzNTcxMDgzOjQ5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVBaHB6SktxekZ1UUJJemlEZjJQbFBoVmUzd3NHbEZCbjUvL2lqRXhBcHkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4MDY1MTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlRDIn0="
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
