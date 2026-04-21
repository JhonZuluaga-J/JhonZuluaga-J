const fs = require("fs");
const { execSync } = require("child_process");

function getCommits() {
  try {
    const count = execSync("git rev-list --count HEAD").toString().trim();
    return parseInt(count, 10);
  } catch {
    return 0;
  }
}

function calculateStats(commits) {
  const level = Math.floor(commits / 50) + 1;
  const xp = commits % 100;
  const health = Math.min(100, 80 + (level % 20));
  const mana = Math.min(100, 60 + (level % 30));
  const stamina = Math.min(100, 70 + (level % 25));
  return { level, xp, health, mana, stamina };
}

function toBarWidth(percent) {
  return Math.floor((Math.min(100, percent) / 100) * 280);
}

const commits = getCommits();
const { level, xp, health, mana, stamina } = calculateStats(commits);

const svg = `<svg width="420" height="150" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text  { fill: #c9d1d9; font-size: 12px; font-family: monospace; }
    .label { fill: #58a6ff; font-size: 13px; font-family: monospace; font-weight: bold; }
  </style>

  <rect width="420" height="150" fill="#0d1117"/>

  <text x="0" y="15" class="label">Developer HUD</text>

  <rect x="0" y="25" width="280" height="10" fill="#30363d" rx="2"/>
  <rect x="0" y="25" width="${toBarWidth(health)}" height="10" fill="#ff6b6b" rx="2"/>
  <text x="290" y="34" class="text">HP ${health}%</text>

  <rect x="0" y="50" width="280" height="10" fill="#30363d" rx="2"/>
  <rect x="0" y="50" width="${toBarWidth(mana)}" height="10" fill="#4dabf7" rx="2"/>
  <text x="290" y="59" class="text">MP ${mana}%</text>

  <rect x="0" y="75" width="280" height="10" fill="#30363d" rx="2"/>
  <rect x="0" y="75" width="${toBarWidth(stamina)}" height="10" fill="#ffd43b" rx="2"/>
  <text x="290" y="84" class="text">STA ${stamina}%</text>

  <text x="0" y="120" class="text">Level ${level}  •  XP ${xp}/100  •  Commits ${commits}</text>
</svg>`;

fs.mkdirSync("assets", { recursive: true });
fs.writeFileSync("assets/hud.svg", svg.trim());

console.log(`HUD updated — Level ${level}, XP ${xp}/100, Commits ${commits}`);
