const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.angle = Math.random() * Math.PI * 2;
    this.radius = Math.random() * 300 + 100;
    this.speed = Math.random() * 0.002;
    this.size = Math.random() * 2;
  }

  update() {
    this.angle += this.speed;

    this.x = canvas.width / 2 + Math.cos(this.angle) * this.radius;
    this.y = canvas.height / 2 + Math.sin(this.angle) * this.radius;
  }

  draw() {
    ctx.fillStyle = "rgba(99,102,241,0.8)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < 200; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.fillStyle = "rgba(2,6,23,0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let p of particles) {
    p.update();
    p.draw();
  }

  requestAnimationFrame(animate);
}

init();
animate();

/* LOGIN */
function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === "admin" && p === "1234") {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "flex";
  } else {
    document.getElementById("msg").innerText = "Access Denied";
  }
}

/* NAV */
function switchTab(id) {
  document.querySelectorAll(".panel").forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function logout() {
  location.reload();
}
