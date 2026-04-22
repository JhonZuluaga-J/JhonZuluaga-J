# GitHub Profile Setup — Step by Step

## 1. Convert your banner to GIF

Your banner is currently an `.mp4` file.
Convert it to `.gif` using: https://ezgif.com/video-to-gif

Settings recommended:
- FPS: 15–20
- Quality: High
- Optimize for size if above 10MB

Save the result as `banner.gif` and place it inside the `assets/` folder
(replace the current `banner.mp4`).

---

## 2. Create your profile repository

On GitHub, create a new repository named **exactly** your GitHub username.
Example: if your username is `jdoe`, create a repo called `jdoe`.

This is a special GitHub feature — the README in this repo becomes your profile page.

---

## 3. Replace placeholders in README.md

Open `README.md` and replace every placeholder:

| Placeholder       | Replace with                        |
|-------------------|-------------------------------------|
| `YOUR_USERNAME`   | Your GitHub username (6 occurrences)|
| `YOUR_HANDLE`     | Your LinkedIn profile handle        |
| `YOUR_SITE.dev`   | Your portfolio URL                  |
| `YOUR@EMAIL.com`  | Your contact email                  |

---

## 4. Push everything to the repo

```bash
git init
git add .
git commit -m "init: profile setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.git
git push -u origin main
```

---

## 5. Enable GitHub Actions (snake animation)

1. Go to your repo → **Settings** → **Actions** → **General**
2. Under "Workflow permissions", select **Read and write permissions**
3. Save.
4. Go to **Actions** tab → find "Generate Snake Animation" → click **Run workflow**

The snake SVG will be generated and pushed to the `output` branch automatically.
After that it runs every 12 hours on its own.

---

## 6. Verify your profile

Visit: `https://github.com/YOUR_USERNAME`

You should see:
- Your animated GIF banner at the top
- Typing animation with your role
- Tech stack badges
- Stats + streak
- Snake contribution grid at the bottom

---

## File Structure

```
YOUR_USERNAME/
├── README.md                        ← your profile page
├── assets/
│   └── banner.gif                   ← your boss fight GIF (convert from .mp4)
└── .github/
    └── workflows/
        └── snake.yml                ← auto-generates the contribution snake
```
