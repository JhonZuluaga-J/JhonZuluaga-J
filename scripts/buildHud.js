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
  const health  = Math.min(500, 100 + commits * 2);
  const maxHp   = 500;
  const mana    = Math.min(400, 80 + commits);
  const maxMp   = 400;
  const stamina = Math.min(100, 70 + (level % 25));
  const defense = Math.min(99, 40 + level * 2);
  return { level, xp, health, maxHp, mana, maxMp, stamina, defense };
}

const BAR_W    = 440;
const XP_BAR_W = 580;
const bar  = (val, max) => Math.floor((Math.min(val, max) / max) * BAR_W);
const xpBar = (val) => Math.floor((Math.min(val, 100) / 100) * XP_BAR_W);

const commits = getCommits();
const { level, xp, health, maxHp, mana, maxMp, stamina, defense } = calculateStats(commits);

const hpW  = bar(health, maxHp);
const mpW  = bar(mana, maxMp);
const stW  = bar(stamina, 100);
const xpW  = xpBar(xp);

const svg = `<svg width="760" height="260" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="panelBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0d1117"/>
      <stop offset="100%" stop-color="#060a10"/>
    </linearGradient>
    <linearGradient id="hpBar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#880000"/>
      <stop offset="60%"  stop-color="#cc2222"/>
      <stop offset="100%" stop-color="#ff4444"/>
    </linearGradient>
    <linearGradient id="mpBar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#000088"/>
      <stop offset="60%"  stop-color="#1144cc"/>
      <stop offset="100%" stop-color="#3388ff"/>
    </linearGradient>
    <linearGradient id="xpBar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#886600"/>
      <stop offset="60%"  stop-color="#c8860a"/>
      <stop offset="100%" stop-color="#ffe066"/>
    </linearGradient>
    <linearGradient id="stBar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#447700"/>
      <stop offset="100%" stop-color="#88cc00"/>
    </linearGradient>
    <filter id="barGlow">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="titleGlow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <pattern id="grid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
      <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#ffffff" stroke-width="0.15" opacity="0.08"/>
    </pattern>
    <pattern id="scanlines" x="0" y="0" width="1" height="3" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="1" height="1" fill="black" opacity="0.1"/>
    </pattern>
  </defs>

  <rect width="760" height="260" fill="url(#panelBg)" rx="4"/>
  <rect width="760" height="260" fill="url(#grid)" rx="4"/>
  <rect x="0" y="0" width="760" height="260" fill="none" stroke="#c8860a" stroke-width="3" rx="4"/>
  <rect x="4" y="4" width="752" height="252" fill="none" stroke="#8B5A00" stroke-width="1" rx="2" opacity="0.5"/>

  <rect x="0"   y="0"   width="20" height="3"  fill="#c8860a"/>
  <rect x="0"   y="0"   width="3"  height="20" fill="#c8860a"/>
  <rect x="5"   y="5"   width="10" height="2"  fill="#ffe066" opacity="0.8"/>
  <rect x="5"   y="5"   width="2"  height="10" fill="#ffe066" opacity="0.8"/>
  <rect x="740" y="0"   width="20" height="3"  fill="#c8860a"/>
  <rect x="757" y="0"   width="3"  height="20" fill="#c8860a"/>
  <rect x="745" y="5"   width="10" height="2"  fill="#ffe066" opacity="0.8"/>
  <rect x="758" y="5"   width="2"  height="10" fill="#ffe066" opacity="0.8"/>
  <rect x="0"   y="257" width="20" height="3"  fill="#c8860a"/>
  <rect x="0"   y="240" width="3"  height="20" fill="#c8860a"/>
  <rect x="5"   y="253" width="10" height="2"  fill="#ffe066" opacity="0.8"/>
  <rect x="5"   y="245" width="2"  height="10" fill="#ffe066" opacity="0.8"/>
  <rect x="740" y="257" width="20" height="3"  fill="#c8860a"/>
  <rect x="757" y="240" width="3"  height="20" fill="#c8860a"/>
  <rect x="745" y="253" width="10" height="2"  fill="#ffe066" opacity="0.8"/>
  <rect x="758" y="245" width="2"  height="10" fill="#ffe066" opacity="0.8"/>

  <rect x="0" y="0" width="760" height="46" fill="#1a0a00" opacity="0.9" rx="4"/>
  <rect x="0" y="0" width="760" height="46" fill="none" stroke="#8B4513" stroke-width="2" rx="4"/>
  <rect x="8" y="8" width="744" height="30" fill="none" stroke="#D2691E" stroke-width="1" rx="2" opacity="0.5"/>
  <rect x="16" y="44" width="728" height="2" fill="#CD853F" opacity="0.8"/>
  <rect x="370" y="40" width="8" height="8" fill="#FFD700" transform="rotate(45 374 44)"/>
  <rect x="14"  y="40" width="8" height="8" fill="#FFD700" transform="rotate(45 18 44)"/>
  <rect x="734" y="40" width="8" height="8" fill="#FFD700" transform="rotate(45 738 44)"/>
  <text x="380" y="30" text-anchor="middle" font-family="'Courier New', Courier, monospace"
        font-size="18" font-weight="bold" letter-spacing="4" fill="#FFD700" filter="url(#titleGlow)" stroke="#8B4513" stroke-width="0.5">TERRARIA HUD</text>

  <text x="20" y="80" font-family="'Courier New', monospace" font-size="13" font-weight="bold" fill="#ff6b6b">HP</text>
  <text x="46" y="80" font-family="monospace" font-size="11" fill="#ff6b6b" opacity="0.9">&#9829;&#9829;&#9829;&#9829;&#9829;</text>
  <rect x="16" y="86" width="440" height="18" fill="#1a0505" rx="2" stroke="#660000" stroke-width="1"/>
  <rect x="16" y="86" width="${hpW}" height="18" fill="url(#hpBar)" rx="2" filter="url(#barGlow)"/>
  <rect x="16" y="86" width="${hpW}" height="6"  fill="#ff8888" opacity="0.2" rx="2"/>
  <rect x="104" y="86" width="1" height="18" fill="#000" opacity="0.3"/>
  <rect x="192" y="86" width="1" height="18" fill="#000" opacity="0.3"/>
  <rect x="280" y="86" width="1" height="18" fill="#000" opacity="0.3"/>
  <rect x="368" y="86" width="1" height="18" fill="#000" opacity="0.3"/>
  <text x="466" y="99" font-family="'Courier New', monospace" font-size="13" fill="#ffaaaa">${health} / ${maxHp}</text>

  <text x="20" y="128" font-family="'Courier New', monospace" font-size="13" font-weight="bold" fill="#4dabf7">MP</text>
  <text x="46" y="128" font-family="monospace" font-size="11" fill="#4dabf7" opacity="0.9">&#9670;&#9670;&#9670;&#9670;</text>
  <rect x="16" y="134" width="440" height="18" fill="#05051a" rx="2" stroke="#001166" stroke-width="1"/>
  <rect x="16" y="134" width="${mpW}" height="18" fill="url(#mpBar)" rx="2" filter="url(#barGlow)"/>
  <rect x="16" y="134" width="${mpW}" height="6"  fill="#88ccff" opacity="0.2" rx="2"/>
  <rect x="104" y="134" width="1" height="18" fill="#000" opacity="0.3"/>
  <rect x="192" y="134" width="1" height="18" fill="#000" opacity="0.3"/>
  <rect x="280" y="134" width="1" height="18" fill="#000" opacity="0.3"/>
  <text x="466" y="147" font-family="'Courier New', monospace" font-size="13" fill="#aaccff">${mana} / ${maxMp}</text>

  <text x="20" y="176" font-family="'Courier New', monospace" font-size="13" font-weight="bold" fill="#88cc00">ST</text>
  <text x="46" y="176" font-family="monospace" font-size="11" fill="#88cc00" opacity="0.9">&#9733;&#9733;&#9733;&#9733;&#9733;</text>
  <rect x="16" y="182" width="440" height="18" fill="#081205" rx="2" stroke="#224400" stroke-width="1"/>
  <rect x="16" y="182" width="${stW}" height="18" fill="url(#stBar)" rx="2" filter="url(#barGlow)"/>
  <rect x="16" y="182" width="${stW}" height="6"  fill="#aaffaa" opacity="0.2" rx="2"/>
  <rect x="104" y="182" width="1" height="18" fill="#000" opacity="0.3"/>
  <rect x="192" y="182" width="1" height="18" fill="#000" opacity="0.3"/>
  <rect x="280" y="182" width="1" height="18" fill="#000" opacity="0.3"/>
  <rect x="368" y="182" width="1" height="18" fill="#000" opacity="0.3"/>
  <text x="466" y="195" font-family="'Courier New', monospace" font-size="13" fill="#aaffaa">${stamina}%</text>

  <text x="20" y="224" font-family="'Courier New', monospace" font-size="13" font-weight="bold" fill="#c8860a">XP</text>
  <rect x="16" y="230" width="580" height="14" fill="#120d00" rx="2" stroke="#664400" stroke-width="1"/>
  <rect x="16" y="230" width="${xpW}" height="14" fill="url(#xpBar)" rx="2"/>
  <text x="602" y="242" font-family="'Courier New', monospace" font-size="11" fill="#c8860a">${xp} / 100</text>

  <rect x="570" y="52" width="1" height="176" fill="#c8860a" opacity="0.3"/>
  <text x="665" y="74" text-anchor="middle" font-family="'Courier New', monospace"
        font-size="11" font-weight="bold" fill="#c8860a" letter-spacing="2">STATS</text>
  <rect x="582" y="78" width="166" height="1" fill="#c8860a" opacity="0.3"/>

  <text x="582" y="100" font-family="'Courier New', monospace" font-size="12" fill="#58a6ff">LEVEL</text>
  <text x="682" y="100" font-family="'Courier New', monospace" font-size="14" font-weight="bold" fill="#e6edf3">${level}</text>

  <text x="582" y="124" font-family="'Courier New', monospace" font-size="12" fill="#58a6ff">COMMITS</text>
  <text x="682" y="124" font-family="'Courier New', monospace" font-size="14" font-weight="bold" fill="#e6edf3">${commits}</text>

  <text x="582" y="148" font-family="'Courier New', monospace" font-size="12" fill="#58a6ff">DEFENSE</text>
  <text x="682" y="148" font-family="'Courier New', monospace" font-size="14" font-weight="bold" fill="#e6edf3">${defense}</text>

  <text x="582" y="172" font-family="'Courier New', monospace" font-size="12" fill="#58a6ff">WORLD</text>
  <text x="666" y="172" font-family="'Courier New', monospace" font-size="11" font-weight="bold" fill="#ff4444">HARD</text>

  <text x="582" y="196" font-family="'Courier New', monospace" font-size="12" fill="#58a6ff">CLASS</text>
  <text x="644" y="196" font-family="'Courier New', monospace" font-size="10" fill="#88cc00">MAGE</text>

  <rect x="622" y="210" width="6"  height="4"  fill="#f5c8a0"/>
  <rect x="620" y="214" width="10" height="8"  fill="#3366cc"/>
  <rect x="620" y="222" width="4"  height="6"  fill="#2244aa"/>
  <rect x="626" y="222" width="4"  height="6"  fill="#2244aa"/>
  <rect x="628" y="209" width="2"  height="12" fill="#88ddaa"/>
  <rect x="614" y="216" width="8"  height="2"  fill="#888"/>
  <rect x="611" y="214" width="4"  height="4"  fill="#aaa"/>

  <rect width="760" height="260" fill="url(#scanlines)" rx="4"/>
</svg>`;

fs.mkdirSync("assets", { recursive: true });
fs.writeFileSync("assets/hud.svg", svg.trim());
console.log(`HUD updated — Level ${level}, XP ${xp}/100, Commits ${commits}, Defense ${defense}`);
