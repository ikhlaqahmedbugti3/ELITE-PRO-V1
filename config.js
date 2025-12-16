require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"{"noiseKey":{"private":{"type":"Buffer","data":"KGnY92My5gBroruK02f2vzxHv1bd4HLhO+hR1Gpn80g="},"public":{"type":"Buffer","data":"LN1mDgQqx1wJa0t2aSYKom5G7Abmqi7hzH3CJYaPMQw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"OCR9FaFcZivZEI3uhcllOopfR+5P9ARKkWscecOX5EM="},"public":{"type":"Buffer","data":"5J04lmEh9Q70Erjd5l1+G1wuxAN4Y9R/Q+3AZ0hYx1U="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"8EXgSUGccIopZjrKA7jGvrr2l2M9YcRvQTIs+52FWX4="},"public":{"type":"Buffer","data":"np2ssOSJw/Jk/gfNi3RRz9/gzWxrv1e1O274rufxqmU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"+J0SMcZwOMAGx5qDp78A1r0OEKNm5xX8hnLQEPtVQk8="},"public":{"type":"Buffer","data":"6ISjYNvKAmO+MVo+3Sxww3VDPRE+/LcfKMRpvJ+VIls="}},"signature":{"type":"Buffer","data":"Aav6dMZoiHcWkJMd3LxjTz483871injPeZEybCiFndf1dhpNf0lmDsfPgGLd0AT+YOMY9FtlYLQCXPeB6bl7Cw=="},"keyId":1},"registrationId":194,"advSecretKey":"ERZBKo0gMlvbxoosGajZbkS7KzTWLiwNI7/XAjubHMQ=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":false,"account":{"details":"CJ79yowCEICyhMoGGAIgACgA","accountSignatureKey":"xqmmmHa53lrPy8rBlTStTl3tHD+p12HqeRM/O+ji3SU=","accountSignature":"NAu5Tf0oSFUxWQpmbp+/UXDqtBXxxQ1A9EIcQFJu+rPhRiNPBFA/irbIouipOxv68MBwgwGYu88yQAKwKD4sDw==","deviceSignature":"yFjxrmHguOSI+yx+j41sSE4RPZSM1CjaFgH0bGDb7SBL9e5PGvWgsW8vmAOPESqK2UQKlFDjDOLzyWQoGnD6Cg=="},"me":{"id":"923334104708:31@s.whatsapp.net","lid":"228277562130470:31@lid"},"signalIdentities":[{"identifier":{"name":"923334104708:31@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bcappph2ud5az8vKwZU0rU5d7Rw/qddh6nkTPzvo4t0l"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAUIAggN"},"lastAccountSyncTimestamp":1765873937,"lastPropHash":"1K4hH4"}"}';
global.ytname = process.env.YT_NAME || "YT: @none";
global.socialm = process.env.SOCIAL_M || "GitHub: ikhlaqahmedbugti3";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '923334104708';
global.ownername = process.env.OWNER_NAME || 'IKHLAQ AHMED';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1 by IKHLAQ';

// Default settings 
global.prefix = process.env.PREFIX || '-';
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
