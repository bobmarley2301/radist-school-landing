const express = require("express");
const crypto = require("crypto");
const axios = require("axios");

const app = express();
app.use(express.json());

const WAYFORPAY_MERCHANT_SECRET = "YOUR_MERCHANT_SECRET"; // Замініть на ваш секретний ключ
const TELEGRAM_BOT_TOKEN = "7956466370:AAGVoHPJjWMx6XVfc8owmwambzBHz-m-EbE";
const TELEGRAM_CHAT_ID = "5914562778";

// Функція для перевірки підпису WayForPay
function checkWayForPaySignature(data, signature) {
  const hmac = crypto.createHmac("md5", WAYFORPAY_MERCHANT_SECRET);
  const calculatedSignature = hmac.update(JSON.stringify(data)).digest("hex");
  return calculatedSignature === signature;
}

// Функція для відправки повідомлення в Telegram
async function sendTelegramMessage(message) {
  try {
    await axios.get(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        params: {
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        },
      }
    );
  } catch (error) {
    console.error("Помилка при відправці повідомлення в Telegram:", error);
  }
}

// Обробник вебхука від WayForPay
app.post("/webhook", async (req, res) => {
  const { data, signature } = req.body;

  // Перевіряємо підпис
  if (!checkWayForPaySignature(data, signature)) {
    console.error("Невірний підпис від WayForPay");
    return res.status(400).json({ error: "Невірний підпис" });
  }

  // Перевіряємо статус транзакції
  if (data.transactionStatus === "Approved") {
    const message = `
            💰 Новий успішний платіж! 💰\n
            📝 Номер замовлення: ${data.orderReference}\n
            💵 Сума: ${data.amount} ${data.currency}\n
            👤 Платник: ${data.clientName}\n
            📞 Телефон: ${data.clientPhone}\n
            📧 Email: ${data.clientEmail}\n
            🕒 Дата: ${new Date().toLocaleString()}
        `;

    await sendTelegramMessage(message);
  }

  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
