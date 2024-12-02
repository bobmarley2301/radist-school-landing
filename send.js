const token = '7956466370:AAGVoHPJjWMx6XVfc8owmwambzBHz-m-EbE';
const chatId = '5228123933';

document.getElementById('contactForm').addEventListener('submit', function (event) {
event.preventDefault();


const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value;
const childAge = document.getElementById('childAge').value;
const childName = document.getElementById('childName').value;
const question = document.getElementById('question').value;


const message = `
    🔔 Нова заявка на сайті! 🔔\n
    👤 Ім'я: ${name}\n
    📞 Телефон: ${phone}\n
    👶 Вік дитини: ${childAge}\n
    🧒 Ім'я дитини: ${childName}\n
    ❓ Питання: ${question}
`;


axios.get(`https://api.telegram.org/bot${token}/sendMessage`, {
    params: {
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
}
    })
            .then(response => {
                alert('Повідомлення успішно надіслано!');
                document.getElementById('contactForm').reset(); 
            })
            .catch(error => {
                console.error('Помилка при надсиланні повідомлення:', error);
                alert('Сталася помилка. Спробуйте ще раз.');
            });
        });