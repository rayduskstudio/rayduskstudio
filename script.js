// Firefly-like particles animation
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// create particles
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    glow: Math.random() * 0.5 + 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
    gradient.addColorStop(0, `rgba(255, 215, 100, ${p.glow})`);
    gradient.addColorStop(1, "rgba(255, 180, 50, 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
    ctx.fill();
  }
  requestAnimationFrame(animate);
}

animate();
