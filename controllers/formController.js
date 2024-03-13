import TelegramBot from 'node-telegram-bot-api'

class FormController {
  constructor() {
    this.TELEGRAM_BOT_TOKEN = '7096152420:AAEvnjq6vxPuS0-ha_vC5femNQJGlJtYloc'
    this.TELEGRAM_CHAT_ID = '-1001933839701'

    this.bot = new TelegramBot(this.TELEGRAM_BOT_TOKEN, { polling: false });
    this.send = this.send.bind(this); 
  }

  async send(req, res) {
    const { name, phone, course } = req.body

    const text = `Новое сообщение с формы:\nИмя: ${name}\nНомер телефона: ${phone}\nКурс: ${course}`;

    // Отправляем сообщение в Telegram
    this.bot.sendMessage(this.TELEGRAM_CHAT_ID, text)
      .then(() => {
        res.send('Сообщение успешно отправлено в Telegram');
      })
      .catch((error) => {
        console.error('Ошибка отправки сообщения в Telegram:', error.message);
        res.status(500).send('Ошибка отправки сообщения в Telegram');
      });
  }
}

export default new FormController()