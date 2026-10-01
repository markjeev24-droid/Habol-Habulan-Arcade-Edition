const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const statusDiv = document.getElementById("status");

// Game State Variables
let isTagged = false;
let score = 0;
let survivalTimer = 0;

// Keyboard State
const keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// Player Object
const player = {
  x: 100,
  y: 250,
  radius: 15,
  speed: 4,
  color: "#00d2d3"
};

// Taya (AI Chaser) Object
const taya = {
  x: 700,
  y: 250,
  radius: 18,
  speed: 2.8,
  color: "#ff6b6b"
};

// Safe Zone ("Buhay" Base)
const safeZone = {
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  color: "rgba(46, 204, 113, 0.3)"
};

// Check if player is inside the Safe Zone
function isPlayerInSafeZone() {
  return (
    player.x > safeZone.x &&
    player.x < safeZone.x + safeZone.width &&
    player.y > safeZone.y &&
    player.y < safeZone.y + safeZone.height
  );
}

// Move Player based on Arrow / WASD keys
function updatePlayer() {
  if (isTagged) return;

  if ((keys["ArrowUp"] || keys["w"] || keys["W"]) && player.y - player.radius > 0) {
    player.y -= player.speed;
  }
  if ((keys["ArrowDown"] || keys["s"] || keys["S"]) && player.y + player.radius < canvas.height) {
    player.y += player.speed;
  }
  if ((keys["ArrowLeft"] || keys["a"] || keys["A"]) && player.x - player.radius > 0) {
    player.x -= player.speed;
  }
  if ((keys["ArrowRight"] || keys["d"] || keys["D"]) && player.x + player.radius < canvas.width) {
    player.x += player.speed;
  }
}

// Move Taya towards the player (unless player is safe)
function updateTaya() {
  if (isTagged) return;

  const inSafeZone = isPlayerInSafeZone();

  if (!inSafeZone) {
    // Calculate vector towards player
    const dx = player.x - taya.x;
    const dy = player.y - taya.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 0) {
      taya.x += (dx / distance) * taya.speed;
      taya.y += (dy / distance) * taya.speed;
    }

    // Check Collision (Tag)
    if (distance < player.radius + taya.radius) {
      isTagged = true;
      statusDiv.innerHTML = `💥 <strong>IKAW ANG TAYA!</strong> You were caught! Final Score: ${Math.floor(survivalTimer)}s. Press R to restart.`;
      statusDiv.style.color = "#ff6b6b";
    }
  }
}

// Draw Safe Zone
function drawSafeZone() {
  ctx.fillStyle = safeZone.color;
  ctx.fillRect(safeZone.x, safeZone.y, safeZone.width, safeZone.height);
  ctx.strokeStyle = "#2ecc71";
  ctx.lineWidth = 2;
  ctx.strokeRect(safeZone.x, safeZone.y, safeZone.width, safeZone.height);

  ctx.fillStyle = "#2ecc71";
  ctx.font = "14px sans-serif";
  ctx.fillText("BUHAY (Safe)", safeZone.x + 10, safeZone.y + 25);
}

// Render Loop
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSafeZone();

  // Draw Player
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
  ctx.fillStyle = player.color;
  ctx.fill();
  ctx.closePath();

  // Draw Taya
  ctx.beginPath();
  ctx.arc(taya.x, taya.y, taya.radius, 0, Math.PI * 2);
  ctx.fillStyle = taya.color;
  ctx.fill();
  ctx.closePath();
}

// Main Game Loop
function gameLoop() {
  updatePlayer();
  updateTaya();
  render();

  if (!isTagged) {
    survivalTimer += 1 / 60;
    if (!isPlayerInSafeZone()) {
      statusDiv.innerHTML = `Status: Running! Time Survived: ${Math.floor(survivalTimer)}s`;
      statusDiv.style.color = "#ffffff";
    } else {
      statusDiv.innerHTML = `Status: 🛡️ Safe in the "Buhay" base!`;
      statusDiv.style.color = "#2ecc71";
    }
    requestAnimationFrame(gameLoop);
  }
}

// Restart Game on 'R'
window.addEventListener("keydown", (e) => {
  if ((e.key === "r" || e.key === "R") && isTagged) {
    isTagged = false;
    survivalTimer = 0;
    player.x = 100;
    player.y = 250;
    taya.x = 700;
    taya.y = 250;
    gameLoop();
  }
});

// Start Game
gameLoop();