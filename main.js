const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('QR كود المسح:', qr);
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ البوت جاهز للعمل!');
});

client.on('message', async msg => {
    if (msg.body.toLowerCase() === '!القائمة') {
        await msg.reply('📜 *قائمة الأوامر الخاصة بعبد ميليوداس:*

' +
        '✅ !games - 🎮 ألعاب ممتعة
' +
        '✅ !anime_info - 🏮 معلومات عن أنمي
' +
        '✅ !download - 📥 تحميل من مواقع التواصل
' +
        '✅ !convert - 🎨 تحويل صورة/فيديو
' +
        '✅ !marriage - 💍 زواج عشوائي
' +
        '✅ !admin - ⚡ أوامر المشرفين
' +
        '✅ !owner - 🔥 أوامر المالك فقط
');
    }
});

client.initialize();
