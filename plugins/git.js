const Kelly = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Kelly.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/6pfzK9s.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `πΎπΈπΏπΏπ ππππΏ


*πΎππ½ππ π½ππΌπ±π΄π* :https://wa.me/919947511243.


*πΊπ΄π»π»π πΌππΎπ» πΆππΎππΏ* :https://chat.whatsapp.com/EXjFwp6nhYm36uxUyLvaHM


*πΆπΈπ π»πΈπ½πΊ* : https://github.com/FAYA-SER/KELLY-MWOL.

β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘
π²ππππ π΄πππ πͺππππππ π©π π­ππππ πππ π«

`}) 

}));
