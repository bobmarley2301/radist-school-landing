document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const token = '7956466370:AAGVoHPJjWMx6XVfc8owmwambzBHz-m-EbE'; 
    const chatId = '5228123933'; // Замість YOUR_CHAT_ID вставте ваш chat_id

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const childAge = document.getElementById('childAge').value;
    const childName = document.getElementById('childName').value;
    const question = document.getElementById('question').value;

    const message = `
📝 Нова заявка:
👤 Ім'я: ${name}
📞 Телефон: ${phone}
👶 Вік дитини: ${childAge}
👧 Ім'я дитини: ${childName}
❓ Питання: ${question}
    `;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: message }),
        });

        if (response.ok) {
            alert('Повідомлення успішно надіслано!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Помилка при відправці повідомлення.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Сталася помилка.');
    }
});