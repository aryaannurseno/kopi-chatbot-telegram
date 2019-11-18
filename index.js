const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

 
// replace the value below with the Telegram token you receive from @BotFather
const token = '927137673:AAFXsWp9gjpYJ3J7n-TtwYZqYNvU2HbYvGA';

const bot = new TelegramBot(token, {polling: true});

let chat;

bot.onText(/\/echo (.+)/, (msg, match) => {
    console.log(msg.chat.id);
    if(msg){
        chat = msg.chat.id;
    }
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});
 
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
 
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});
 


       const task = cron.schedule('* * * * *', () => {
        bot.sendMessage('816617979', 'Kopi anda penuh');
        });

        bot.onText(/\/stop/, (msg, match) => {
            task.stop();
            bot.sendMessage(msg.chat.id, 'reminder berhenti');
        });

        const task2 = cron.schedule('0 0 0 * * *', () => {
            task.start();
            console.log('task starts again')
        })

        task2.start();
