client.on("ready", () => {
         const guild = client.guilds.cache.get(config.sunucu)
           console.log(`✅・${guild.name} Sunucusu İçin "${config.vanity}" URL'si Spamlanmaya Başlandı`)


    setInterval(async () => {
        if(guild.vanityURLCode == config.vanity) {
            let onay = new Discord.MessageEmbed()
            .setAuthor(guild.name, guild.iconURL({dynamic: true}))
            .setColor('#3bff00')
            .setTimestamp()
            .setDescription(`"**🎉・${guild.name}** Sunucusunun Özel URL'si Belirtildiği Gibi **\`${config.vanity}\`** Olarak Değiştirildi`)
                let kanal = await guild.channels.cache.get(config.urlspammer)
                     await kanal.send({embeds: [onay]})


    console.log(`${guild.name} = "${guild.vanityURLCode}" Durum: ✅`) 
        console.log(`❌・Bottan Çıkış Yapıldı`)
            process.exit()
                } else {
                    arvis(config.vanity, config.guild, process.env.TOKEN)
                         }}, 1*500)})

    async function arvis(vanity, token) {
        const spammer = {
            url: `https://discord.com/api/v8/guilds/${config.sunucu}/vanity-url`,
                body: {
                    code: `${vanity}`},
    json: true,
        method: 'PATCH',
            headers: {
                "Authorization": `Bot ${process.env.TOKEN}`
                    }
                        };

    request(spammer, (err, res, body) => {
        if (err) {
            return console.log(err)}})}

client.login(config.token).catch(err => { console.log("❌・Token Hatalı")})


                //     vvv GLITCH İÇİN vvv     //
//client.login(process.env.token).catch(err => { console.log("❌・Token Hatalı")})










//Discord: ArviS#0011
//Discord Sunucum: https://discord.gg/strangerthingstr

//İnstagram: @arvis_here
