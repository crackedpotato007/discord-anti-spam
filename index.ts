const spam = new Map();
const spamcheck = function async(message: any, mute:number, kick:number, ban: number) {
    if(arguments.length < 4) {console.log('[discord-anti-spam]Appropriate number of arguments haven\'t been passed functionallity will suffer ')}
    if(message.author.bot) return
    if(!spam.get(message.author.id)){
    spam.set(message.author.id, {val: 1})
    }
    else {
        spam.get(message.author.id).val++
    }
let muty = message.guild.roles.cache.find(r => r.name.toLowerCase() == "muted")
if(!muty)return
let spamcount = spam.get(message.author.id).val
if(mute){
if(spamcount === mute) {
    message.member.roles.add(muty)
    message.channel.send(`Muted ${message.author.username} for spamming`)
}
}
if(kick){
if(spamcount === kick)
message.member.kick()
message.channel.send(`Kicked ${message.author.username} for spamming`)
}
if(ban){
    if(spamcount === ban)
    message.member.kick()
    message.channel.send(`Banned ${message.author.username} for spamming`)
    }
}
setInterval(() => {spam.clear()}, 1000 * 10)
module.exports.spamcheck = spamcheck