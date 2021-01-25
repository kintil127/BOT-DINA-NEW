exports.donate = (id, BotDina, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${BotDina}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Silahkan donasi dibawah ini :
   
⚜ *OVO*: sung nanya aj
⚜ *#DANA*: sung nanya aj
⚜ *#BANK*:  sung nanya aj
⚜ *#PULSA*:  sung nanya aj
⚜ *#GOPAY*:  sung nanya aj

📺 *Iklan* :

✅ Follow akun instagram admin ${ad}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${BotDina} ?*
☎️ WA : *${wa.me/6281388366383/}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${trrgantung mood} ‼️

✳️ Official Grub [1] : ${kgm}

✳️ Official Grub [2] : ${kgm2}

  
🔰 -----[ *POWERED BY ${BotDina}* ]----- 🔰`
}
