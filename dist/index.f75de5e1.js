// Função para contagem regressiva
const countDownDate = new Date("Nov 21, 2024 00:00:00").getTime();
const countdownElement = document.getElementById("countdown");
const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / 86400000);
    const hours = Math.floor(distance % 86400000 / 3600000);
    const minutes = Math.floor(distance % 3600000 / 60000);
    const seconds = Math.floor(distance % 60000 / 1000);
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "\xc9 hoje, Lucas! Feliz Anivers\xe1rio!";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
