# ⚡ LazyTopper — VEDA IIT MCQ Power Book

An interactive practice quiz for the **VEDA IIT VLSI Preliminary Entrance
Test** — 212 MCQs pulled straight from the official power book, playable
topic by topic with instant feedback, scoring, and review.

No backend, no build step, no dependencies. Open it and go.

---

## 😴 The problem

The original MCQ Power Book is great content, badly suited to the night
before an exam:

- Solve a question, then **flip pages back and forth** to the answer vault
  just to check one answer — for 212 questions, that's over and over again.
- A printed book isn't something you can **carry everywhere** for a quick
  last-minute revision on the bus, in bed, between classes.
- No sense of how you're actually doing until you've manually tallied a
  paper scoresheet at the end of each section.
- Honestly? Flipping pages when you're tired and short on time just gets
  **boring**, and boredom kills last-minute prep.

## ⚡ The solution — LazyTopper

LazyTopper turns the same 212 questions into a phone-in-hand quiz that does
the boring part for you:

- **Tap an answer, know instantly** — no flipping, no searching for the
  right page. Wrong glows pink, right glows blue, right there on the
  question.
- **Lives in your browser** — no book to carry, works on your phone for a
  5-minute revision anywhere.
- **Scores itself** — an animated score at the end of every topic, with a
  motivational line to match ("Topper mindset!" at 90%+, "Re-attempt in 2
  days — it will stick" when it's rough), so even a lazy last-minute run
  feels like progress instead of a chore.
- **Remembers your best score** per topic, so you can see yourself
  improving run over run without writing anything down.

In short: same content, zero flipping, built for the lazy last-minute
topper in you.

---

## ✨ Features

- **5 topic quizzes** — Digital Electronics, Basic Electronics, C
  Programming, Microprocessors, and Aptitude — each running through every
  question in every section, Basic → Intermediate → Advanced.
- **Instant answer feedback** — pick an option and it locks in immediately:
  wrong picks glow **pink**, the correct answer glows **blue**, so you
  learn it either way.
- **Back / Next navigation** to revisit questions mid-attempt.
- **Animated score screen** — a circular gauge with your %, plus a
  per-section score breakdown.
- **Review mode** — step back through every question with your answer and
  the correct one both shown.
- **Progress saved locally** — best score per topic is remembered in your
  browser (`localStorage`); nothing leaves your device.
- **Keyboard shortcuts** — `1`–`4` to answer, `←` / `→` to navigate,
  `Enter` to advance.

## 🗂 Project structure

```
veda-quiz/
├── index.html        # the three screens: topic picker, quiz, score/review
├── css/
│   └── style.css      # styling, layout, animations
├── js/
│   ├── data.js          # the question bank (all 212 MCQs)
│   └── app.js             # quiz logic: navigation, scoring, review, storage
└── README.md
```

## 🖥 Running it locally

**Option A — VS Code + Live Server (auto-refresh)**
1. Open this folder in VS Code.
2. Install the **Live Server** extension (Ritwick Dey).
3. Right-click `index.html` → **Open with Live Server**.

**Option B — just open the file**
Double-click `index.html` — it works directly in the browser, no server
required.

## 🌐 Deploying with GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/veda-quiz.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Branch: `main` / root → Save**.
Your site goes live at `https://YOUR-USERNAME.github.io/veda-quiz/`.

## ✏️ Editing or adding questions

Every question lives in `js/data.js` as a plain object:

```js
{ "q": "Convert (2F)16 to decimal.", "options": ["45","43","47","32"], "correct": 2 }
```

`correct` is the **zero-based index** into `options` — `2` means the third
option is right. Add, edit, or remove questions or whole sections directly
in this file; the app picks up the changes automatically.

## 🛠 Built with

Plain HTML, CSS, and JavaScript — no frameworks, no npm install.

## 📄 License

Unofficial practice material, for personal exam preparation.
