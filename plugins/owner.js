const Kelly = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Kelly.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '919947511243-1634557305@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'*β€οΈMAALUTTYπ created by Nijin and husni*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\nπΎππππ¦ ππ€ππ π΅π¦ πΉππ¦ππ  πππ', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Kelly.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '919947511243-1634557305@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'*πΎππππ¦ ππ€ππ π΅π¦ πΉππ¦ππ  πππ*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\nπΎππππ¦ ππ€ππ π΅π¦ πΉππ¦ππ  πππ', MessageType.text);
        }
    }));
}
