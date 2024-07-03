require('./hwkal')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fetch = (...init) => import('node-fetch').then(({default: fetch}) => fetch(...init));
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { JSDOM } = require('jsdom')
const { apikey } = require('./apikey.json')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const acrcloud = require('acrcloud')
const primbon = new Primbon()
const hxz = require('hxz-api')
const ytdl = require("youtubedl-core")
const gtts = require('node-gtts')
const yts = require("youtube-yts")
const path = require('path')
const { exec, spawn, execSync } = require("child_process")
const { dellCase } = require('./lib/dellCase.js')
const menunya = fs.readFileSync('./thumbnail/KyuuTzy.png')
const prik = fs.readFileSync('./thumbnail/Ikeh.jpg')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention,generateProfilePicture, getRandom,formatp, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let premium = JSON.parse(fs.readFileSync('./premium.json')); 
const { remini } = require('./freya/remini')
const thumbnail = fs.readFileSync ('./thumbnail/Ikeh.jpg')
const thumb = fs.readFileSync ('./thumbnail/Ikeh.jpg')
const kalimage = fs.readFileSync ('./thumbnail/Ikeh.jpg')
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const _prem = require("./premium");
const uploadImage = require('./lib/uploadImage')
const uploadFile = require('./lib/uploadFile')
const ownerNumber = JSON.parse(fs.readFileSync("./owner.json"))

const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const pler = JSON.parse(fs.readFileSync('./database/idgrup.json').toString())
const banned = JSON.parse(fs.readFileSync('./baseikal/dbnye/banned.json'))
const scraper = require("./lib/scraper")
const mark = `0@s.whatsapp.net`
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const conv = require("./lib/converter")
const { ytid, ytal, gethd, getdj, ytshort, yt, } = scraper
const { youtubedl, youtubedlv2, youtubeSearch } = require('scraper')
let timestamp = speed()
let latensi = speed() - timestamp
let acr = new acrcloud({
	host: "identify-eu-west-1.acrcloud.com",
    access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
    access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
})
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))

//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 const { isGroup } = m
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const botNumber = await haikal.decodeJid(haikal.user.id)
const jangan = m.isGroup ? pler.includes(m.chat) : false
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]

   

     const isBot = botNumber.includes(senderNumber)
const groupMetadata = m.isGroup ? await haikal.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const wlcm = m.isGroup ? global.wlcm : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isContacts = contacts.includes(sender)
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const content = JSON.stringify(m.message)
const isOwner = ownerNumber.includes(senderNumber) || isBot
const isPremium = isOwner ? true : _prem.checkPremiumUser(m.sender, premium)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const bii = JSON.parse(fs.readFileSync('./baseikal/dbnye/wihh.json').toString())
const isSeler = [botNumber, ...bii].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtod = m.quoted? "true":"false"
//=================================
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const tanggal = moment().tz("Asia/Jakarta").format("ll")
if (budy.startsWith("@6282373608217")){
const { sticker5 } = require('./lib/stickerr.js')
let owner = fs.readFileSync('./thumbnail/owner.png')
let snya = await sticker5(owner, false, `Created By ${global.botname}\n${tanggal}`, `Owner ${global.ownername}\nTime ${time}`)
if (snya) return haikal.sendFile(m.chat, snya, "Quotly.webp", "", m)}
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var xeonytimewisher = `Selamat Malam 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Selamat Malam 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Selamat Malam 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Selamat Sore 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Selamat Pagi 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Selamat Pagi 🌄`
}
     function hitungmundur(tanggal, bulan, tahun){

let from = new Date(`${bulan} ${tanggal}, ${tahun} 00:00:00`).getTime();

let now = Date.now();

let distance = from - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));

let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

let seconds = Math.floor((distance % (1000 * 60)) / 1000);

return days + ' Hari ' + hours + ' Jam ' + minutes + ' Menit ' + seconds + ' Detik'

}
     let glupp = hitungmundur(04, 09, 2024) 
let chats = global.db.data.chats[from]

const fkontak = {

  key: {

fromMe: false,

participant: "0@s.whatsapp.net",

...(m.chat ? { remoteJid: `0@s.whatsapp.net` } : {}),

  },

  message: {

extendedTextMessage: {

  text: "_Muzanaire Terverifikasi Oleh WhatsApp_",

  title: `Hmm`,

  jpgThumbnail: fs.readFileSync("./thumbnail/KyuuTzy.png"),

}}};         
//antiviewonce
    if ( global.antiviewonce && m.mtype == 'viewOnceMessageV2') {

        let val = { ...m }

        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message

        delete msg[Object.keys(msg)[0]].viewOnce

        val.message = msg

        await haikal.sendMessage(m.chat, { forward: val }, { quoted: fkontak })

    }
    const totalFitur = () =>{

var mytext = fs.readFileSync("./haikal.js").toString()

var numUpper = (mytext.match(/case '/g) || []).length;

return numUpper

}
//autodownload
        if (global.autodownload && !m.key.fromMe) {
try {
if (budy.match(`instagram.com`)) {
await haikal.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
haikal.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Auto Download ✅`}, {quoted: fkontak})
await haikal.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await haikal.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
haikal.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Auto Download ✅`}, {quoted: fkontak})
await haikal.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await haikal.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
haikal.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Auto Download ✅`}, {quoted: fkontak})
await haikal.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await haikal.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
haikal.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: fkontak})
await haikal.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await haikal.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
if (global.autobio) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
            haikal.updateProfileStatus(`I am ${namasc} | Aktif Selama ${uptime}| Mode : ${haikal.public ? 'Public-Mode' : 'Self-Mode'} | User : ${pengguna.length}`).catch(_ => _)
        }
//===============//}
const cap = 'HW MODS WA'
const kalgans = { 
key: {
fromMe: [], 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) 
},

'message': {
	"interactiveMessage": {
						"header": {
						
							"hasMediaAttachment": [],
							"jpegThumbnail": thumb,
													},
						"nativeFlowMessage": {
							"buttons": [
								{
									"name": "review_and_pay",
									"buttonParamsJson": "{\"currency\":\"IDR\",\"external_payment_configurations\":[{\"uri\":\"\",\"type\":\"payment_instruction\",\"payment_instruction\":\"hey ini test\"}],\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":2500000,\"offset\":100},\"reference_id\":\"4MX98934S0D\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":2500000,\"offset\":100},\"items\":[{\"retailer_id\":\"6348642505244872\",\"product_id\":\"6348642505244872\",\"name\":\"RAFATHAR OFFCIAL\",\"amount\":{\"value\":2500000,\"offset\":100},\"quantity\":1}]}}"
								}
							]
			}
}}}
//=================================================
const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}
}
const fvrif = {
  key: {
fromMe: false,
participant: "0@s.whatsapp.net",
...(m.chat ? { remoteJid: `0@s.whatsapp.net` } : {}),
  },
  message: {
extendedTextMessage: {
  text: "_Muzanaire Terverifikasi Oleh WhatsApp_",
  title: `Hmm`,
  jpgThumbnail: fs.readFileSync("./thumbnail/Ikeh.jpg"),
}}};
async function reply (text) {
haikal.sendMessage(m.chat, {
document: fs.readFileSync("./lib/jomok.js"),
fileName: 'Muzan TECH',
caption: text,
mimetype: 'application/html',
headerType: 9,
jpegThumbnail:fs.readFileSync("./thumbnail/Ikeh.jpg"),
contextInfo:{
mentionedJid: [m.sender, mark],
    externalAdReply:{
title: 'Muzan TECH',
body: 'In hoc maledicto mundo pax',
thumbnail: menunya,
showAdAttribution: true,
mediaType:1,
"MediaUrl": prik,
sourceUrl: 'https://Instagram/@17_muzan'
}}}, { quoted: fvrif});
}
function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
    }
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
// Jangan Di Edit Tar Error

let list = []
for (let i of ownerNumber) {
list.push({
	    	displayName: await haikal.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await haikal.getName(i)}\nFN:${await haikal.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
async function Telesticker(url) {
  return new Promise(async (resolve, reject) => {
    if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi))
       m.reply("Enther your url telegram sticker");
   let packName = url.replace("https://t.me/addstickers/", "");
   let data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`,
      { method: "GET", headers: { "User-Agent": "GoogleBot" } },
    );
    const hasil = [];
    for (let i = 0; i < data.data.result.stickers.length; i++) {
     let fileId = data.data.result.stickers[i].thumb.file_id;
     let data2 = await axios(
        `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`,
      );
      let result = {
        status: 200,
        author: "Xfarr05",
        url:
          "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" +
          data2.data.result.file_path,
      };
      hasil.push(result);
    }
    resolve(hasil);
  });
}
const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await haikal.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}
//=================================================
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await haikal.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}
this.autosholat = this.autosholat ? this.autosholat : {}
    let id = m.chat
    if (id in this.autosholat) {
        return false
    }
    //let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=8")).json();
    //let jadwalSholat = data.data.timings;
    let jadwalSholat = {
        Fajr: "04:40",
        shubuh: "04.40",
        shubuh: "04.41",
        dhuha: '09:30',
        dhuha: '09:31',
        dzuhur: "12:01",
        dzuhur: "12:02",
        ashar: "15:22",
        ashar: "15:23",
        Sunset: "17.40",
        Maghrib: "18.04",
        Maghrib: "18.05",
        isya: "19:11",
        isya: "19:12",
        Imsak: "04:30",
        Midnight: "00:00",
        Firstthird: "22:07",
        Lastthird: "02:06"
    }
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
            let caption = `Hai Kak ${muzan}@${sender.split("@")[0]}${muzan}\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Palembang dan sekitarnya._`
            this.autosholat[id] = [
                reply(caption),
                setTimeout(() => {
                    delete this.autosholat[id]
                }, 57000)
            ]
        }
    }
//=================================================
const {
    updateResponList,
    delResponList,
    isAlreadyResponListGroup,
    sendResponList,
    isAlreadyResponList,
    getDataResponList,
    addResponList,
    renameList
    } = require("./lib/store")
    const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
if (isAlreadyResponList((m.isGroup ? m.chat : botNumber), body.toLowerCase(), db_respon_list)) {
            var get_data_respon = getDataResponList((m.isGroup ? m.chat : botNumber), body.toLowerCase(), db_respon_list)
            if (get_data_respon.isImage === false) {
                haikal .sendMessage(m.chat, { text: sendResponList((m.isGroup ? m.chat : botNumber), body.toLowerCase(), db_respon_list) }, {
                    quoted: m
                })
            } else {
                haikal .sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: m
                })
            }
        }
if (autodelete) {
haikal.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: mek.key.id,
participant: mek.key.participant
}
})
}
//=================================================
//=================================================//
if (!haikal.public) {
if (!m.key.fromMe) return
}
if (m.message) {
haikal.sendPresenceUpdate(from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}
// Anti Link
if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await haikal.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isOwner) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await haikal.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
haikal.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:hw})
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
     const XeonStickWait = () => {
        let XeonStikRep = fs.readFileSync('./sticker_reply/wait.webp')
        haikal.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickAdmin = () => {
        let XeonStikRep = fs.readFileSync('./sticker_reply/admin.webp')
        haikal.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickBotAdmin = () => {
        let XeonStikRep = fs.readFileSync('./sticker_reply/botadmin.webp')
        haikal.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickOwner = () => {
        let XeonStikRep = fs.readFileSync('./sticker_reply/owner.webp')
        haikal.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickGroup = () => {
        let XeonStikRep = fs.readFileSync('./sticker_reply/group.webp')
        haikal.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickPrivate = () => {
        let XeonStikRep = fs.readFileSync('./sticker_reply/private.webp')
        haikal.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
//=================================================//
if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await haikal.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const sendapk = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:fkontak})
reply('*Rusak Bodoh !! Yang Bener Contoh : Yoapk HW MODS WA*')
}
for (let ikalii of apknye) {
if (budy === ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii}.apk`)
sendapk(buffer)
}
}
//=================================================//
const sendzip = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:fkontak})
reply('*Rusak Bodoh !! Yang Bener Contoh : Yozip HW MODS WA*')
}
for (let ikali of zipnye) {
if (budy === ikali) {
let buffer = fs.readFileSync(`./database/zip/${ikali}.zip`)
sendzip(buffer)
}
}
//=================================================//
const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:fkontak})
reply('*Rusak Bodoh !! Yang Bener Contoh : Yopdf HW MODS WA*')
}
for (let ikal of docunye) {
if (budy === ikal) {
let buffer = fs.readFileSync(`./database/Docu/${ikal}.pdf`)
senddocu(buffer)
}
}
const sendvn = (teks) => {
haikal.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, {quoted:fkontak})
}

for (let anju of vnnye) {
if (budy === anju) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}
//=================================================//
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await haikal.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 
//=================================================//
if (('family100'+from in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+from]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
haikal.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+from]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:fkontak}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:fkontak})
 delete tebakgambar[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:fkontak})  
 delete tebakkata[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:fkontak}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:fkontak}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:fkontak}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:fkontak}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await haikal.sendText(room.x, str, m, { mentions: parseMention(str) } )
await haikal.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
haikal.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
haikal.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) haikal.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) haikal.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) haikal.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
haikal.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) haikal.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) haikal.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
haikal.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
switch(command) {
case 'menu':{
if (!text) return reply(`Hai Kak ${muzan}${pushname}${muzan}, ${xeonytimewisher}, Saya seorang botz WhatsApp yang hadir dengan fitur-fitur keren seperti unduh tiktok, membuat stiker, mencari lagu, dan masih banyak lagi.

${muzan}[I N F O - B O T]${muzan}

> • *Bot Name* : *${botname}*
> • *Mode* : *${haikal.public ? 'Public' : 'Self'}*
> • *Status* : *${isPremium ? 'Premium' : 'Freemium'}*
> • *My Birthday* : *${glupp}*
> • *Jam* : *${jam}*
> • *Tanggal* : *${tanggal}*
> • *Speed* : *${latensi.toFixed(4)} Ms*
> • *Ram* : *${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}*
> • *User* : *${pengguna.length}*

${muzan}[I N F O - S C R I P T]${muzan}

> *Nama Script : ${global.namasc}*
> *Versi Script : ${global.versisc}*
> *Version : ${baileysVersion}*
> *Type : Case*
> *Baileys : ${TypeBaileys}*
> *Runtime : ${runtime(process.uptime())}*

 ${muzan}[Owner Menu]${muzan}
${readmore}
┌ • addowner
│ • delowner
│ • addcase
│ • delcase
│ • getcase
│ • getpp
│ • getfunc
│ • addprem
│ • delprem 
│ • listprem
│ • sampah
│ • delsampah
│ • clearsession
│ • antiviewonce on/off
│ • autodl on/off
│ • autobio on/off
│ • autoswview on/off
│ • bcgc 
│ • buatsw
│ • buatswimage
│ • buatswvideo
│ • sethumb
│ • swin
│ • vnsw
│ • buatswptv
│ • toptv
│ • buatsws
│ • getsw
│ • upsw
│ • backup
│ • $
│ • >
└ • =>

 ${muzan}[Group Menu]${muzan}
┌ • welcome on / off
│ • antilink on / off
│ • antitoxic on / off
│ • cekasalmember
│ • kudeta
│ • hidetag 
│ • kick 
│ • add 
│ • promote 
│ • demote 
│ • sendlinkgc 
│ • group open/close
│ • editgroup close / open
│ • editinfo on / off
│ • join 
│ • editsubjek 
│ • editdesk 
│ • tagall 
│ • inspect 
│ • linkgroup
│ • resetlinkgc
│ • promoteall
│ • demoteall
└ • larangan

 ${muzan}[Download Menu]${muzan}
 ${readmore}
┌ • tiktok
│ • tiktok2
│ • tiktok3
│ • tiktok4
│ • tiktokslide
│ • play
│ • spotify
│ • facebook
│ • fbvideo 
│ • fbreels 
│ • mediafire
│ • igstory
│ • igdl
│ • igdl2
│ • igvideo 
│ • igreels
│ • twitvideo 
│ • ytmp3 
│ • ytmp4 
│ • ytsearch 
│ • remini 
│ • hdvid
│ • hdrvid
│ • ytreels 
│ • telestick
│ • whatmusic
│ • whatmusic2
│ • whatsong
│ • getmusic
└ • getvideo 

 ${muzan}[Panel Menu]${muzan}
┌ • addseller 
│ • delseller 
│ • listseller
│ • setapipanel
│ • addgc
│ • delgc
│ • panel
│ • listusr
│ • delusr
│ • listsrv
│ • delsrv
│ • ramlist
│ • addusr
│ • addsrv
│ • crateadmin
└ • listadmin

 ${muzan}[Random Menu]${muzan}
┌ • owner
│ • ping
│ • disk
│ • ram
│ • ffch
│ • tozombie
│ • toanime
│ • removebg
│ • sticker
│ • sewa
│ • nope
│ • lispanel
│ • tutorial
│ • ocr
│ • wm
│ • wmvideo
│ • readmore
│ • spoiler
│ • emojimix
│ • emojimix2
│ • attp 
│ • ttp 
│ • afk 
│ • gambar 
│ • quotesanime
│ • faktaunik
│ • katabijak
│ • pantun
│ • bucin
│ • toimage
│ • tomp4
│ • tomp3
│ • toaud
│ • tovn
│ • toaudio
│ • togif
│ • tourl
│ • tinyurl
│ • shortlink
│ • smeme
│ • quotes
│ • darkjokes
│ • google
│ • pin
│ • ekuning
│ • dino
│ • kuromi
│ • pucoyo
│ • couple
│ • coffe
│ • getname
│ • getpic
│ • setppbot
│ • pppanjang
│ • setppgroup
│ • block
│ • unblock
│ • stalktiktok
│ • infogempa
│ • lirik
│ • cerpen
│ • qc
│ • qcimg
│ • ceritahoror
│ • createqr
└ • cuaca

 ${muzan}[Islam Menu]${muzan}
┌ • jadwalsholat
│ • kisahnabi
│ • alquranaudio
│ • asmaulhusna
│ • alquran
└ • listsurah

 ${muzan}[Add Menu]${muzan}
┌ • setcmd
│ • delcmd
│ • listcmd
│ • setppbot
│ • addpdf
│ • delpdf
│ • listpdf
│ • yopdf
│ • sendpdf
│ • addzip
│ • delzip
│ • listzip
│ • yozip
│ • sendzip
│ • addapk
│ • delapk
│ • listapk
│ • yoapk
│ • sendapk
│ • addvn
│ • delvn
│ • listvn
│ • addmsg
│ • sendlist
│ • listmsg
│ • delmsg
└ • getmsg

${muzan}[Berita Menu]${muzan}
┌ • fajar
│ • cnn
│ • layarkaca
│ • cnbc
│ • tribun
│ • indozone
│ • kompas
│ • detik
│ • daily
│ • inews
│ • okezone
│ • sindo
│ • tempo
│ • antara
│ • kontan
│ • merdeka
└ • jalantikus-meme

 ${muzan}[Game Menu]${muzan}
┌ • ᴛᴛᴄ
│ • ᴅᴇʟᴛᴄ
│ • ꜱᴜɪᴛᴘᴠᴘ
│ • ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
│ • ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
│ • ᴛᴇʙᴀᴋ ʟɪʀɪᴋ
│ • ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ
│ • ᴛᴇʙᴀᴋ ʟᴀɢᴜ
│ • ᴛᴇʙᴀᴋ ʟᴏɴᴛᴏɴɢ
│ • ꜰᴀᴍɪʟʏ100
│ • ᴋᴜɪꜱᴍᴀᴛʜ ɴᴏᴏʙ
│ • ᴋᴜɪꜱᴍᴀᴛʜ ᴇᴀꜱʏ
│ • ᴋᴜɪꜱᴍᴀᴛʜ ᴍᴇᴅɪᴜᴍ
│ • ᴋᴜɪꜱᴍᴀᴛʜ ʜᴀʀᴅ
│ • ᴋᴜɪꜱᴍᴀᴛʜ ᴇxᴛʀᴇᴍᴇ
│ • ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ
└ • ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ2

${muzan}[Store Menu]${muzan}
 ${readmore}
┌ • list
│ • addlist
│ • dellist
└ • updatelist

 ${muzan}[Openai Menu]${muzan}
 ${readmore}
┌ • ai
│ • ai2
│ • aivoice
│ • bard
│ • gemini
└ • sindy

 ${muzan}[Anonymous Menu]${muzan}
 ${readmore}
┌ • confess/menfess
│ • balas/terima
│ • tolak
└ • stop

 ${muzan}[Menu Pushkontak]${muzan}
┌ • jpm 
│ • jpm2 
│ • idgc
│ • listidgc
│ • cekidgc
│ • listgroup
│ • ceknamagc
│ • infogc
│ • pushkontakid 
│ • pushkontakgc 
│ • pushkontakidjd 
│ • pushkontakgcjd 
│ • savecontactid 
│ • savecontactgc
│ • savekontak
│ • sendkontak
└ • savenama

 ${muzan}[Voice Changer Menu]${muzan}
┌ • bass
│ • blown
│ • deep
│ • earrape
│ • fast
│ • fat
│ • nightcore
│ • reverse
│ • robot
│ • slow
│ • smooth
│ • tupai
└ • smooth

${muzan}[ FITUR ]${muzan}
${muzan}${totalFitur()}${muzan}

> Created By *@${mark.split("@")[0]}*`
)
    }
break
case'stalkwa':{
  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
  const PhoneNum = require('awesome-phonenumber');
  let num = m.quoted?.sender || m.mentionedJid?.[0] || text;
  if (!num) return m.reply(`*Example*: @tag / 628xxx`);
  num = num.replace(/\D/g, '') + '@s.whatsapp.net';
  if (!(await haikal.onWhatsApp(num))[0]?.exists) return m.reply('User not exists');
  let img = await haikal.profilePictureUrl(num, 'image').catch(_ => 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png');
  let bio = await haikal.fetchStatus(num).catch(_ => {});
  let name = await haikal.getName(num);
  let business = await haikal.getBusinessProfile(num);
  let format = PhoneNum(`+${num.split('@')[0]}`);
  let country = regionNames.of(format.getRegionCode('international'));
  let wea = `• *Whatsapp*\n\n• *Country :* ${country.toUpperCase()}\n*• Name :* ${name ? name : '-'}\n*• Format Number :* ${format.getNumber('international')}\n*• Url Api :* wa.me/${num.split('@')[0]}\n*• Mentions :* @${num.split('@')[0]}\n*• Status :* ${bio?.status || '-'}\n*• Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `\t\t\t\t• *Info Bussines*\n\n• BusinessId :* ${business.wid}\n*• Website :* ${business.website ? business.website : '-'}\n*• Email :* ${business.email ? business.email : '-'}\n*• Category :* ${business.category}\n*• Address :* ${business.address ? business.address : '-'}\n*• Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*• Description* : ${business.description ? business.description : '-'}` : 'Standard WhatsApp Account'}`;
  if (img) {
    await haikal.sendMessage(m.chat, {
      image: { url: img },
      caption: wea,
      mentions: [num]
    }, { quoted: m });
  } else {
     m.reply(wea);
  }
};
break
case'telestick':{
  if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
    let res = await Telesticker(args[0]);
    await  m.reply(`Sending ${res.length} stickers...`);
    if (m.isGroup && res.length > 30) {
      await  m.reply(
        "Number of stickers more than 30, bot will send it in private chat.",
      );
      for (let i = 0; i < res.length; i++) {
      let encmedia = await haikal.sendImageAsSticker(m.sender, res[i].url, m, { packname: packname, author: author})
      await fs.unlinkSync(encmedia)
      }
    } else {
      for (let i = 0; i < res.length; i++) {
      let encmedia = await haikal.sendImageAsSticker(m.chat, res[i].url, m, { packname: packname, author: author });
      await fs.unlinkSync(encmedia)
      }
    }
  } return reply("Input Query / Telesticker Url");
    }
break
case "confess": case 'menfes': case 'menfess': case "confes": {
            	if (!quoted) return reply(`cie mau anuu`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                let mq1 = m1 + '@s.whatsapp.net'
                this.menfes = this.menfes ? this.menfes : {}
                roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
                if (roof) return reply("Kamu masih berada dalam sesi menfess")
                if (m.isGroup) return reply('Fitur Khusus Di private chat!')
                if (!text) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6282373608217|Menfes nih\n`)
                if (!text.includes('|')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6282373608217|Menfes nih\n`)
                let [namaNya, nomorNya, pesanNya] = text.split`|`
                if (nomorNya.startsWith('0')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6282373608217|Menfes nih\n`)
                if (isNaN(nomorNya)) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6282373608217|Menfes nih\n`)
                var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\n${prefix}Ketik balas/terima untuk membalas pesan\n${prefix}Ketik tolak untuk menolak\n\n_Pesan ini di tulis oleh seseorang, bot hanya menyampaikan saja_`
                let tod = await getBuffer('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU')
                const buttons = [{
                    buttonId: `.balas ${m.sender}`,
                    buttonText: {
                        displayText: ' Balas'
                    },
                    type: 1
                }, {
                    buttonId: `.tolak ${m.sender}`,
                    buttonText: {
                        displayText: 'Tolak '
                    },
                    type: 1
                }]
                let id = m.sender
                this.menfes[id] = {
                    id,
                    a: m.sender,
                    b: nomorNya + "@s.whatsapp.net",
                    state: 'WAITING'
                }
                await haikal.sendMessage(nomorNya + '@s.whatsapp.net', { image: tod, caption: yoi }, {})
                reply(`Pesan Telah Terkirim\nKe @${mq1.split('@')[0]}`)
            }
                break
                case 'balas': case 'terima': { 	
                roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
                if (!roof) return reply("Belum ada sesi menfess")
                find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
                let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
                let other = [room.a, room.b].find(user => user !== m.sender)
                find.b = m.sender
                find.state = 'CHATTING'
                this.menfes[find.id] = { ...find }
                await haikal.sendMessage(other, { text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stop`, mentions: [m.sender] })
                haikal.sendMessage(m.chat, { text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stop` })
            }
                break
                case 'tolak': {
                roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
                if (!roof) return reply("Belum ada sesi menfess")
                let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
                let other = [room.a, room.b].find(user => user !== m.sender)
                find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
                haikal.sendMessage(other, { text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender] })
                reply("Menfess berhasil di tolak ")
                delete this.menfes[roof.id]
            }
                break
                case "stop": {
                find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
                if (!find) return reply("Belum ada sesi menfess")
                const to = find.a == m.sender ? find.b : find.a
                haikal.sendMessage(to, { text: `_Teman chat telah menghentikan menfess ini_`, mentions: [m.sender] })
                await reply("Ok")
                delete this.menfes[find.id]
            }
                break
case 'sampah':
if (!isOwner) return reply(`lu owner`)
let all = await fs.readdirSync('./lib' && './')
var teks = `JUMLAH SAMPAH SYSTEM\n\n`
teks += `Total : ${all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(v=>v).length} Sampah\n\n`
teks += all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(o=>`${o}\n`).join("");
reply(teks)
break
case 'delsesi':
case 'clearsession':{
if (!isOwner) return reply(`*Access Denied ❌*\n\n*Owners only*`)
fs.readdir("./Session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("Session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return reply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
reply(teks)
reply("Menghapus file sampah...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./Session/${file}`)
});
reply("Berhasil menghapus semua sampah di folder Session")
});
}    
break
case 'delsampah':{
if (!isOwner) return reply("Fitur Khusus Owner")
let directoryPath = path.join('./lib' && './')
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return reply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("bin") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return reply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
reply(teks)
reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./lib/${file}`) && (`./${file}`) 
});
reply("Berhasil menghapus semua sampah")
});
}
let kontollo = path.join('./lib' && './')
fs.readdir(kontollo, async function (err, files) {
if (err) {
return reply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("bin") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./lib/${file}` && `./${file}`)
});
});
break
case 'spoiler':
case 'readmore':
case 'selengkapnya': {
if (!quoted) return reply(`masukan text contoh ${command} kamujelek|tapii boong`)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
reply(l + readmore + r)
}
break
case 'group':
            case 'grup': {
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                if (!isAdmins) return reply('Fitur Khusus admin!')
                if (args[0] === 'close') {
                    await haikal.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`*Successfully Closed The Group*`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await haikal.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`*Successfully Opened The Group*`)).catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix + command} open/close\n\nContoh: ${prefix + command} open`)
                }
            }
                break
                case 'whatmusic2':{
let acr = new acrcloud({
  host: "identify-eu-west-1.acrcloud.com",
  access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
  access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR",
})
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) {
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `

𝚁𝙴𝚂𝚄𝙻𝚃

• 📌 *TITLE*: ${title}
• 👨‍🎤 𝙰𝚁𝚃𝙸𝚂𝚃: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'NOT FOUND'}
• 💾 𝙰𝙻𝙱𝚄𝙼: ${album.name || 'NOT FOUND'}
• 🌐 𝙶𝙴𝙽𝙴𝚁: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'NOT FOUND'}
• 📆 RELEASE DATE: ${release_date || 'NOT FOUND'}

`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
 m.reply(txt)
} else  m.reply('*𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝙰𝚄𝙳𝙸𝙾*')
}
break
case'getpp':{
if (!text) return reply(`Example: ${prefix + command} [Tag Orang]`)
try {
let who
	if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
	else who = `${text}`
	let url = await haikal .profilePictureUrl(who, "image");
	await haikal .sendFile(
		m.chat,
		url,
		"profile.jpg",
		`@${who.split`@`[0]}`,
		m,
		null,
		{ mentions: [who] }
	)}catch (error) {
 m.reply(`Tidak Dapat Mengambil Foto Profile`);
    }
}
break
case 'whatmusic':{
    if (!m.quoted) return reply(`Reply audio/video with command ${prefix + command}`)
		let buffer = await m.quoted.download
		let { status, metadata } = await acr.identify(buffer)		
		let { title, artists, album, genres, release_date } = metadata.music[0]
		let txt = `*• Title:* ${title}${artists ? `\n*• Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`
		txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`
		txt += `*• Release Date:* ${release_date}`
		m.reply(txt.trim())
		}
break
//=================================================////=================================================//
//=================================================//
 case 'getfunc':
if (!isOwner) return reply("lu siapa njr?")
if (!q) return m.reply(`Contoh penggunaan: ${prefix + command} reply`)
const getfunc = (funcc) => {
return "const "+`'${funcc}'`+fs.readFileSync('./haikal.js').toString().split('const \''+funcc+'\'')[1].split('')
}
 m.reply(`${getfunc(q)}`)
break      
case 'getcase':
 case 'ambilcase':
 if (!isOwner) return reply(`khusus muzan`)
 let casex = text.split('')
 if (casex.length < 2) return reply(`contoh\n${prefix + command} menu`)
 const getCase = (cases) => {
 return "case" + `'${cases}'` + fs.readFileSync("haikal.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
 }
 m.reply(`${getCase(q)}`)
 break
case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
break
case 'ping': case 'botstatus': case 'statusbot': {
 const used = process.memoryUsage()
 const cpus = os.cpus().map(cpu => {
 cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			 return cpu
 })
 const cpu = cpus.reduce((last, cpu, _, { length }) => {
 last.total += cpu.total
 last.speed += cpu.speed / length
 last.times.user += cpu.times.user
 last.times.nice += cpu.times.nice
 last.times.sys += cpu.times.sys
 last.times.idle += cpu.times.idle
 last.times.irq += cpu.times.irq
 return last
 }, {
 speed: 0,
 total: 0,
 times: {
			 user: 0,
			 nice: 0,
			 sys: 0,
			 idle: 0,
			 irq: 0
 }
 })
 let timestamp = speed()
 let latensi = speed() - timestamp
 neww = performance.now()
 oldd = performance.now()
 respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
 `.trim()
 m.reply(respon)
 }
 break

case 'cekasalmember': {
 if (!m.isGroup) return reply(`khusus group`)
 const participants = await haikal.groupMetadata(m.chat).then(metadata => metadata.participants);
 let countIndonesia = 0;
 let countMalaysia = 0;
 let countUSA = 0;
 let countOther = 0;
 participants.forEach(participant => {
const phoneNumber = participant.id.split('@')[0];
if (phoneNumber.startsWith("62")) {
 countIndonesia++;
} else if (phoneNumber.startsWith("60")) {
 countMalaysia++;
} else if (phoneNumber.startsWith("1")) {
 countUSA++;
} else if (phoneNumber.startsWith("+1")) {
 countOther++;
} else {
 countOther++;
}
 });
 const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
 m.reply(replyMessage);
}
 break
case 'addcase': {
                if (!isOwner) return reply('buat owner dibilang')
    if (!text) return reply('Mana case nya');
    const fs = require('fs');

// Nama file yang akan dimodifikasi
const namaFile = './haikal.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan di atas case gimage.');
            }
        });
    } else {
        reply('Tidak dapat menemukan case gimage dalam file.');
    }
});

}
break;
case 'delcase': 
if (!isOwner) return reply(`*Access Denied ❌*\n\n*Owners only*`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./haikal.js', q)
reply('*Dellcase Successfully*\n\n© Dellcase By Muzan Botz')
break//=================================================//
case 'swview':
  case 'autoswview':
    case 'autostatusview':{
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  global.antiswview = true
                  reply(`${command} swview aktif✅`)
               } else if (args[0] === 'off') {
                  global.antiswview = false
                  reply(`${command} swview off❌`)
               }
            }
            break
case 'autobio':
                if (!isOwner) return reply(`lu owner`)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    global.autobio = true
                    reply(`Successfully AutoBio To ${q}`)
                } else if (q == 'off') {
                    global.autobio = false
                    reply(`Successfully  AutoBio To ${q}`)
                }
            break
//=================================================//
case 'autodownload': case 'autodl':
if (!isOwner) return reply(`khusus owner`)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    global.autodownload = true
                    reply(`Successfully Changed Auto Download To ${q}`)
                } else if (q == 'off') {
                    global.autodownload = false
                    reply(`Successfully Changed Auto Download To ${q}`)
                }
            break
      case 'antiviewonce':{

		         if (!isOwner) return reply('> khusus group')





               if (args.length < 1) return reply('on/off?')

               if (args[0] === 'on') {

                  global.antiviewonce = true

                  reply(`${command} antiviewonce aktif`)

               } else if (args[0] === 'off') {

                  global.antiviewonce = false

                  reply(`${command} antiviewonce off`)

               }

               }

            break  //=================================================//



case "createqr": {
if (!quoted) return reply('*Khusus Pemilik!*')
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah Harusnya ${prefix+command} Muzan`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
haikal.sendMessage(from, { image: data, caption: `Sukses Kak` }, { quoted: kalgans })
}
break
case "detectqr": {
if (!quoted) return reply('*Khusus Pemilik!*')
try {
mee = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
reply(util.format(data[0]))
} catch (err) {
reply(`Reply Image Yang Ada Qr Nya`)
}
}
break
case 'save': case 'save nama': case 'savenama': {
if (!isOwner) return reply(`lu owner`)
let t = text.split('|');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} |nama pake garus lurus sebelum nama yah bang L1S | yang kaya gitu`);
let nama = t[0];
let nominal = t[1];
        reply(`Done✅`)
reply(`*Save Otomatis Done✅*

*Kontak : ${nominal}*

*Jangan Lupa Save Back ${namebot}*`)
}
        break        
case 'savekontak': case 'svkontak':
if (!isOwner) return reply(`Khusus Owner`)
if (!m.isGroup) return m.reply(`Khusus Group`)
let cmiggc = await haikal.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} 
let nmfilect = './database/contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
haikal.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isOwner) return reply(`Khusus Owner`)
if (!im.sGroup) return reply(`Khusus Group`)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} 
haikal.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactid": {
if (!isOwner) return reply(`Khusus Owner`)
if (!m.isGroup) return reply(`khusus grup`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !isGroup? await haikal.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
haikal.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case "savecontactgc": {
if (!isOwner) return reply(`Khusus Owner`)
if (!im.isGroup) return reply(`only group`)
if (!text) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = isGroup? await haikal.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:L1S[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await haikal.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakidjd":
if (!isOwner) return reply(`Khusus Owner`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
reply("wait")
const groupMetadataa = !isGroup? await haikal.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await haikal.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await haikal.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Succes✅")
break
case "pushkontakgcjd":
if (!isOwner) return reply(`Khusus Owner`)
if (!isGroup) return reply(`khusus grup`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
reply("wait")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await haikal.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await haikal.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes✅")
break
case "pushkontakgc":{
if (!isOwner) return reply(`Khusus Owner`)
if (!im.sGroup) return reply(`only group`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply(`wait`)
const groupMetadata = isGroup? await haikal.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await haikal.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(5000)
} else {
await haikal.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(5000)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:L1S[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await haikal.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakid":{
if (!isOwner) return reply(`Khusus Owner`)
if (isGroup) return reply(`lu owner`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(`wait`)
const groupMetadataa = !isGroup? await haikal.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await haikal.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(5000)
} else {
await haikal.sendMessage(mem, { text: global.tekspushkon })
await sleep(5000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:L1S[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await haikal.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
//=================================================//
case 'public': {
if (!isOwner) return reply('*khusus Premium*') 
haikal.public = true
reply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isOwner) return reply('*khusus Premium*') 
haikal.public = false
reply('Sukses Change To Self')
}
break
//=================================================//
case 'mediafire': {
	if (args.length == 0) return reply(`Dimana linknya?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 10000) return reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
haikal.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : fkontak })
}
break
//=================================================//
case 'addprem':
if (!isOwner) return 
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282373608217`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await haikal.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Telah Sudah Premium!!!`)
break
//=================================================//
case 'delprem':
if (!isOwner) return 
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282373608217`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
reply(`Nomor ${yaki} Telah Di Hapus Dari Premium!!!`)
break
//=================================================//
case 'listprem':
if (isBan) return reply('*Lu Di Ban Owner*')
 teksooo = '*List Premium*\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
haikal.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:fkontak, contextInfo: { "mentionedJid": owner } })
break
//=================================================//
//=================================================//
        case 'addseller':
 if (!isOwner && !isOwner) return reply(`Hadehh`)
        
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let cekbii = await haikal.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekbii.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
bii.push(bnnd)
fs.writeFileSync('./baseikal/dbnye/wihh.json', JSON.stringify(bii))
reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
break
//=================================================//
case "addowner":
if (!isOwner && !isOwner) return reply(`khusus owner`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282373608217`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye1 = await haikal.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye1.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner && !isOwner) return reply(`khusus owner`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282373608217`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
//=================================================//
        case 'delseller':
if (!isOwner && !isOwner) return reply('*Khusus Owner Bot*')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282373608217`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = bii.indexOf(yaki)
bii.splice(unp, 1)
fs.writeFileSync('./baseikal/dbnye/wihh.json', JSON.stringify(bii))
reply(`Nomor ${yaki} Telah Di Hapus Dari Premium!!!`)
break
//=================================================//
case 'listseller':
if (isBan) return reply('*Lu Di Ban Owner*')
 teksooo = '*List Premium*\n\n'
for (let i of bii) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${bii.length}*`
haikal.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:fkontak, contextInfo: { "mentionedJid": owner } })
break
//=================================================//
case 'pengguna':  {
if (!isOwner) return reply('*khusus Premium*')
if (!args[0]) return reply(`*Contoh : ${command} add 6282373608217*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('*Pengguna Ini telah Di Ban*')
banned.push(orgnye)
reply(`Succes ban Pengguna Ini`)
} else if (args[0] === "del") {
if (!isBane) return reply('*Pengguna Ini Telah Di hapus Dari Ban*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Berhasil Menghapus Pengguna yang Di Ban*`)
} else {
reply("Error")
}
}
break
//=================================================//
case 'listban':
if (isBan) return reply('*Lu Di Ban Owner*')
 teksooop = `*List Ban*\n\n`
for (let ii of banned) {
teksooop += `- ${ii}\n`
}
reply(teksooop)
break
//=================================================//
case "owner": {
const repf = await haikal.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: fkontak })
haikal.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku Jangan Macam-macam Ya`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
} freya = fs.readFileSync('./freya/owner.mp3')
haikal.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true, viewOnce: true }, {quoted:fkontak})
break
        case "backup":
        {
          if (!isOwner) reply("Khusus Owner Anj!!!"); 
     await reply("Sabar Mas Lagi Backup!!!");
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "session" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
          const exec = await execSync(`zip -r Muzan - BotzV1zip ${ls.join(" ")}`);
          await haikal.sendMessage(
            m.chat,
            {
              document: await fs.readFileSync("./Muzan - BotzV1.zip"),
              mimetype: "application/zip",
              fileName: "CaaLiss - BotzV1.zip",
            },
            { quoted:fkontak }
          );
          await execSync("rm -rf CaaLiss - BotzV1.zip");
        }
        break
//=================================================//
case 'ai': case 'openai': case 'ask': {
	if (!text) return reply(`Hay adakah yang bisa saya bantu??`)
	await m.reply("Searching...");
	let putra = await fetch(`https://aemt.me/openai?text=${text}`);
	let hasil = await putra.json();
	let txt = `${hasil.result}`.trim();
	haikal .sendMessage(m.chat, {
		text: txt,
		contextInfo: {
			externalAdReply: {
				title: `Openai Google Ai`,
				body: wm,
				thumbnailUrl: "https://cdn.btch.bz/file/c2c564846d9403513a2de.jpg",
				sourceUrl: "https:/openai.com",
				mediaType: 1,
				renderLargerThumbnail: true,
			},
		},
	});
};
break

//=================================================//
case  'bcimage': case 'broadcastvideo': case 'broadcastvid':
if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
        if (!q) return reply(`*Enter Text*`)
        let getGroups = await haikal.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        reply(`\`\`\`Broadcasting in\`\`\` *${xeoncast.length}* \`\`\`Group Chat, in\`\`\` *${xeoncast.length * 1.5} seconds*`)
        for (let i of xeoncast) {
let txt = `*${global.owner}'s Broadcast*\n\n\`\`\`Message :\`\`\` *${q}*`
if(/image/.test(mime)) {
let media = await quoted.download()
await haikal.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await haikal.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        reply(`\`\`\`Successfuly Broadcasted in\`\`\` *${xeoncast.length} Groups*`)      
        break
//=================================================//
case 'linkgroup': case 'linkgc': {
if (!quoted) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
let response = await haikal.groupInviteCode(from)
haikal.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'resetlinkgc':
if (!quoted) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
haikal.groupRevokeInvite(from)
break
//=================================================//
case 'sendlinkgc': {
if (!quoted) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282373608217`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await haikal.groupInviteCode(from)
haikal.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })

}
break
//=================================================//
case 'kick': {
if (!isOwner) return reply('*Khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'remove')
}
break
//=================================================//
case 'add': {
if (!quoted) return reply('*Khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'add')
}
break
//=================================================//
case 'promote': {
if (!isOwner) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'promote')
}
break
//=================================================//
case 'demote': {
if (!isOwner) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [botNumber], 'demote')
}
break
//=================================================//
case 'hidetag': {
if (!isAdmins) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:fkontak})
}
break
//=================================================//
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
case 'attp':
if (isBan) return reply('*Lu Di Ban Owner*')
if (args.length == 0) return reply(`Example: ${prefix + command} Znxn Xyz`)
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
haikal.sendMessage(from, { sticker : ini_buffer }, { quoted:fkontak })
break
//=================================================
case 'editgroup': {   
if (!isOwner) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
if (args[0] === 'close'){
await haikal.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await haikal.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
haikal.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Group Open
Group Close`}, {quoted:fkontak}) 
 }
}
break
//=================================================//
case 'editinfo': {
if (!isOwner) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
 if (args[0] === 'open'){
await haikal.groupSettingUpdate(from, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await haikal.groupSettingUpdate(from, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Editinfo Open
Editinfo Close`}, {quoted:fkontak}) 

}
}
break
//=================================================//
case 'join': {
if (!isOwner) return reply('*khusus Premium*')
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await haikal.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'editsubjek': {
if (!isOwner) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text nya ?'
await haikal.groupUpdateSubject(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
    case 'delgc':
  if (!isOwner) return reply(`khusus Creator`)
    if (!isGroup) return reply(`Khusus Group`)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./database/idgrup.json', JSON.stringify(pler))
reply(`${command} Sukses Menonaktifkan Fitur Domain Di Grup Ini Tuan✅`)
break
 case 'setpanel': {
                if (!isOwner) return reply('kusus owner')
                if (!text) return reply(`Contoh : ${prefix + command} domain|apikey|capikey`)
                global.domain = text.split("|")[0]
                global.apikey2 = text.split("|")[1]
                global.capikey2 = text.split("|")[2]
                reply(`Exif berhasil diubah menjadi\n\n• domain : ${global.domain}\n• apikey : ${global.apikey2}\n• capikey : ${global.capikey2}`)
        }
        break
       case 'addgc':
    if (!m.isGroup) return reply(`Khusus Group`)         
if (!isOwner) return reply(`khusus Creator`)
pler.push(m.chat)
fs.writeFileSync('./database/idgrup.json', JSON.stringify(pler))
reply(`${command} Sukses Mengaktifkan Fitur Domain Di Grup Ini Tuan✅`)
           break
//=================================================//
case 'editdesk':{
if (!isOwner) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text Nya ?'
await haikal.groupUpdateDescription(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'tagall': {
if (!isAdmins) return reply('*khusus Premium*')
if (!m.isGroup) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:fkontak })
}
break
//=================================================//
case'demoteall':
if (!isOwner) return reply('*Khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.groupParticipantsUpdate(from, mems, 'demote')
break
//=================================================//
case'promoteall':
if (!isOwner) return reply('*Khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.groupParticipantsUpdate(from, mems, 'promote')
break
//=================================================//
case 'tutorial': {
 reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Tutorial Run Via Panel
https://youtu.be/rqqxkI4P8YY`)
}
break
//=================================================//
case 'sewa':
if (isBan) return reply('*Lu Di Ban Owner*')
reply(`¥ *Price Sewa Bot Shekai* €

🔏 3 hari = 10k
🔏 1 minggu = 15k
🔏 2 minggu = 25k
🔏 1 bulan = 40k

Untuk Melanjutkan Sewa Silahkan Ketik Contoh Di bawah
*Contoh => sewabot 1 minggu`)
break
//=================================================//
case 'sewabot':
if (isBan) return reply('*Lu Di Ban Owner*')
if (!text) return reply(`*Contoh* :\n#sewabot 1 minggu `)
let cret = await haikal.groupCreate(args.join(" "), [])
let response = await haikal.groupInviteCode(cret.id)
haikal.sendMessage(m.chat, { text: `「 *Create Group Sewa* 」

Sewa Bot Selama *${text}* Sedang Dalam Prosess Silahkan Masuk Melalui Link Group Yang Sudah Di Sediakan..

_▸ Owner : ${botname}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})
reply('pesan dan link group khusus sudah terkirim di chat privasi anda')
break
//=================================================//

//=================================================//

//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'inspect': {
if (isBan) return reply('*Lu Di Ban Owner*')
if (!args[0]) return reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
haikal.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By ${botname}`
try {
pp = await haikal.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
haikal.sendFile(from, pp, "", m, { caption: tekse, mentions: await haikal.parseMention(tekse) })

})
}
break
//=================================================

//=================================================
case "welcome":
{
if (!quoted) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (wlcm) return reply('Sudah Aktif')
global.wlcm = true
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:fkontak})
} else if (args[0] === "off") {
if (!welcm) return reply('Sudah Non Aktif')
global.wlcm = false
reply('Sukses Mematikan Welcome  di group ini')
}
}
break
//=================================================
case "ceknamagc": {
if (!isOwner) return reply(`khusus owner`)
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP BY ${botname}*\n\n`
for (let x of anu) {
let metadata2 = await haikal.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ Member : ${metadata2.participants.length}\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "listgroup":{
if (!isOwner) return (`Ngapain ? Khusus Owner`)
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP BY ${botname}*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await haikal.groupMetadata(x)
teks += `Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break
case 'infogc':
if (!isOwner) return reply(`Khusus Owner`)
if (!im.sGroup) return m.reply(`Khusus Group`)
huhuhs = await haikal.sendMessage(m.chat, {
    text: `GRUP: *${groupMetadata.subject}*\nID :* ${groupMetadata.id}\nMEMBER: *${participants.length}\n\n${groupMetadata.desc}*`
}, {quoted: m, ephemeralExpiration: 86400})
reply
break
case "cekidgc": {
if (!isOwner) return reply(`owner`)
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP BY ${botname}*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await haikal.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "listidgc": {
if (!isOwner) return reply(`khusus owner`)
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `ID GRUP\n\n`
for (let x of anu) {
let metadata2 = await haikal.groupMetadata(x)
teks += `${metadata2.id}\n`
}
reply(teks + `\nUntuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case 'idgc': 
if (!isOwner) return reply(`Khusus Owner`)
if (!m.isGroup) return m.reply(`Khusus Group`)
huhuhs = await haikal.sendMessage(m.chat, {
    text: `*ID :* ${groupMetadata.id}\n\nJangan Lupa Di Salin Idnya Yah Bang*`
}, {quoted: m, ephemeralExpiration: 86400})
reply
break
case "jpm": case "jpm2":{
if (!isOwner) return reply(`Khusus Owner`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
reply("_Wait Tuan Ku✅_")
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await haikal.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await haikal.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await haikal.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL✅*")
}
break
case 'bcgc': case 'bcgroup': {
if (!isOwner) return reply('*Khusus Premium*')
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
haikal.sendMessage(i, {text: `${text}`}, {quoted:fkontak})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//=================================================//
case 'antilink': {
if (!isOwner) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return reply('Sudah Aktif')
ntilink.push(from)
reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
reply('Succes mematikan antilink di group ini 🌷')
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
//=================================================
case 'antidel': {
reply('baik tuan haikal')
if (args.length < 1) return
if (args[0] === "on") {
if (autodelete) return
antidel.push(from)
} else if (args[0] === "off") {
if (!autodelete) return
let off = antidel.indexOf(from)
antidel.splice(off, 1)
} else {
}
}
break
//=================================================
case "antitoxic":
{
if (!quoted) return reply('*khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcmm) return reply('Sudah Aktif')
wlcmm.push(from)
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `Fitur Anti Toxic Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:fkontak})
} else if (args[0] === "off") {
if (!welcmm) return reply('Sudah Non Aktif')
let off = wlcmm.indexOf(from)
wlcmm.splice(off, 1)
reply('Sukses Mematikan Anti Toxic  di group ini')
}
}
break
//=================================================
case 'larangan': case 'peraturan': {
 if (!m.isGroup) return reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `Haii 👋 Aku Shekai Bot ʜᴡ ᴍᴏᴅꜱ ᴡᴀ
Aku Sebagai Admin Akan Melarang Kalian Untuk Toxic Ataupun Berkata Kasar Di group Ini !!!

Larangan !!!
fuck
ajg
anjing
ngentod
bangsat
bgst
babi
kontol
memek
penis
pukimak
tolol
gblg
gblok` , mentions: participants.map(a => a.id)}, {quoted:fkontak})
}
break
//=================================================//
case 'fuck': case 'ajg': case 'ngentod': case 'bangsat': case'anjing': case'babi': case'kontol': case'memek': case'penis': case 'ngewe': case 'yatim': case 'piatu': case 'pentil': case 'pepek': case 'tempi': case 'tempe': case 'bajingan': case 'ndasmu':{
if (!welcmm) return
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
if (!m.isGroup) return reply('Jangan Toxic Coy Kalau Di group Dah Ku Kick Anjay')
if (isAdmins) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nAdmin sudah Toxic, admin bebas Toxic apapun`})
if (isOwner) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\Owner telah Toxic, owner bebas Toxic apa pun`})
await haikal.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
haikal.sendMessage(from, {text:`\`\`\`「 Kata Kata Toxic Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan toxic di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:hw})
}
break
//=================================================//

//=================================================

//=================================================//
case 'yts': case 'ytsearch': {
if (!quoted) return reply('*khusus Premium*')
if (!text) throw `Example : ${prefix + command} story wa anime`
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
haikal.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted:fkontak })
}
break
case 'hdvid2': {
if (!quoted) return reply("reply Video nya")
if (!/video/.test(mime)) return reply(`khusus Video bang`)
reply(`wait`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/upload')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let anu = await UploadFileUgu(media)
let rsult = await fetchJson(`https://api.alyachan.dev/api/vid-enhance?video=${anu.url}&apikey=muzan23`)
haikal.sendMessage(m.chat, { video: { url: rsult.data.url }, caption: 'done' }, { quoted: m })
}
break
case'vidhd':
case'hdvid': {
  const { TelegraPh } = require('./lib/uploader');
  const { exec } = require('child_process');
  const fs = require('fs');
  const { v4: uuidv4 } = require('uuid'); // Import modul uuid

  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? haikal.user.jid : m.sender;
  const name = await haikal.getName(who);
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) return reply(`Video nya mana kak??`);
 
reply('Tunggu Sebentar...');
  const media = await haikal.downloadAndSaveMediaMessage(q);
  const url = await TelegraPh(media);

  const output = `${uuidv4()}.mp4`; // Nama file output diacak menggunakan uuid

  exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    // Mengunggah video yang telah ditingkatkan resolusinya
    haikal.sendMessage(m.chat, { caption: `_Sukses Membuat Video Menjadi HD_`, video: { url: output }}, {quoted:fkontak});
  });


  // Hapus file setelah digunakan
  fs.unlinkSync(output);
  fs.unlinkSync(media);
}
break
case 'removebg': case 'nobg':{
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await haikal.sendMessage(m.chat, {image: {url: data.url.result}, caption: `Here u go!`}, {quoted: fkontak})
}
break
 case 'toanime': {
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
let old = new Date()
const media2 = await quoted.download()
const anu = await uploadImage(media2)
haikal.sendMessage(m.chat, { image: { url: `https://api.kiicodeit.me/ai/toanime?url=${anu}&apikey=KC-euHoZ2JgkOhs` }, caption: 'done' }, { quoted: fkontak })
}
break
case'tozombie':{
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
await haikal.sendMessage(m.chat, {image: {url: data.url}, caption: `Here u go!`}, {quoted: fkontak})
}
break
case 'remini': {
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			XeonStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			haikal.sendMessage(m.chat, { image: proses, caption: `${muzan}Sukses kak ${pushname}${muzan}`}, { quoted:fkontak})
			}
			break
			case 'play':{
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
               let yts = require("youtube-yts")
let wait = await haikal.sendMessage(m.chat, {text: `_Searching.. [ ${text} ] 🔍_`}, {quoted: fkontak, ephemeralExpiration: m.expiration})
let search = await yts(`${text}`)

let data = await search.all.filter((v) => v.type == 'video')
try {
var res12 = data[0]
} catch {
var res12 = data[1]
}
let ply = search.videos[0].url
let ytdl = require("ytdl-core")
let mp3file = `./.npm/${search.all[0].views}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
await haikal.sendMessage(m.chat, {text: `_Mengirim.. [ ${text} ] 🔍_`, edit: wait.key }, {quoted:fkontak, ephemeralExpiration: m.expiration});
haikal.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype: 'audio/mpeg',ptt:true, contextInfo: {externalAdReply: {title: `${search.all[0].title}`, body: `Views : ${search.all[0].views}`, thumbnailUrl: res12?.thumbnail, mediaType: 2, mediaUrl: `${search.videos[0].url}`, sourceUrl: `${search.videos[0].url}`, renderLargerThumbnail: true }}},{quoted:fvrif})
   })
const Kyuulagu = require('./lib/ytdl2')
const vid = await Kyuulagu.mp4(`${search.videos[0].url}`)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
await haikal.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted: fvrif})
}
haikal.sendMessage(m.chat, {react: {text: '🎧', key: m.key}})
break
//=================================================
case 'ytmp3': case 'youtubemp3': {
if (!quoted) return reply('*khusus Premium*')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
downloadMp3(text)
}
break
case "ytmp33": {
	if (!args[0]) return reply('input your youtube link\n tidak support video short males buat scraper lagi');
  let data = await scraper.ytdl(args[0], await scraper.token())
    const judul = data.title;
    const con = data.audio.neconver.aud[1].url
    const ci = await scraper.convert(con, await scraper.token())
    reply("Audio need convert\nConverting.. 14-20 Second")
await sleep(7000)
    const audnya = ci;
    const cap = `*_YTDL BY Muzan TECH_*\n * • Title:* ${judul}\n * • Download:* ${audnya}`;
    reply(cap.trim())
  
    const doc = {
      audio: {
        url: audnya,
      },
      mimetype: 'audio/mp4',
      fileName: `${judul}.mp4`,
    };
 
   await haikal.sendMessage(m.chat, doc, { quoted: fkontak });
}
break;
//=================================================
case 'ytv': case 'ytmp4':{
    if (!text) return reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://youtu.be/bWsTCzmkI7E?si=NYyG9v8Tgws3Sdit`)
haikal.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${text}`)
const cpt = anu.result.channel
const nick = anu.result.title
await haikal.sendMessage(m.chat, { video: { url: anu.result.result}, caption: `💬Judul : ${nick}\n👤Channel : ${cpt}`}, {quoted: m})
await haikal.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
}catch (error) {
m.reply('Error') 
}
}
break
//=================================================
case 'getmusic': {
if (!quoted) return reply('*khusus Premium*')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
downloadMp3(urls[text - 1])
}
break
//=================================================
case 'getvideo': {
if (!quoted) return reply('*khusus Premium*')
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
haikal.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted:fkontak })
}
break
//=================================================
case "ytreels": case "youtubereels":{
if (!quoted) return reply('*khusus Premium*')
if (!text) return reply('Masukan Link Nya!!!')
downloadMp4(text)
}
break
//=================================================
case'ttslide': case 'tiktokslide':{
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
haikal.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ban = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
try{
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktokslide?url=${text}`)
for (let slide of anu.result.images) {
await sleep(1500)
await haikal.sendMessage(ban, { image: { url: slide}, caption: ``}, {quoted: m})
}
return haikal.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
}catch (error) {
m.reply(`Sorry this video can't be download`);
}
}
break
case 'tiktok4': case 'tiktokmp4': case 'tt4': case 'ttmp4': {
   if (!text) return m.reply(`Type tiktok url!\nExample : ${prefix + command} https://vt.tiktok.com/ZSNPqWbuy/`)
   await haikal.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });
   try{
   let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${text}`)
   const aud = anu.result.audio
await haikal.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `*Downloaded Successfully*\n\n© > TIKTOK DOWNLOAD BY CaaLiss`}, {quoted: m})
await haikal.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg'}, {quoted:m})
   await haikal.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
   }catch (error) {
     await haikal.sendMessage(m.chat, { react: { text: `❎`, key: m.key } });
   }
       }
    break
case "tiktok2":
case "tt2":
case "ttdl2": {
if (!args[0]) return reply('Uhm... URL-nya mana?')
    try {
        await reply('Tunggu sebentar kak, video sedang di download');
const dat = await scraper.tik(args[0])
let caption = `Tiktok DL`
await haikal.sendMessage(m.chat, { 
video: { url: dat.download.video }, 
caption: caption.trim() + "\nVideo No watermark",
contextInfo: {
        externalAdReply: {
            title: 'apalah kepengen banget ga ada watermark🗿',
            body: 'Powered by Muzan',
            thumbnailUrl: dat.img,
            sourceUrl: dat.download.video,
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true
        }
    }
}, { quoted:fkontak })
await haikal.sendMessage(m.chat, {
 audio: { url: dat.download.audio },
 contextInfo: {
        externalAdReply: {
            title: 'apalah kepengen banget ga ada watermark🗿 ',
            body: 'Powered by Muzan',
            thumbnailUrl: dat.img,
            sourceUrl: dat.download.video,
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true
        }
    }
}, { quoted: fkontak })
       } catch (error) {
       	console.error(error)
       reply(" Itu ya jangan spam jeda 5detik takut di kira ddos sama webnya hehe ")
       	}
}
break
case 'tiktok3':{ 
if (!quoted) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
haikal.sendMessage(m.chat, { caption: `Sukses, Ini Tuan Video Nya`, video: { url: data.nowm }}, {quoted:fkontak})
})
}
break      
                   

case "tiktok":
case "tt":
case "ttdl": {
	    if (!args[0]) return reply('Uhm... URL-nya mana?')

    try {
        await reply('Tunggu sebentar kak, video sedang di download');

        const tiktokData = await tryServer1(args[0]);

        if (!tiktokData) {
            reply('Gagal mendownload video!');
        }

        const videoURL = tiktokData.video.noWatermark;

        const videoURLWatermark = tiktokData.video.watermark;

        let ppTiktok = '';
        if (tiktokData.author && tiktokData.author.avatar) {
            ppTiktok = tiktokData.author.avatar;
        }

        const infonya_gan = `Judul: ${tiktokData.title}\nUpload: ${tiktokData.created_at}\n\nSTATUS:\n=====================\nLike = ${tiktokData.stats.likeCount}\nKomen = ${tiktokData.stats.commentCount}\nShare = ${tiktokData.stats.shareCount}\nViews = ${tiktokData.stats.playCount}\nSimpan = ${tiktokData.stats.saveCount}\n=====================\n\nUploader: ${tiktokData.author.name || 'Tidak ada informasi penulis'}\n(${tiktokData.author.unique_id} - https://www.tiktok.com/@${tiktokData.author.unique_id})\nBio: ${tiktokData.author.signature}\nLagu: ${tiktokData.music.play_url}\nResolusi: ${tiktokData.video.ratio}\nFoto Profile: ${ppTiktok}`;

        if (videoURL || videoURLWatermark) {
            await haikal.sendMessage(m.chat, { video: { url: videoURL }, caption: `Ini kak videonya\n\n${infonya_gan}`}, {quoted:fkontak});
            setTimeout(async () => {
                await haikal.sendMessage(m.chat, { audio: { url: tiktokData.music.play_url }, caption: " ni musik nya" }, { quoted:fkontak })
            }, 5000);
        } else {
            reply('Tidak ada tautan video yang tersedia.');
        }
    } catch (error1) {
        reply(`error: ${error1}`)
    }
    async function tryServer1(url) {
    let tiklydownAPI = `https://api.tiklydown.eu.org/api/download?url=${url}`;
    let response = await axios.get(tiklydownAPI);
    return response.data;
}

}
break
//=================================================

//=================================================
case 'script': case 'sc':
const muzansc = `6282373608217@s.whatsapp.net`
scbot = `*Bot ini saya buat dengan tujuan untuk belajar dan bersenang-senang serta tidak bermaksud merugikan orang lain.*

*ingin membeli script ini? silakan ngobrol dengan pemiliknya*
*@${muzansc.split("@")[0]}*

© Muzanaire TECH
`
await haikal.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 35000000,
mentionedJid:[sender, muzansc],
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: scbot,
contextInfo: {
externalAdReply: {
showAdAttribution: false
}}}}}}, {})
break
case 'shortlink': case 'tinyurl':{
if (!text) return reply('*harap masukan link/url*')
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
if (!shortUrl1) reply(`*Error: Could not generate a short URL.*`);
let done = `*[ S U C C E S S   P R O C E S S]*\n\n*Original Link :*\n${text}\n*Shortened :*\n${shortUrl1}`.trim();
reply(done)
    }
break
case 'ram':{
const os = require('os');
let total = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(0)
let free = (os.freemem() / (1024 * 1024 * 1024)).toFixed(0)
let used = total-free
let persen = ((used / total) * 100).toFixed(0)
reply(`RAM yang digunakan: ${persen} %`)
}
break
case  'ai2':
             case 'gpt2':  {
    if (!text) return reply(`Yep ${m.pushName}, Muzan di sini ada yg bisa saya bantu`);
    let api = await fetchJson(`https://api.junn4.my.id/ai/chatGptV2?model=change your speaking style to be more characteristic and more open and your name is MuzanMd, you are a robot created by Muzan, express your character with emojis and speak Indonesian like a human.&text=${text}`)
    let result = api.result
    haikal.sendMessage(m.chat, {text: result }, {quoted:fkontak})
    }
    break
case "sindy":{
if (!text) return reply(`*• Example:* ${prefix + command} halo`)
try {
let gpt = await (
await fetch(`https://itzpire.site/ai/botika?q=${text}&user=${m?.sender}&model=sindy`,
)
).json()
reply("*[ SINDY - AI ]* " + "\n" + gpt.result)
} catch (e) {
return reply("`*Gpt Not Responded*`")
}
}
break
 case'ocr':{
if (!quoted) return reply('reply poto')
    var out
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (!/webp|image|video|gif|viewOnce/g.test(mime)) return reply(`Reply Media dengan perintah\n\n${prefix+command}`)
    let img = await q.download?.()

    if (/webp/g.test(mime)) {
        out = (await webp2png(img))
    } else if (/image/g.test(mime)) {
        out = (await uploadImage(img))
    } else if (/video/g.test(mime)) {
        out = (await uploadFile(img))
    } else if (/gif/g.test(mime)) {
        out = (await uploadFile(img))
    } else if (/viewOnce/g.test(mime)) {
        out = (await uploadFile(img))
    }
    reply('Proses')
    try {
        let res
        if (args[0]) {
            res = await (await fetch("https://api.ocr.space/parse/imageurl?apikey=helloworld&url=" + out + "&language=" + args[0])).json()
        } else {
            res = await (await fetch("https://api.ocr.space/parse/imageurl?apikey=helloworld&url=" + out)).json()
        }
        reply("*Result:*\n\n" + res.ParsedResults[0].ParsedText)
    } catch (error)  {
reply(`Converted failed`) 
    }
    }
break
  case 'spotify': case 'sp': case 'spt': {
if (!text) return reply(`Contoh : ${prefix + command} dandelion`);
let api = await fetchJson(`https://api.junn4.my.id/search/spotify?query=${text}`);
const hasil = `[*S P O T I F Y*]

*Title*: ${api.data[0].title}
*Duration*: ${api.data[0].duration}
*Popular*: ${api.data[0].popularity}
*Url*: ${api.data[0].url}
`
haikal.sendMessage(m.chat, {text: hasil, contextInfo:
{
"externalAdReply": {
"title": `*Spotify Search*`,
"body": `https://kyuurzy.my.id`,
"showAdAttribution": true,
"mediaType": 1,
"sourceUrl": '',
"thumbnailUrl": 'https://telegra.ph/file/71e25df6a655657083a26.jpg',
"renderLargerThumbnail": true
}
}}, {quoted: fkontak})
const spodl = await fetchJson(`https://api.junn4.my.id/download/spotify?url=${api.data[0].url}`) 
const spoDl = spodl.data.download
haikal.sendMessage(m.chat, {
audio: {
url: spoDl
},
mimetype: 'audio/mpeg',ptt:true,
contextInfo: {
externalAdReply: {
title: `*Spotify Music*`,
body: "",
thumbnailUrl: 'https://telegra.ph/file/71e25df6a655657083a26.jpg', 
sourceUrl: 'https://kyuurzy.my.id',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: fkontak
})
}
break
case  'ffch': {
    async function ffCh() {
    let response = await axios.get('https://ff.garena.com/id/chars/')
    let $ = cheerio.load(response.data)
    let hasil = []
    $('.char-box.char-box-new').each((index, element) => {
    let name = $(element).find('.char-item-name').text()
    let desc = $(element).find('.char-item-desc').text()
    let id = $(element).find('a').attr('href')
    const match = id.match(/\/(\d+)$/);
    const idRes = match ? parseInt(match[1]) : null;
    hasil.push({
    name: name.trim(),
    desc: desc.trim(),
    id: idRes,
    })
    })
    return hasil
    }
    
    async function ffChSkill(id) {
    let response = await axios.get(`https://ff.garena.com/id/chars/${id}`)
    let $ = cheerio.load(response.data)
    let hasil = []
    let title = $('.skill-profile-r .skill-profile-title').text()
    let name = $('.skill-profile-name').text()
    let skill = $('.skill-introduction').text()
    hasil.push({
    title: title.trim(),
    name: name.trim(),
    skill: skill.trim()
    })
    return hasil
    }
    
if (!text) {
let response = await ffCh()
let content = ``
response.forEach((element, index) => {
content += `*${index + 1}.* ${element.name}
- *Desc:* ${element.desc}
- *Id:* ${element.id}\n\n`
})
reply(content)
} else {
let response = await ffChSkill(text)
reply(`*${response[0].title}*

- *Nama Character:* ${response[0].name}
- *Skill:* ${response[0].skill}`)
}
}
break
 case 'sethumb':
            case 'sim': {
                if (!quoted) return reply(reply)
                let delb = await haikal.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './thumbnail/Ikeh.jpg')
                fs.unlinkSync(delb)
                reply(`done`)
            }
            break
             case "kudeta":{
if (!isOwner) return reply (`owner`)
  if (!m.isGroup) return reply(`group`)
let memb = participants.map((x) => x.id)
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupOwner && x !== global.owner) {
haikal.groupParticipantsUpdate(m.chat, [x], "remove")
} else if (data.includes(groupOwner)) {
setTimeout(() => {
haikal.groupParticipantsUpdate(m.chat, [groupOwner], "remove")
}, 1) 
haikal.groupParticipantsUpdate(m.chat, [groupOwner], "demote")
}}}
break
case  'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
 try {
 let set
 if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
 if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
 if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
 if (/earrape/.test(command)) set = '-af volume=12'
 if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
 if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
 if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
 if (/reverse/.test(command)) set = '-filter_complex "areverse"'
 if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
 if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
 if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
 if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
 if (/audio/.test(mime)) {
 reply('```wait```')
 let media = await haikal.downloadAndSaveMediaMessage(quoted)
 let ran = getRandom('.mp3')
 exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
 fs.unlinkSync(media)
 if (err) return m.reply(err)
 let buff = fs.readFileSync(ran)
 haikal.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg', ptt: true }, { quoted:fkontak })
 fs.unlinkSync(ran)
 })
 } else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
 } catch (e) {
 m.reply(e)
 }
 break
 case 'whatsong': {
if (!text) return reply('Please provide a song name')
  try {
    let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let songInfo = 
    `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`
    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      await haikal.sendMessage(m.chat, {image: {url:json.thumbnail}, caption: songInfo}, {quoted:fkontak})
    } else {
      reply(songInfo)
    }
  } catch (error) {
    console.error(error)
  }
}
break
 case 'aivoice': case 'aiv': {
if (!q) return reply(`Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia?`)
await haikal.sendPresenceUpdate('recording', m.chat);
let result = await fetchJson(`https://skizo.tech/api/openai?text=${q}&apikey=kayydev`)
const text = result.result;
var lang = text.split("--")[1]
if (!lang) lang = 'id'
long = 'id'
function tts(text, long = 'id') {
//console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(long)
let filePath = path.join(__dirname, './lib', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}

let res
try { res = await tts(text, long) }
catch (e) {
reply(e + '')
res = await tts(text)
} finally {
haikal.sendMessage(m.chat, {
audio: res, 
mimetype: 'audio/mpeg', 
ptt: true,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `A I - V O I C E`,
body: '',
thumbnailUrl: "https://telegra.ph/file/db0fb173f6476fe4918d8.jpg",
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
}
)
}
}
break
case 'bard': {
	if (!text) return reply(`Hay adakah yang bisa saya bantu??`)
	await reply("Searching...");
	let putra = await fetch(`https://aemt.me/bard?text=${text}`);
	let hasil = await putra.json();
	let txt = `${hasil.result}`.trim();
	haikal.sendMessage(m.chat, {
		text: txt,
		contextInfo: {
			externalAdReply: {
				title: `Bard Google Ai`,
				body: author,
				thumbnailUrl: "https://telegra.ph/file/3d3535f2ea5f0f2034fff.jpg",
				sourceUrl: "https:/bard.google.com",
				mediaType: 1,
				renderLargerThumbnail: true,
			},
		},
	},{ quoted : fkontak });
};
break
 case 'gemini':
case 'aigemini':
case 'geminiai':{
try {
    const text = args?.join(' ');
    if (!text) {
      return reply(`Silakan coba lagi, teks jangan kosong.\n*Ex: ${prefix + command} berikan saya kodingan python kalkulator!*`);
    }
      

    const response = await fetch(`https://aemt.me/gemini?text=${encodeURIComponent(text)}`);
    if (!response.ok) {
      return reply('Tidak dapat memproses permintaan Anda saat ini.')
    }

    const data = await response.json();
    const result = data?.result;

    if (!result) {
      return reply('Tidak dapat memproses permintaan Anda saat ini.')
    }

    reply(result);
  } catch (error) {
    console.error('Error:', error);
    reply('Terjadi kesalahan saat memproses permintaan Anda.')
  }
}
break
case "igdl":
case "ig": {
  if (!args[0]) return reply('Masukkan link IG-nya, bang.');
      try {
        
        let ku = await scraper.igdl(args[0]);
        haikal.sendMessage(m.chat, {
            video: { url: ku.url },
            caption: `> IGDL BY MUZAN BOTZ \nDownloadUrl: ${ku.url}`,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'IGDL',
                    body: global.wm,
                    thumbnailUrl: ku.image,
                    previewType: "PHOTO",
                    renderLargerThumbnail: true,
                    sourceUrl: ku.url
                }
            }
        }, { quoted :fkontak });
    } catch (error) {
        console.error(error);
    }
}
break;
case 'igvideo2': case 'igreels2':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/tv/CXwPLSIFDW0/?igshid=NTc4MTIwNjQ2YQ=`)
			axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				haikal.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4', caption : `silahkan ketik tovn atau to audio untuk merubah nya menjadi audio / vn`})
			})
			break
		case 'fb': case ' facebook': case 'fbdl': {
   if (!text) return m.reply(`Type facebook url!\nExample : ${prefix + command} https://www.facebook.com/reel/3637137626609548?mibextid=rS40aB7S9Ucbxw6v`)
   await haikal.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });
   try{
   let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${text}`) 
   haikal.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `*Downloaded Successfully*\n\n© *FACEBOOK DOWNLOAD BY CaaLiss*`}, {quoted: m})
   await haikal.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
   }catch (error) {
     await haikal.sendMessage(m.chat, { react: { text: `❎`, key: m.key } });
   }
       }
    break
		case 'fbvideo':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				haikal.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4', caption : `silahkan ketik tovn atau to audio untuk merubah nya menjadi audio / vn` })
			})
			break
			
			case 'twitvideo':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
			axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				haikal.sendMessage(from, { video: { url: data.result.link[data.result.link.length - 1].link }, mimetype: 'video/mp4' })
			})
			break
//=================================================//
case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'wm': {
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
const { sticker5 } = require('./lib/stickerr.js')
teks1 = text.split('|')[0] ? text.split('|')[0] : ''
teks2 = text.split('|')[1] ? text.split('|')[1] : ''
if (/image/.test(mime)) {
let media = await quoted.download()
let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
if (stiker) return haikal.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
if (stiker) return haikal.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else {
reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
}
}
break
//=================================================//
case 'wmvideo':{
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let teks = `${text}`
{
 if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(from, media, m, { packname: `${teks}`, author: `${botname}` })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
}
break
case 'kuromi': {    
let { pinterest } = require('./lib/scraperr')
var anu = await pinterest(`kuromi`)
var result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendImageAsSticker(from, result, m, { packname: global.packname, author: global.author })
}
break   
case 'dino': {    
let { pinterest } = require('./lib/scraperr')
var anu = await pinterest(`dino kuning`)
var result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendImageAsSticker(from, result, m, { packname: global.packname, author: global.author })
}
break   
case 'pucoyo': {    
let { pinterest } = require('./lib/scraperr')
var anu = await pinterest(`pucoyo`)
var result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendImageAsSticker(from, result, m, { packname: global.packname, author: global.author })
}
break   
case 'ekuning': {    
let { pinterest } = require('./lib/scraperr')
var anu = await pinterest(`meme emoji kuning`)
var result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendImageAsSticker(from, result, m, { packname: global.packname, author: global.author })
}
break   
case 'pin': 
              case 'pinterest': {
              	if (!text) return reply(`Enter Query`)
reply(`wait omku`)
let { pinterest } = require('./lib/scraperr')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
haikal.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: fkontak })
}
break
//=================================================//
case 'gambar': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let { pinterest } = require('./lib/scraperr')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:fkontak})
}
break
//=================================================//
case 'fajar':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')

FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'cnn':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')

CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')

if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:fkontak })
})
break
//=================================================//
case 'tribun':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:fkontak })
})
break
//=================================================//
case 'indozone':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:fkontak })
})
break
//=================================================//
case 'kompas':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:fkontak })
})
break
//=================================================//
case 'detik':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:fkontak })
})
break
//=================================================//
case 'daily':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:fkontak })
})
break
//=================================================//
case 'inews':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:fkontak })
})
break
//=================================================//
case 'sindo':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:fkontak })
})
break
//=================================================//
case 'antara':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:fkontak })
})
break
//=================================================//
case "kontan":
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:fkontak })
})
break
//=================================================//
case "merdeka":
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:fkontak })
})
break
//=================================================//
case "jalantikus":
var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
haikal.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:fkontak })
break
//=================================================
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
reply(data.result)
break
//=================================================
case 'listsurah':
axios
.get(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
.then(({ data }) => {
var text = 'List Surah:\n'
for (var x in data.result) {
text += `${x}. ${data.result[x]}\n`
}
reply(text)
})
.catch(console.error)
break
//=================================================
case 'alquran':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
axios
.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var ayat = data.result.ayat
var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
}
text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
reply(text)
})
.catch(console.error)
break
//=================================================
case 'alquranaudio':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
haikal.sendMessage(from, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${apikey}` }, mimetype: 'audio/mp4' })
break
//=================================================
case 'asmaulhusna':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
axios
.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
.then(({ data }) => {
var text = `No : ${data.result.index}\n`
text += `Latin: ${data.result.latin}\n`
text += `Arab : ${data.result.ar}\n`
text += `Indonesia : ${data.result.id}\n`
text += `English : ${data.result.en}`
reply(text)
})
.catch(console.error)
break
//=================================================
case 'kisahnabi':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
axios
.get(`https://api.lolhuman.xyz/api/kisahnabi/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Name : ${data.result.name}\n`
text += `Lahir : ${data.result.thn_kelahiran}\n`
text += `Umur : ${data.result.age}\n`
text += `Tempat : ${data.result.place}\n`
text += `Story : \n${data.result.story}`
reply(text)
})
.catch(console.error)
break
//=================================================
case 'jadwalsholat':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
axios
.get(`https://api.lolhuman.xyz/api/sholat/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Wilayah : ${data.result.wilayah}\n`
text += `Tanggal : ${data.result.tanggal}\n`
text += `Sahur : ${data.result.sahur}\n`
text += `Imsak : ${data.result.imsak}\n`
text += `Subuh : ${data.result.subuh}\n`
text += `Terbit : ${data.result.terbit}\n`
text += `Dhuha : ${data.result.dhuha}\n`
text += `Dzuhur : ${data.result.dzuhur}\n`
text += `Ashar : ${data.result.ashar}\n`
text += `Maghrib : ${data.result.imsak}\n`
text += `Isya : ${data.result.isya}`
reply(text)
})
.catch(console.error)
break
//=================================================
case 'smeme':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 if (!text) throw `Balas Image Dengan Caption ${prefix + command}`
if (!quoted) throw `Balas Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
reply('*Sabar Cuy Loading*')
const { uptotelegra } = require('./lib/upload')
mee = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
haikal.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
}
break
//=================================================
case 'toimage': case 'toimg': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(from, { image: buffer }, {quoted:fkontak})
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!quoted) throw `Balas sticker video Dengan Caption ${prefix + command}`
if (/video/.test(mime)) {
let { webp2mp4File } = require('./lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, {quoted:fkontak})
await fs.unlinkSync(media)
}
}
break
case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await haikal.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {document: audio.data, mimetype: 'audio/mpeg', fileName: `Convert By ${haikal.user.name}.mp3`}, { quoted:fkontak })
}
break
//=================================================//
case 'toaudio': case 'audio': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, { quoted:fkontak })
}
break
//=================================================//
case 'tovn': case 'voice': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(from, {audio: audio.data, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6282373608217',
title: `L1S MODS WA`,
sourceUrl: `https://wa.me/6282373608217`, 
thumbnail: thumb
}
}})
}
break
//=================================================//
case 'togif': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:fkontak})
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//=================================================//
case "quotes":
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 var resi = await Quotes()
teks = `\nAuthor: ${resi.author}\n`
teks = `\nQuotes:\n`
teks = `${resi.quotes}\n`
reply(teks)
break
//=================================================//
case "darkjoke": case "darkjokes":
 var ress = await Darkjokes()
teks = "*Darkjokes*"
haikal.sendMessage(m.chat, { image : { url : ress }, caption: teks }, { quoted:fkontak })
break
//=================================================//
case 'emojimix': { 
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'setcmd': {
if (!quoted) return reply('*Khusus Premium*')

if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!quoted) return reply('*Khusus Premium*')

if (!m.quoted) throw 'Reply Pesan!'
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
reply(`Done!`)
}
break
//=================================================//
case 'listcmd': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')

let teks = `list cmd`
haikal.sendText(from, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'addpdf':{
if (!isOwner) return reply('*Khusus Premium*')

if (args.length < 1) return reply('Nama pdf apa')
let teks = `${text}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./database/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break
//=================================================//
case 'delpdf':{
if (!isOwner) return reply('*Khusus Premium*')

if (args.length < 1) return reply('Masukan query')
let teks = `${text}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break
//=================================================//
case 'listpdf': {
if (!isOwner) return reply('*Khusus Premium*')

let teksoooo = '┌──⭓「 *LIST PDF* 」\n│\n'
for (let x of docunye) {
teksoooo = `│⭔ ${x}\n`
}
teksoooo = `│\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf HW MODS WA + sambil reply pesan target* \n\n Contoh 2 : yopdf HW MODS WA`
m.reply(teksoooo)
}
break
//=================================================//
case 'yopdf':{
if (!isOwner) return reply('*Khusus Premium*')

let teks = `${text}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:fkontak})
}
}
break
//=================================================//
case 'sendpdf': {
if (!isOwner) return reply('*Khusus Premium*')
if (!text) return reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${text}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:fkontak})
reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addzip':{
if (!isOwner) return reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama zip apa')
let teks = `${text}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break
//=================================================//
case 'delzip':{
if (!isOwner) return reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break
//=================================================//
case 'listzip': {
if (!isOwner) return reply('*Khusus Premium*')
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let x of zipnye) {
teksooooo = `│⭔ ${x}\n`
}
teksooooo = `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip HW MODS WA + sambil reply pesan target* \n\n Contoh 2 : yozip HW MODS WA`
m.reply(teksooooo)
}
break
//=================================================//
case 'yozip':{
if (!isOwner) return reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:fkontak})
}
}
break
//=================================================//
case 'sendzip': {
if (!isOwner) return reply('*Khusus Premium*')
if (!text) return reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:fkontak})
reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addapk':{
if (!isOwner) return reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama apk apa')
let teks = `${text}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break
//=================================================//
case 'delapk':{
if (!isOwner) return reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break
//=================================================//
case 'listapk': {
if (!isOwner) return reply('*Khusus Premium*')
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo = `│⭔ ${x}\n`
}
teksoooooo = `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk HW MODS WA + sambil reply pesan target* \n\n Contoh 2 : yoapk HW MODS WA`
m.reply(teksoooooo)
}
break
//=================================================//
case 'yoapk':{
if (!isOwner) return reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:fkontak})
}
}
break
//=================================================//
case 'sendapk': {
if (!isOwner) return reply('*Khusus Premium*')
if (!text) return reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:fkontak})
reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addvn':{
if (!isOwner) return reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(text)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
vnnye.push(text)
await fsx.copy(delb, `./database/Audio/${text}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
//=================================================//
case 'delvn':{
if (!isOwner) return reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(text)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(text)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${text}.mp3`)
reply(`Sukses delete vn ${text}`)
}
break
//=================================================//
case 'listvn':{
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `│⭔ ${x}\n`
}
reply(teksooo)
}
break
//=================================================//
case 'list': case 'store': {
                if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
                if (!isAlreadyResponListGroup((m.isGroup ? m.chat : botNumber), db_respon_list)) return reply(`Belum ada list message yang terdaftar di group/chat ini`)
                let metadata = await haikal .groupMetadata(m.chat)
                let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia Di Grub ${metadata.subject}\n⏱️ Time: ${time}\n\n`
                for (let i of db_respon_list) {
                    if (i.id === (m.isGroup ? m.chat : botNumber)) {
                        teks += `*>* ${i.key}\n`
                    }
                }
                teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key}, maka kirim pesan ${db_respon_list[0].key} kepada bot`
                haikal .sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
            }
                break
            case 'dellist': {
                if (!isAdmins) return reply('Fitur Khusus admin & owner!')
                if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
                if (!text) return reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
                if (!isAlreadyResponList((m.isGroup ? m.chat : botNumber), q.toLowerCase(), db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
                delResponList((m.isGroup ? m.chat : botNumber), q.toLowerCase(), db_respon_list)
                reply(`Sukses delete list message dengan key *${q}*`)
            }
                break
            case'addlist':
            if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            var args1 = q.split("|")[0].toLowerCase()
            var args2 = q.split("|")[1]
            if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa\n\nNOTE :  TIDAK USAH MENGGUNAKAN SPASI !\n\n.addlist ff|diamond ff hari ini ✅\n.addlist ff| diamond ff ❌`)
            if (isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (/image/.test(mime)) {
                let media = await haikal .downloadAndSaveMediaMessage(quoted)
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                addResponList(m.chat, args1, args2, false, '-', db_respon_list)
                reply(`Sukses set list message dengan key : *${args1}*`)
            }
            break
            case 'updatelist': case 'update':
   	     if (!m.isGroup) return m.reply('Fitur Khusus Group!')
			if (!isAdmins) return m.reply('Fitur Khusus admin!')
            var args1 = q.split("|")[0].toLowerCase()
            var args2 = q.split("|")[1]
            if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
            if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (/image/.test(mime)) {
                let media = await haikal .downloadAndSaveMediaMessage(quoted)
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`Sukses update respon list dengan key *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
                reply(`Sukses update respon list dengan key *${args1}*`)
            }
            break
case 'addmsg': {
if (!isOwner && !isAdmins) return reply('*Khusus Premium*')
 if (!m.quoted) throw 'Reply Pesan Yang Ingin Disave Di Database'
 if (!text) throw `Example : ${prefix + command} nama file`
 let msgs = global.db.data.database
 if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
 msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
//=================================================//
case 'sendlist': {
if (!isOwner) return reply('*Khusus Premium*')

 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 haikal.copyNForward(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", msgs[text.toLowerCase()], true)
 reply(`Sukses Mengirim Pesan Ke ${m.quoted.sender}`)
}
break
//=================================================//
case 'listmsg': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')

 let msgs = global.db.data.database
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break
//=================================================//
case 'delmsg': case 'deletemsg': {
if (!isOwner) return reply('*Khusus Premium*')

let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
//=================================================//
case 'getmsg': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')

 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 haikal.copyNForward(from, msgs[text.toLowerCase()], true)
}
break
//=================================================//
case 'google': {
 if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
//=================================================//
case 'pembayaran': case 'nope': case 'listpayment':{

reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Pembayaran Silahkan Klick Link Di Bawah Yah : 

https://telegra.ph/file/150796c07db8130562ee9.jpg

Terima Kasih`)
}
break
//=================================================//
case 'couple': {

let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, {quoted:fkontak})
haikal.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, {quoted:fkontak})
}
break
//=================================================//
case 'coffe': case 'kopi': {

haikal.sendMessage(from, {image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`},{quoted:fkontak})
}
break
//=================================================//
case 'getname': {
if (!isOwner) return reply('*khusus Premium*')

if (qtod === "true") {
namenye = await haikal.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
haikal.sendMessage(from, {text:"Reply orangnya"}, {quoted:fkontak})
}
}
break
//=================================================//
case 'getpic': {
if (!isOwner) return reply('*khusus Premium*')

if (qtod === "true") {
try {
pporg = await haikal.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(from, { image : { url : pporg }, caption:`Done` }, {quoted:fkontak})
} else if (qtod === "false") {
try {
pporgs = await haikal.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, {quoted:fkontak})
}
}
break


//=================================================//
case 'pppanjang': case 'setppbot2':{
				if (!isOwner && !isOwner) return reply('Fitur Khusus owner!')
                if (!quoted) return reply(`Reply foto dgn caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`)
				let media = await haikal.downloadAndSaveMediaMessage(quoted)
				var { img } = await generateProfilePicture(media)
            	await haikal.query({
                    tag: 'iq',
                    attrs: {
                        to: botNumber,
                        type:'set',
                        xmlns: 'w:profile:picture'
                    },
                    content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    } 
                    ]
                })
                reply("Done!!!")
				}
				break
case "setppbot": {
if (!isOwner) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await haikal.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await haikal.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses`)
} else {
var memeg = await haikal.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses`)
}
}
        break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isOwner) return reply('khusus creator bot')
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await haikal.downloadAndSaveMediaMessage(m)
await haikal.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
reply('done')
}
break
//=================================================//
case 'block': {
if (!isOwner) return reply('*Khusus Premium*')

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isOwner) return reply('*Khusus Premium*')

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'stalktiktok':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')

if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
haikal.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break
//=================================================//
case 'listpanel': case 'panel':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let foottgkzooi = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isOwner ? 'Premium' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Pricelist Harga Muzanaire Panel* :

1GB RAM/1GB Disk/25% CPU
Rp1.500,/1 BULAN

2GB RAM/2GB Disk/50% CPU
Rp2.000,/1 BULAN

3GB RAM/3GB Disk/75% CPU
Rp3.000,00/1 BULAN

4GB RAM/4GB Disk/100% CPU
Rp4.000,00/1 BULAN

5GB RAM/5GB Disk/125% CPU
Rp5.000,00/1 BULAN

6GB RAM/6GB Disk/150% CPU
Rp6.000.00/1 BULAN

7GB RAM/7GB Disk/175% CPU
Rp7.000.00/1 BULAN


Nb:
Kalau Andah sudah Transfer artinya anda setuju dengan segala kebijakan kami.
Untuk pricelist renew berlaku jika ada server yg masih aktif di dalam akun minimal selama 23hari.

*[ Administrator]*
Ketik .owner Untuk Menghubungi owner`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": foottgkzooi, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//
case 'infogempa':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
var caption = `Lokasi : ${data.result.lokasi}\n`
caption += `Waktu : ${data.result.waktu}\n`
caption += `Potensi : ${data.result.potensi}\n`
caption += `Magnitude : ${data.result.magnitude}\n`
caption += `Kedalaman : ${data.result.kedalaman}\n`
caption += `Koordinat : ${data.result.koordinat}`
haikal.sendMessage(from, { image: { url: data.result.map }, caption })
break
//=================================================
case 'lirik':
if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/lirik?apikey=${apikey}&query=${command}`)
reply(data.result)
break
//=================================================//
case 'jadwaltv':
if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/${args[0]}?apikey=${apikey}`)
var txtayaj = `Jadwal TV ${args[0].toUpperCase()}\n`
for (var x in data.result) {
txtayaj += `${x} - ${data.result[x]}\n`
}
reply(txtayaj)
break
//=================================================
case 'jadwaltvnow':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
var txtayajas = `Jadwal TV Now :\n`
for (var x in data.result) {
txtayajas += `${x.toUpperCase()}${data.result[x]}\n\n`
}
reply(txtayajas)
break
//=================================================
case 'cerpen':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=${apikey}`)
var textpp = `Title : ${data.result.title}\n`
textpp += `Creator : ${data.result.creator}\n`
textpp += `Story :\n${data.result.cerpen}`
reply(textpp)
break
//=================================================
case 'ceritahoror':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${apikey}`)
var caption = `Title : ${data.result.title}\n`
caption += `Desc : ${data.result.desc}\n`
caption += `Story :\n${data.result.story}\n`
haikal.sendMessage(from, { image: { url: data.result.thumbnail }, caption })
break
//=================================================
case 'cuaca':
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${args[0]}?apikey=${apikey}`)
var textppp = `Tempat : ${data.result.tempat}\n`
textppp += `Cuaca : ${data.result.cuaca}\n`
textppp += `Angin : ${data.result.angin}\n`
textppp += `Description : ${data.result.description}\n`
textppp += `Kelembapan : ${data.result.kelembapan}\n`
textppp += `Suhu : ${data.result.suhu}\n`
textppp += `Udara : ${data.result.udara}\n`
textppp += `Permukaan laut : ${data.result.permukaan_laut}\n`
haikal.sendMessage(from, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
reply(textppp)
break
//=================================================
case 'afk': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`${pushname}... Telah Afk Dengan Alasan ${text ? ': ' + text : ''}`)
}
break
//=================================================
case 'buatsw':{
if (!isOwner) return reply('*Khusus Premium*')
let men = [];
for (let x of pengguna) {
men.push(x)
const result = [ x ]
if (!m.quoted && !text) throw 'reply pesan'
if (m.quoted && m.quoted.mtype === 'conversation' && !text) _m = haikal.sendMessage('status@broadcast', {
text: m.quoted.text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
if (!m.quoted && text) _m = haikal.sendMessage('status@broadcast', {
text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
}
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case "buatswimage":{
if (!isOwner) return reply('*Khusus Premium*')
 if (!quoted) throw `Balas image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Balas image dengan caption *${prefix + command}*`
const media = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage('status@broadcast', { image: { url: media }}, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case "buatswvideo":{
if (!isOwner) return reply('*Khusus Premium*')
 if (!quoted) throw `Balas video Dengan Caption ${prefix + command}`
if (!/video/.test(mime)) throw `Balas video dengan caption *${prefix + command}*`
const media = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage('status@broadcast', { video: { url: media }}, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case "getsw":{
  if (m.quoted?.chat != "status@broadcast")
return reply(`Reply Status WhatsApp !`);
  let buffer = await m.quoted.download();
  await haikal.sendFile(m.chat, buffer, "", m.quoted.text || "", null, false, {quoted: fkontak,})
.catch((_) => m.reply(m.quoted.text || ""));
}
break;
case 'upsw': 
        {
          if (!isOwner) return new reply('Owners only') 
          if (args.length < 1) return reply("perihal apa?");
          if (/image/.test(mime)) {
            let imgSw = await haikal.downloadAndSaveMediaMessage(quoted);
            await haikal.sendMessage(
              "status@broadcast",
              { image: { url: imgSw }, caption: q },
              { statusJidList: pengguna },
            );
             new reply('Done')
          } else if (/video/.test(mime)) {
            let VidSw = await haikal.downloadAndSaveMediaMessage(quoted);
            await haikal.sendMessage(
              "status@broadcast",
              { video: { url: VidSw }, caption: q },
              { statusJidList: pengguna },
            );
            new reply('Done')
            
          } else if (/audio/.test(mime)) {
            let VnSw = await haikal.downloadAndSaveMediaMessage(quoted);
            await haikal.sendMessage(
              "status@broadcast",
              { audio: { url: VnSw }, mimetype: "audio/mp4", ptt: true },      
              { backgroundColor: "#FF000000", statusJidList: pengguna }, // #FF000000
            );
            new reply('Done')
          } else if (q) {
            haikal.sendMessage(
              "status@broadcast",
              { text: q },
              { backgroundColor: "#FF000000", font: 3, statusJidList: pengguna },
            );
          } else {
            new reply(
              "Replay Media Jika Mau Dengan Caption Ketik .status caption",
            );
          }
        }
break
case 'swin':{
if (!isOwner) return reply('*Khusus Premium*')
if (!text) return reply(`masukin text nya`)
haikal.sendMessage('status@broadcast', {
text: `${text}`
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'vnsw':{
if (!isOwner) return reply('*Khusus Premium*')
if (!text) return reply(`masukin text nya yang ada di database listvn`)
var huy = fs.readFileSync(`./database/Audio/${text}.mp3`)
haikal.sendMessage('status@broadcast', {audio: huy, mimetype: 'audio/mp4', ptt:true},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'inisw':{
if (!isOwner) return reply('*Khusus Premium*')
if (!text) return reply(`masukin text nya yang ada di database listvn`)
var buu = fs.readFileSync(`./database/Audio/${text}.mp3`)
haikal.sendMessage('status@broadcast', {audio: buu, mimetype:'audio/mp4', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6282373608217',
title: `L1S MODS WA`,
sourceUrl: `https://wa.me/6282373608217`, 
thumbnail: thumb}}},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'hapusdb':
if (!isOwner) return reply('*Khusus Premium*')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282373608217@s.whatsapp.net`)
yakiii = text.split("|")[0].replace(/[^0-9]/g, '')
unnnp = pengguna.indexOf(yakiii)
pengguna.splice(unnnp, 1)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
reply(`Nomor ${yakiii} Telah Di Hapus Dari Database!!!`)
break
//=================================================//
case 'listdb':
if (!isOwner) return reply('*Khusus Premium*')
if (isBan) return reply('*Lu Di Ban Owner*')
 teksoooo = '*List Database*\n\n'
for (let i of pengguna) {
teksoooo += `- ${i}\n`
}
teksoooo += `\n*Total : ${pengguna.length}*`
haikal.sendMessage(from, { text: teksoooo.trim() }, 'extendedTextMessage', { quoted:fkontak, contextInfo: { "mentionedJid": pengguna } })
break
//=================================================
case "buatswptv":
{
if (!isOwner) return reply('*Khusus Premium*')
 if (!m.quoted) throw `Balas Video Dengan Caption ${prefix + command}`
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted:fkontak})
haikal.relayMessage('status@broadcast', ptv.message, {
statusJidList: pengguna
})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'toptv':
{
if (!isOwner) return reply('*Khusus Premium*')
 if (!m.quoted) throw `Balas Video Dengan Caption ${prefix + command}`
  if (/video/.test(mime)) {
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted:fkontak})
haikal.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break
//=================================================//
        case "1gb": {
     
        if (!isSeler && !isOwner && !jangan) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer,password`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let password = t[2];
let name = username + ""
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "10"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`


haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`*SUKSES MEMBUAT SERVER✅*
${readmore}
Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}

break
case "2gb": {

    if (!isSeler && !isOwner && !jangan) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer,password`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let password = t[2];
let name = username + ""
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`*SUKSES MEMBUAT SERVER✅*
${readmore}
Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)



}

break
case "3gb": {

    if (!isSeler && !isOwner && !jangan) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer,password`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let password = t[2];
let name = username + ""
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "300"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`*SUKSES MEMBUAT SERVER✅*
${readmore}
Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)



}
break
case "4gb": {
        if (!isSeler && !isOwner && !jangan) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer,password`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let password = t[2];
let name = username + ""
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "200"
let disk = "4000"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`*SUKSES MEMBUAT SERVER✅*
${readmore}
Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}

break
case "unli": {
       if (!isSeler && !isOwner && !jangan) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer,password`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let password = t[2];
let name = username + ""
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`*SUKSES MEMBUAT SERVER✅*
${readmore}
Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}

break
case "5gb": {
    if (!isSeler && !isOwner && !jangan) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer,password`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let password = t[2];
let name = username + ""
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "500"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`*SUKSES MEMBUAT SERVER✅*
${readmore}
Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}
break
case "6gb": {
    if (!isSeler && !isOwner && !jangan) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer,password`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let password = t[2];
let name = username + ""
let egg = global.eggsnya
let loc = global.location
let memo = "6089"
let cpu = "300"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`*SUKSES MEMBUAT SERVER✅*
${readmore}
Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}
break
case "7gb": {
    if (!isSeler && !isOwner && !jangan) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer,password`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let password = t[2];
let name = username + ""
let egg = global.eggsnya
let loc = global.location
let memo = "7120"
let cpu = "400"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`*SUKSES MEMBUAT SERVER✅*
${readmore}
Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}

break
case "8gb": {
    if (!isSeler && !isOwner && !jangan) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer,password`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let password = t[2];
let name = username + ""
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "400"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses Membuat Server✅

Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!
${readmore}
*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}

break
case "9gb": {
    if (!isSeler && !isOwner && !jangan) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer,password`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let password = t[2];
let name = username + ""
let egg = global.eggsnya
let loc = global.location
let memo = "9050"
let cpu = "500"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`*SUKSES MEMBUAT SERVER✅*
${readmore}
Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}

break
case "10gb": {
    if (!isSeler && !isOwner && !jangan) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer,password`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let password = t[2];
let name = username + ""
let egg = global.eggsnya
let loc = global.location
let memo = "10080"
let cpu = "500"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`*SUKSES MEMBUAT SERVER✅*
${readmore}
Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}

break
               case "ramlist":

lrm = `RAM YANG TERSEDIA :${readmore}
1GB ✅
2GB ✅
3GB ✅
4GB ✅
5GB ✅
6GB ✅
7GB ✅
8GB ✅
9GB ✅
10GB ✅
UNLI ✅`
haikal.sendMessage(from, {text : lrm}, {quoted:fkontak})
break 
        case "panel": {
const owned = `${global.owner}@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*
${readmore}

CARA ADD USER PANEL :
ram user,nomer,password

contoh : 1gb L1S,6282373608217,1722

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
haikal.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted:fkontak })
}
break
                case "listsrv": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey2
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await haikal.sendMessage(m.chat, { text: messageText }, { quoted:fkontak });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
              case "listusr": {
  if (!isOwner) return reply('Khusus Owner')
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await haikal.sendMessage(m.chat, { text: messageText }, { quoted:fkontak });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "delsrv": {
      if (!isOwner) return reply(`KHUSUS OWN `)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr": {
  if (!isOwner) return reply(`KHUSUS OWNER`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
                case "addusr": {

if (!isOwner) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await haikal.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
})
haikal.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break
                case "crateadmin": {
if (!isOwner) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await haikal.sendMessage(m.chat, listMessage)

    await haikal.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

} 
        break
        case "listadmin": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await haikal.sendMessage(m.chat, { text: messageText }, { quoted:fkontak });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
             case "addsrv": {
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break
//=================================================
case "buatsws":{
if (!isOwner) return reply('*Khusus Premium*')
 if (!quoted) throw `Balas Sticker Dengan Caption ${prefix + command}`
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
const media = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage('status@broadcast', { sticker: { url: media }}, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'family100': {
 if ('family100'+from in _family100) {
 reply('Masih Ada Sesi Yang Belum Diselesaikan!')
 throw false
 }
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
 let random = anu[Math.floor(Math.random() * anu.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 _family100['family100'+from] = {
 id: 'family100'+from,
 pesan: await haikal.sendText(from, hasil, m),
 ...random,
 terjawab: Array.from(random.jawaban, () => false),
 hadiah: 6,
 }
}
break
//=================================================//
case 'tebak': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await JSON.parse(fs.readFileSync('./database/Games/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await haikal.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:fkontak})
 haikal.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(12000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:fkontak}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(12000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:fkontak}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(12000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:fkontak}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(12000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:fkontak}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(12000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:fkontak}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(12000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/ea6aa75bf8c2f86f15d76.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:fkontak}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break
//=================================================//
case 'kuismath': case 'math': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let { genMath, modes } = require('./src/math')
 if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
 let result = await genMath(text.toLowerCase())
 haikal.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break
//=================================================//
case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
reply('Partner ditemukan!')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await haikal.sendText(room.x, str, m, { mentions: parseMention(str) } )
await haikal.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
//=================================================//
case 'delttc': case 'delttt': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
delete this.game[roomnya.id]
reply(`Berhasil delete session room tictactoe !`)
}
break
//=================================================//
case 'suitpvp': case 'suit': {
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await haikal.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) haikal.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//=================================================
case 'jadibug': {
if (!isOwner) return reply('*khusus Premium*')
if (!text) throw `Contoh : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
let teks = `${text}`
{
const cap = `${teks} ${buttonkal}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted:fkontak})
haikal.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
}
break
 //=================================================
case 'qc': {
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else  reply("Input teks atau reply teks yang ingin di jadikan quote!")
if (!text) return reply('masukan text')
if (text.length > 50) return reply('Maksimal 50 Teks!')
let ppnyauser = await await haikal.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
haikal.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
case  'qcimg':{
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await haikal.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await haikal.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
haikal.sendMessage(from,{image: buffer},{quoted : hw})
})
}
break
//=================================================//
case  'qc2':{
if (isBan) return reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await haikal.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await haikal.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await haikal.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, 
author: global.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 
//=================================================
case 'delete':{
haikal.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break

//=================================================
default:
if (budy.startsWith('=>')) {
if (!isOwner) return reply('*khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isOwner) return reply('*khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isOwner) return reply('*khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
            	this.menfes = this.menfes ? this.menfes : {}
            let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
            if (room) {
            	if (/^.*(next|leave|start)/.test(m.text)) return
            if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
            find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
            let other = find.a == m.sender ? find.b : find.a
            await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
            	contextInfo: {
            	...m.msg.contextInfo,
            participant: other
            }
         } : {})
    }
}
//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
