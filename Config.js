const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['212710851511']
global.ownername = "ℜ𝔢𝔳𝔢𝔯𝔰𝔢𝔡✦𝔭𝔰𝔶𝔳𝔥𝔬"//owner name
global.ytname = "𝕽𝖊𝖛𝖊𝖗𝖘𝖊𝖉♥︎𝖕𝖘𝖞𝖈𝖍𝖔"
global.socialm = "GitHub:𝖇1𝖈𝖔𝖉𝖊𝖝"
global.location = "𝕸𝖔𝖗𝖔𝖈𝖈𝖔"

global.botname = '𝐌𝐀𝐑𝐈𝐀-𝐌𝐃' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘AʏᴜSʜ✘𓆪_✰'
global.packname = 'Sticker By'
global.author = '𝕽𝖊𝖛𝖊𝖗𝖘𝖊𝖉✦✦𝖕𝖘𝖞𝖈𝖍𝖔'
//console view/theme
global.themeemoji = '✦'
global.wm = "𝕻𝖘𝖞𝖈𝖍𝖔 𝖇𝖔𝖙"


//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*♡𝕽𝖊𝖛𝖊𝖗𝖘𝖊𝖉✦𝖕𝖘𝖞𝖈𝖍𝖔♡*\n\n*♧ Bot link:* \nhttps://github.com/AYUSH-PANDEY023/Maria-MD\n',
    prem: "*Don't be a psycho nga. this feature is only availablefor premium users" *,
    admin: '*PSYCHO!!! this command is available for admins only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by my owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*Be patient 𝔪𝔶 𝔰𝔴𝔢𝔢𝔱 𝔭𝔰𝔶𝔠𝔥𝔬 your request is being processed...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
