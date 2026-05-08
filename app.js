const USER = "admin";
const PASS = "1234";

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === USER && p === PASS) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("dashboard").style.display = "flex";
  } else {
    document.getElementById("status").innerText = "Invalid credentials";
  }
}

function logout() {
  location.reload();
}

function showPanel(id) {
  document.querySelectorAll(".panel").forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}