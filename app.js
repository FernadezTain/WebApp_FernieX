const tg = window.Telegram.WebApp;
tg.expand();

const profileBtn = document.getElementById('profileBtn');
const profileInfo = document.getElementById('profile-info');

profileBtn.addEventListener('click', () => {
    // Отправляем запрос боту
    tg.sendData("request_profile");
});

// Обработка данных от бота (через WebApp)
window.addEventListener('message', (event) => {
    if(event.data.type === 'profile_data') {
        profileInfo.textContent = event.data.text;
    }
});
