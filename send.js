const token = 'YOUR_TELEGRAM_BOT_TOKEN';  // Заміни на токен свого бота
const chatId = 'YOUR_TELEGRAM_CHAT_ID';   // Заміни на свій Chat ID

document.getElementById('contactForm').addEventListener('submit', function (event) {
event.preventDefault(); // Запобігає перезавантаженню сторінки

            // Отримання значень з форми
const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value;
const childAge = document.getElementById('childAge').value;
const childName = document.getElementById('childName').value;
const question = document.getElementById('question').value;

// Формування повідомлення
const message = `
    🔔 Нова заявка на сайті! 🔔\n
    👤 Ім'я: ${name}\n
    📞 Телефон: ${phone}\n
    👶 Вік дитини: ${childAge}\n
    🧒 Ім'я дитини: ${childName}\n
    ❓ Питання: ${question}
`;

// Надсилання повідомлення через Telegram API
axios.get(`https://api.telegram.org/bot${token}/sendMessage`, {
    params: {
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
}
    })
            .then(response => {
                alert('Повідомлення успішно надіслано!');
                document.getElementById('contactForm').reset(); // Очищення форми
            })
            .catch(error => {
                console.error('Помилка при надсиланні повідомлення:', error);
                alert('Сталася помилка. Спробуйте ще раз.');
            });
        });