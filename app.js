const tg = window.Telegram.WebApp;
tg.expand();

const profileBtn = document.getElementById('profileBtn');
const profileInfo = document.getElementById('profile-info');

// Замените на свой домен и порт FastAPI
const API_URL = "http://0.0.0.0:3925/profile/";

profileBtn.addEventListener('click', async () => {
    const user_id = tg.initDataUnsafe.user.id;
    try {
        const response = await fetch(`${API_URL}${user_id}`);
        const data = await response.json();
        if(data.error){
            profileInfo.textContent = data.error;
        } else {
            let text = "";
            for(const key in data){
                text += `${key}: ${data[key]}\n`;
            }
            profileInfo.textContent = text;
        }
    } catch (err) {
        profileInfo.textContent = "Ошибка при получении данных";
        console.error(err);
    }
});
