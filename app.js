const tg = window.Telegram.WebApp;
tg.expand();

const profileBtn = document.getElementById('profileBtn');
const profileInfo = document.getElementById('profile-info');

profileBtn.addEventListener('click', () => {
    // Отправляем событие боту
    tg.sendData(JSON.stringify({ action: "request_profile" }));
});
