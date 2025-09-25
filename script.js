// Tombol dark mode
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Mode Terang"
    : "🌙 Mode Gelap";
});

// Avatar animasi sederhana
const canvas = document.getElementById("avatarCanvas");
const ctx = canvas.getContext("2d");

function drawAvatar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Kepala
  ctx.beginPath();
  ctx.arc(100, 100, 60, 0, Math.PI * 2);
  ctx.fillStyle = "#ffcc80";
  ctx.fill();
  ctx.stroke();

  // Mata
  ctx.beginPath();
  ctx.arc(80, 90, 8, 0, Math.PI * 2);
  ctx.arc(120, 90, 8, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();

  // Mulut
  ctx.beginPath();
  ctx.arc(100, 110, 30, 0, Math.PI);
  ctx.stroke();
}

drawAvatar();