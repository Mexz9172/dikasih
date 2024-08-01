const fs = require('fs')
const chalk = require('chalk')
const version = require("@whiskeysockets/baileys/package.json").version 
global.namasc = "CaaLiss - Botz"
global.versisc = "V1"
global.baileysVersion = `Baileys version ${version}`
global.TypeBaileys = `whiskeysockets`
global.ytname = "17muzan" //ur yt chanel name
global.socialm = "ig_05holis" //ur github or insta name
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""
global.tekspushkonv5 = ""
global.wm = '> © Muzan TECH';
global.location = "Palembang Sumatera Selatan, Indonesia " //ur location
global.gr = 'https://chat.whatsapp.com/DDaBVMfZf5U6nZO2Lf6'
global.ig = '@17_HOLIS' // ubah aja
global.email = 'yudhaperdana809@gmail.com' //serah
global.region = 'indonesia' // serah
global.ownername = 'DHA BOTZ' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.domain = 'https://github.com/DhaBotz/' // Isi Domain Lu
global.apikey2 = 'ptla_t3j8XEl1Yz7xYKcVwO5dGDUuVqWmGmio0NEQ8ErMTgP' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_1dpDhY0FuUFmrYEWyJzc8p0DlAtoDVBAC2ZKLmQBrE4' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.owner = ['6282287486762'] // ubah aja pake nomor lu
global.muzan = "`"
global.botname = '> DHA BOTXZ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '> DHA BOTXZ' // ubah aja ini nama sticker
global.author = '@YUDZZ' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Session' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = true
global.wlcmm = []
global.anticall = false
global.antiviewonce = true 
global.autodownload = true
global.antiswview = false
global.autobio = true
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
