 // Função para contagem regressiva
 const countDownDate = new Date("Nov 21, 2024 00:00:00").getTime();
 const countdownElement = document.getElementById("countdown");

 const interval = setInterval(function() {
   const now = new Date().getTime();
   const distance = countDownDate - now;

   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

   if (distance < 0) {
     clearInterval(interval);
     countdownElement.innerHTML = "É hoje, Lucas! Feliz Aniversário!";
   }
 }, 1000);