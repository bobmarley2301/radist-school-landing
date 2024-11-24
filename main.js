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

// Текстовий слайдер (відгуки)
const textSlider = document.getElementById('textSlider');
const prevTextButton = document.getElementById('prevText');
const nextTextButton = document.getElementById('nextText');
let currentTextIndex = 0;
const textSlides = textSlider.children;

function updateTextSlider() {
  textSlider.style.transform = `translateX(-${currentTextIndex * 100}%)`;
}

prevTextButton.addEventListener('click', () => {
  currentTextIndex = (currentTextIndex > 0) ? currentTextIndex - 1 : textSlides.length - 1;
  updateTextSlider();
});

nextTextButton.addEventListener('click', () => {
  currentTextIndex = (currentTextIndex < textSlides.length - 1) ? currentTextIndex + 1 : 0;
  updateTextSlider();
});


// Слайдер зображень
const imageSlider = document.getElementById('imageSlider');
const prevImageButton = document.getElementById('prevImage');
const nextImageButton = document.getElementById('nextImage');
let currentImageIndex = 0;
const imageSlides = imageSlider.children;

function updateImageSlider() {
  imageSlider.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

prevImageButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : imageSlides.length - 1;
  updateImageSlider();
});

nextImageButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex < imageSlides.length - 1) ? currentImageIndex + 1 : 0;
  updateImageSlider();
});
