profileBtn.addEventListener('click', async () => {
    const user_id = tg.initDataUnsafe.user.id;
    try {
        const response = await fetch(`https://твой-домен:8000/profile/${user_id}`);
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
