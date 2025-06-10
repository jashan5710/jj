const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Jashandhaliwal5-en7F.aternos.me',
    port: 39988,
    username: 'DashAFK_Bot' // Use any name if server is cracked
  });

  bot.on('spawn', () => {
    console.log('✅ Bot joined the server!');
    
    // Move forward & jump every few seconds
    setInterval(() => {
      bot.setControlState('forward', true);
      bot.setControlState('jump', true);
      setTimeout(() => {
        bot.setControlState('forward', false);
        bot.setControlState('jump', false);
      }, 3000);
    }, 8000);
  });

  bot.on('end', () => {
    console.log('🔁 Bot disconnected. Reconnecting...');
    setTimeout(createBot, 10000);
  });

  bot.on('kicked', reason => console.log('⛔ Kicked:', reason));
  bot.on('error', err => console.log('⚠️ Error:', err));
}

createBot();
