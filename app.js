const tg = window.Telegram.WebApp;
tg.expand();

const profileBtn = document.getElementById('profileBtn');
const profileInfo = document.getElementById('profile-info');

profileBtn.addEventListener('click', () => {
    // Отправляем событие боту, чтобы он прислал профиль
    tg.sendData(JSON.stringify({ action: "request_profile" }));
});

// Обработка ответа бота через WebAppQuery
// (бот должен использовать answer_web_app_query для ответа)
window.addEventListener("message", (event) => {
    // Проверяем, что сообщение пришло от Telegram
    if (!event.data || !event.data.type) return;

    if (event.data.type === "profile_response") {
        const data = event.data.payload;
        if (data.error) {
            profileInfo.textContent = data.error;
        } else {
            let text = "";
            for (const key in data) {
                text += `${key}: ${data[key]}\n`;
            }
            profileInfo.textContent = text;
        }
    }
});
