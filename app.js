const days = document.querySelectorAll("days");
const hours = document.querySelectorAll("hours");
const minutes = document.querySelectorAll("minutes");
const seconds = document.querySelectorAll("seconds");

const currentYear = new Date().getFullYear();
const countDate = new Date(`December 25 2021 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const distance = countDate - currentTime;

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = d;
  document.getElementById("hours").innerHTML = h < 10 ? "0" + h : h;
  document.getElementById("minutes").innerHTML = m < 10 ? "0" + m : m;
  document.getElementById("seconds").innerHTML = s < 10 ? "0" + s : s;
}

const x = setInterval(updateCountdown, 1000);
