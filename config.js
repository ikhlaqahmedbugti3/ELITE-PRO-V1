require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"aE2SlkMxdHIUOM1n3heK/67oLNhaUENDq3XBMfoQHGU="},"public":{"type":"Buffer","data":"7KjWdzpnViaKeM63cf6c+5ZIlWWCC/Krl2FMgKu0UAY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"cGotKBCySt6fjYmQ/es8YUJ2wmbIHXwdd9FynRjTXUc="},"public":{"type":"Buffer","data":"Ag/+hR8kS8rzlt7r/Vr+2gd7/dRyuJUymK7jCqH1M2k="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"8JNGJ1AzBh+ITtIm1dVyA8Y7a88T/rt6/xy4Xt9QBWg="},"public":{"type":"Buffer","data":"DzMCBDZIT967QDnXzt2l8bn8w3vS9VtXEf1yl+f9biQ="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"+EJKBMN5pYrgu3Wk+bMKKmnnzpZLCulap2nXY1+TPnw="},"public":{"type":"Buffer","data":"2KRflyQDd53vR/TVzd0+em1gzjaEWPJyqpiBLUTvlCg="}},"signature":{"type":"Buffer","data":"a/5SZhT6hNmLUVxxIRbxl/Uso4Bnr9hh9EEq59Ei8+lvEdygmcbDu7eBaalzaXZ5aYbTrM99PRzsQWx1u9D6Dg=="},"keyId":1},"registrationId":20,"advSecretKey":"oeTyyBXIEUokuAlnKVNA25+fTOxRhyuMDV8TyaDKBsg=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"K5H5D58X","me":{"id":"923334104708:28@s.whatsapp.net","lid":"228277562130470:28@lid"},"account":{"details":"CJr9yowCEPvo+ckGGAMgACgA","accountSignatureKey":"xqmmmHa53lrPy8rBlTStTl3tHD+p12HqeRM/O+ji3SU=","accountSignature":"TdFMZpZjuKr1su/RnJsDpe6dB4zbv8SP9KrG3LDinaoAYvvwLA61FYTKEhtJ22+HDwodM4VSPGX8Gv3wtPo0AA==","deviceSignature":"yYGLC29XuuZITJzhVtJcQDa557mu4RkEf2u3YWWVw34RJJMz/17yvhxEWZGalermviDWgnDF1gIAJ+7w8ih1Dg=="},"signalIdentities":[{"identifier":{"name":"923334104708:28@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bcappph2ud5az8vKwZU0rU5d7Rw/qddh6nkTPzvo4t0l"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAUIAggN"},"lastAccountSyncTimestamp":1765700740,"lastPropHash":"1K4hH4"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: ikhlaqahmedbugti3";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '923334104708';
global.ownername = process.env.OWNER_NAME || 'IKHLAQ AHMED';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +923334104708';
// Default settings 2
global.wm = process.env.WM || "Youtube @none";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VbApcP5JP2187ayAx52x';

// Reply messages
global.mess = {
    done: '✅ Task completed successfully!',
    prem: '⚠️ Access denied. This feature is for premium users only.',
    admin: '⚠️ Admin privileges required to perform this action.',
    botAdmin: '⚠️ I need to be an admin in this chat to execute this command.',
    owner: '⛔ Command restricted to the bot owner.',
    group: 'ℹ️ This command can only be used in group chats.',
    private: 'ℹ️ This command can only be used in private chats.',
    wait: '⏳ Processing your request... Please wait a moment.',
    error: '❌ An unexpected error occurred. Please try again later.',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
