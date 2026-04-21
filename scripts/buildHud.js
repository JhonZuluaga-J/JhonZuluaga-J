const fs = require("fs");
const { execSync } = require("child_process");

function getCommits() {
  try {
    return parseInt(execSync("git rev-list --count HEAD").toString().trim(), 10);
  } catch {
    return 0;
  }
}

function calculateStats(commits) {
  const level   = Math.floor(commits / 50) + 1;
  const xp      = commits % 100;
  const xpPct   = xp;
  const health  = Math.min(100, 80 + (level % 20));
  const mana    = Math.min(100, 60 + (level % 30));
  const stamina = Math.min(100, 70 + (level % 25));
  return { level, xp, xpPct, health, mana, stamina };
}

const BAR_W = 520;
const w = (pct) => Math.floor((Math.min(100, pct) / 100) * BAR_W);

const commits = getCommits();
const { level, xp, xpPct, health, mana, stamina } = calculateStats(commits);

const svg = `<svg width="640" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0d1117"/>
      <stop offset="100%" stop-color="#0a0f1e"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <rect width="640" height="200" fill="url(#bg)" rx="4"/>
  <rect width="640" height="200" fill="none" stroke="#c8860a" stroke-width="2" rx="4"/>

  <rect x="0"   y="0"   width="12" height="3"  fill="#c8860a"/>
  <rect x="0"   y="0"   width="3"  height="12" fill="#c8860a"/>
  <rect x="628" y="0"   width="12" height="3"  fill="#c8860a"/>
  <rect x="637" y="0"   width="3"  height="12" fill="#c8860a"/>
  <rect x="0"   y="197" width="12" height="3"  fill="#c8860a"/>
  <rect x="0"   y="188" width="3"  height="12" fill="#c8860a"/>
  <rect x="628" y="197" width="12" height="3"  fill="#c8860a"/>
  <rect x="637" y="188" width="3"  height="12" fill="#c8860a"/>

  <text x="320" y="28" text-anchor="middle" font-family="'Courier New', monospace"
        font-size="14" font-weight="bold" fill="#c8860a" letter-spacing="3">PLAYER STATUS</text>
  <rect x="20" y="34" width="600" height="1" fill="#c8860a" opacity="0.4"/>

  <text x="24" y="62" font-family="'Courier New', monospace" font-size="12" fill="#ff6b6b">HP</text>
  <rect x="58" y="50" width="520" height="16" fill="#1a0808" rx="2"/>
  <rect x="58" y="50" width="${w(health)}" height="16" fill="#cc2222" rx="2" filter="url(#glow)"/>
  <rect x="58" y="50" width="${w(health)}" height="6"  fill="#ff6b6b" opacity="0.3" rx="2"/>
  <text x="586" y="62" font-family="'Courier New', monospace" font-size="11" fill="#ff9999">${health}%</text>

  <text x="24" y="96" font-family="'Courier New', monospace" font-size="12" fill="#4dabf7">MP</text>
  <rect x="58" y="84" width="520" height="16" fill="#08081a" rx="2"/>
  <rect x="58" y="84" width="${w(mana)}" height="16" fill="#1a44cc" rx="2" filter="url(#glow)"/>
  <rect x="58" y="84" width="${w(mana)}" height="6"  fill="#4dabf7" opacity="0.3" rx="2"/>
  <text x="586" y="96" font-family="'Courier New', monospace" font-size="11" fill="#88ccff">${mana}%</text>

  <text x="24" y="130" font-family="'Courier New', monospace" font-size="12" fill="#ffd43b">STA</text>
  <rect x="58" y="118" width="520" height="16" fill="#1a1500" rx="2"/>
  <rect x="58" y="118" width="${w(stamina)}" height="16" fill="#aa8800" rx="2" filter="url(#glow)"/>
  <rect x="58" y="118" width="${w(stamina)}" height="6"  fill="#ffd43b" opacity="0.3" rx="2"/>
  <text x="586" y="130" font-family="'Courier New', monospace" font-size="11" fill="#ffdd77">${stamina}%</text>

  <rect x="20" y="146" width="600" height="1" fill="#c8860a" opacity="0.4"/>

  <text x="24"  y="168" font-family="'Courier New', monospace" font-size="12" fill="#58a6ff">LEVEL</text>
  <text x="80"  y="168" font-family="'Courier New', monospace" font-size="12" fill="#e6edf3">${level}</text>
  <text x="130" y="168" font-family="'Courier New', monospace" font-size="12" fill="#58a6ff">XP</text>
  <text x="158" y="168" font-family="'Courier New', monospace" font-size="12" fill="#e6edf3">${xp} / 100</text>
  <text x="260" y="168" font-family="'Courier New', monospace" font-size="12" fill="#58a6ff">COMMITS</text>
  <text x="340" y="168" font-family="'Courier New', monospace" font-size="12" fill="#e6edf3">${commits}</text>

  <rect x="20" y="178" width="600" height="10" fill="#111" rx="2"/>
  <rect x="20" y="178" width="${Math.floor((xpPct / 100) * 600)}" height="10" fill="#c8860a" rx="2"/>
  <text x="320" y="188" text-anchor="middle" font-family="'Courier New', monospace"
        font-size="9" fill="#666">XP PROGRESS</text>
</svg>`;

fs.mkdirSync("assets", { recursive: true });
fs.writeFileSync("assets/hud.svg", svg.trim());
console.log(`HUD updated — Level ${level}, XP ${xp}/100, Commits ${commits}`);
