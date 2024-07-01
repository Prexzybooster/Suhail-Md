const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ayprecious01@gmail.com"
global.location="Osogbo,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+ssuhail:suhail@cluster.cu90etc
.mongodb.net/?retryWrites=true&w=majorityrv://"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Prexzybooster/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaaUfPO8qIzztuf42D04";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaaUfPO8qIzztuf42D04" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c3367b00001035677cc6b.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY PREXZY👑" 


global.devs = "2349159895444" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349159895444";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/c3367b00001035677cc6b.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349159895444,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_18_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNixcbiAgICAgICAgNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc0LFxuICAgICAgICA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICA1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDcsXG4gICAgICAgIDcxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NixcbiAgICAgICAgNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg3LFxuICAgICAgICA5NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInRIRFlUMTZiWDRaT1ZjQllWNEJwT3F0aHFRejZOd3ZVdklyQ0RHZVJHUzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpKcmU5NkVsUTZLc0ZNM3RDejlrZkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDNhODRlZTItMWFhMi00MmQzLTgxZDMtOTBiMWQzZGNlYWJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDE2OCxcbiAgICAgIDM5LFxuICAgICAgMTA5LFxuICAgICAgNDcsXG4gICAgICAxMzcsXG4gICAgICAyMzQsXG4gICAgICA2OSxcbiAgICAgIDE1MyxcbiAgICAgIDYwLFxuICAgICAgMjEzLFxuICAgICAgMjA2LFxuICAgICAgMTM3LFxuICAgICAgMTU5LFxuICAgICAgMTQsXG4gICAgICAxNDksXG4gICAgICAyMjYsXG4gICAgICAxNDAsXG4gICAgICAyMjAsXG4gICAgICAyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAyNTMsXG4gICAgICAxMTQsXG4gICAgICAyMzgsXG4gICAgICAxNTAsXG4gICAgICAxMCxcbiAgICAgIDE5MixcbiAgICAgIDE0NCxcbiAgICAgIDk3LFxuICAgICAgMjMyLFxuICAgICAgMjI4LFxuICAgICAgNzAsXG4gICAgICAxMjMsXG4gICAgICA1OCxcbiAgICAgIDk3LFxuICAgICAgMTk2LFxuICAgICAgMTU0LFxuICAgICAgMjM3LFxuICAgICAgMzgsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSNFFESE44Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1OTg5NTQ0NDozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjcwOTY0ODI0NzE5NTg6MzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzdncktBSEVLTzZqTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCdi8xaVRQQ0dBNzh4NTMzekFLRnNldnh4L1owSHZDMlZ3cUtJUHUwWEJjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlEyZFJYc3o5VVZwek0vZWhPQUN6RmdqcEhFVVMzZy9md3NpY2FiWk9FQnFmWG5IOGZOVFFCT2dWc1Q0akxpcUNrV3BXd2RtblA4OXFnejcxQnRqbUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInAyYytQNmRTL2JZcWhWQXFJR1g3Q3VLd3RPczY0N0I4Z2hmQ2FJNVZyYk1nbDErZllrSitiSW10aHVZZHdjQ2wwYTQ5NldjOFVFby9iTktvOUZnTUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTk4OTU0NDQ6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTg2ODcxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBWTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFZOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNWpVTnJBa3VleDZFajViOEphaitZNlUxQTZteXpXbVR5dk9sd1Y4WWpLST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ2ODkwMzQ4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "POWERED BY PREXZY👑" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "PREXZY",
  packname: process.env.PACK_NAME || "PREXZY",
  botname : process.env.BOT_NAME  || "PREXZY BOT",
  ownername:process.env.OWNER_NAME|| "PRECIOUS AYOMIDE👑",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
