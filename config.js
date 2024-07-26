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
global.mongodb = process.env.MONGODB_URI || "";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUlNTGp5LzVBdkxWbTZudHpaT3VEZ1Z1cjRhQldGYUlmM2JnYkt2WWpYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1Q0MmM1Mms3emovUUJsbVF1akRMaFlJbUR5WnZKMkVOTUpnSDdrcjhYST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SXJOQjdRQ0MrMksyWHlsVXBUZWs1dUlrM09yY0F3c2ltaStTK2FMWUZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCMVp4bFZYaEp6NWNkaWdtWGU1dFhuTWtxdnN2VjJxbzg4amJBeDREOW0wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktIY2ZTaE0vbkpFSHhIdzRIanhyQ3c3VFI1c3phZmIvZFRDUnU1cnZYRzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNxbVg1UEJ3Q2dVYUtkOFg1L2RvclpnSHRsSWlBZ1Nhem9GZ0xRaTdZQmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU051Ym5CSDJkZ2VQaHhpRnZ2VXRuV2hTei9odExpc0YrS2tFN09PN0dHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjJHVXp5OVQrcHFuQWt2UkpLZ0FmYktQVjFRV3IvQmY1TkYyNHpMS2gyUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imsya1BndFJISEU2clczMmFmQVFuTlZWWUdVVWpnVlNUVldMQ2hZRVlCNEJUdEdhUTd2T0R4UzBtaCt5dXJXVTFFaHRCVUY0c1lVMElSbEhQL1FsOUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiIxZ1A5ZkloQ0w1ZUFqYlI2dlFadEF2RUZrUURKRG9xUExPVytLUCs4eGk0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxMzU3MTA4M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQkY4MEY4MDlGRDA5QzJFNTAzNTdCMEJBRDM3ODNGOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxOTU0MTQwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTM1NzEwODNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTJGOTlDNEMzRjg0ODE3MEE5RjJFODZERDc4MUZDQjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTk1NDE0MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVlFkdkp4dHlUaWlRNDJURkZ3MnE2ZyIsInBob25lSWQiOiJhZTY3ZTNmOS0wYTk4LTQ5YTMtOGJiOC0zNTY5MGQwNWI2NWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXo4UkUxZXMyck1LMFF5TVpzMjJTVTJ3NVlJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR2S1NVTGJPRjJjRG9LMUIySkJNNlN3eDJPcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKQ0NOMzlaWSIsIm1lIjp7ImlkIjoiMjYzNzEzNTcxMDgzOjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRlZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWFVd2VVREVNemVpN1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRjJCU1l0Wi9ZVWFIcW5NWVNENFN2MmhKcFJQZUp2SUpNejRORi9LSnZuRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidWJ2YUZuYk1oL1l2UUd4SndVZVU5d3Q2cTNzRDBNNmxXb0Y5R0tDd2Q0TkMydTRGMzJQNTZWSStwZVlRekdzcDNwQlZoc293NkhmZHFGVkZZejh4RFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkczMG02K0RYUDZtMWVvand5TGhGNStUMVlac0VFYVZPSndWK09JbVJyZFU5ejg2UkwzR1RKaHR5V2ZsZTAxZkZLUGFWMmN0anhqNVRhcmNXdHdDR0R3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzEzNTcxMDgzOjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJkZ1VtTFdmMkZHaDZwekdFZytFcjlvU2FVVDNpYnlDVE0rRFJmeWliNXgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE5NTQxMzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSi9KIn0="
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
