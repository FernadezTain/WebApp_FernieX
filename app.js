const tg = window.Telegram.WebApp;
tg.expand();

const profileBtn = document.getElementById('profileBtn');
const profileInfo = document.getElementById('profile-info');

// URL FastAPI на PythonAnywhere
const API_URL = "https://EldenCraft.pythonanywhere.com/profile/";

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
