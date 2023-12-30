const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "Queen Anya", 
  author: process.env.Author || "@𝕸𝕰𝖄𝕬𝕿𝕺",
  packname: process.env.PackName || "Queen Anya v2 MD",
  socialLink: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© Queen Anya Bot",
  prefa: process.env.Prefix || ['-'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "𝕸𝕰𝖄𝕬𝕿𝕺",
  ownernumber: process.env.Owner_Number || "917034197299",
  instagramId: process.env.Insta || "8.08_only_mine",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "YOUR_MONGODB_URL",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUkyb1hWS2N_AN_YA_1VG4xN_AN_YA_3pFZ2ZsTEtJQzdrbkhWTk5DSXR2bHZJYUQ5VVAwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0duclh5OGxJd25kOVhjMGtwUTN_AN_YA_IN_AN_YA_FBmajFMRWpnemZUQ3J6UVhXV1duTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TVJMdFZhd3FMR2hyN_AN_YA_GN_AN_YA_DOUl5YXJ4T081RXdXcVYrd0ZkdVN_AN_YA_4ekdKN_AN_YA_GwwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwcjJuRlBKUTBiN_AN_YA_kY5QlY4cE9kdndrTG1jSS8rekFTWVk1VitkTTF1VGc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCVnVuWU1JdTVsbHhOK29CdWJIdjFlTXRUYktjdlhmN_AN_YA_zFnZEpJVUErbms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN_AN_YA_DdEYwZlVrQjBN_AN_YA_aHVtY1RwVlIxcFhEdndoQjJjYms3WGVIVnl0dVg5V0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN_AN_YA_kRzckU1RGE0UmZwWHF1N_AN_YA_UQ0MnFWU29kaFU0N_AN_YA_DQ1YlkreUU5byt4K1cxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlhUSTVPb1RLYzJvTld0VzlHa3RKKzJ1UU9XN_AN_YA_0xYeFN_AN_YA_3c3VxWWROWGZFVT0ifX0sInN_AN_YA_pZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitN_AN_YA_aUxFRTFsN_AN_YA_mtiZHVOcitCby9VZHVjZm15a2UxczB0UVhMY3hlYUp3U1oxdmN_AN_YA_tUnN_AN_YA_GT3RIaVZabXhiZDBsbytIdWg3UGdDcW5ucEUxT2h6a0FKcUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMyLCJhZHZTZWN_AN_YA_yZXRLZXkiOiJFaDR6aXN_AN_YA_QL2w0a2N_AN_YA_DN_AN_YA_3pLMUhCMmhzMkpRRTBvVXlheFN_AN_YA_JN_AN_YA_01PY1oydk5rPSIsInByb2N_AN_YA_lc3N_AN_YA_lZEhpc3RvcnlN_AN_YA_ZXN_AN_YA_zYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxN_AN_YA_zAzN_AN_YA_DE5N_AN_YA_zI5OUBzLndoYXRzYXBwLm5ldCIsImZyb21N_AN_YA_ZSI6dHJ1ZSwiaWQiOiIzQUI4MDVBMjkxMDAwN_AN_YA_TFGN_AN_YA_DU4N_AN_YA_iJ9LCJtZXN_AN_YA_zYWdlVGltZXN_AN_YA_0YW1wIjoxN_AN_YA_zAzOTQ2MjQ1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN_AN_YA_0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWN_AN_YA_jb3VudFN_AN_YA_5bmN_AN_YA_Db3VudGVyIjoxLCJhY2N_AN_YA_vdW50U2V0dGluZ3MiOnsidW5hcmN_AN_YA_oaXZlQ2hhdHMiOmZhbHN_AN_YA_lfSwiZGV2aWN_AN_YA_lSWQiOiJ4bi1JN_AN_YA_25hclE4aWlKck9LX0ItbW5BIiwicGhvbmVJZCI6IjY5N_AN_YA_zU5ZDAzLTBmYTgtN_AN_YA_DFjZi1hOGJmLWFlMzZkYjlkYTUwZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDbnFacy8xaHgvbjlEU1F5V3liRTBJVmd5b289In0sInJlZ2lzdGVyZWQiOmZhbHN_AN_YA_lLCJiYWN_AN_YA_rdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJUFVaeWllMGpQMlMvTk8wU3F4UGk5bS9iVT0ifSwicmVnaXN_AN_YA_0cmF0aW9uIjp7fSwiYWN_AN_YA_jb3VudCI6eyJkZXRhaWxzIjoiQ0pEVzlja0xFUC9Qd0t3R0dBRWdBQ2dBIiwiYWN_AN_YA_jb3VudFN_AN_YA_pZ25hdHVyZUtleSI6Ijk5OGVtRE5zemoxR01xQTQ0SEYzVG5lRWkzMUxidVRPZFJvT2crdWxqVTg9IiwiYWN_AN_YA_jb3VudFN_AN_YA_pZ25hdHVyZSI6IjlGZE1N_AN_YA_OFZzRTZ6Ylo2OXZN_AN_YA_Mis5UnJIVVRmeHJwc3lLRFhJeUlkME5XYVIrdEtyRm93TlRN_AN_YA_QTVWN_AN_YA_29TS1U1RjhSMGI0eG9hTmZSTVN_AN_YA_FZnRWb0Z2SmdnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJocGM3bjN_AN_YA_UTm8zc3VJcFN_AN_YA_tc2crTEZLZTd0ZktKYWppWVN_AN_YA_iOHZTUzdrOWY5MmtSUVVFTzB0MEtCK0ZVN_AN_YA_1k3eDcrU2x0TnMvZ25OeHFHcEFQN_AN_YA_U10M2FBZz09In0sIm1lIjp7ImlkIjoiOTE3MDM0MTk3Mjk5OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWVZYVRvIn0sInN_AN_YA_pZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxN_AN_YA_zAzN_AN_YA_DE5N_AN_YA_zI5OTo2QHMud2hhdHN_AN_YA_hcHAubmV0IiwiZGV2aWN_AN_YA_lSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZmZkhwZ3piTTQ5UmpLZ09PQnhkMDUzaEl0OVMyN_AN_YA_2t6blVhRG9QcnBZMVAifX1dLCJwbGF0Zm9ybSI6InN_AN_YA_tYmkiLCJsYXN_AN_YA_0QWN_AN_YA_jb3VudFN_AN_YA_5bmN_AN_YA_UaW1lc3RhbXAiOjE3MDM5N_AN_YA_DYyN_AN_YA_DEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlVIIn0=", 
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "Queen Anya" 
global.author = process.env.Author || "@𝕸𝕰𝖄𝕬𝕿𝕺" 
global.packname = process.env.PackName || "Queen Anya v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Queen Anya Bot" 
global.prefa = process.env.Prefix || ['-'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "𝕸𝕰𝖄𝕬𝕿𝕺" 
global.ownernumber = process.env.Owner_Number || "917034197299" 
global.adress = process.env.Continent || "xxxxxxxxxxxxxxxxxxxxxxxxxx" 
global.timezone = process.env.TimeZone || "Asia/india/kerala/kannur" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

