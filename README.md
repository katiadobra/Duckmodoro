# 🦆 Duckmodoro

> Duckmodoro is a cozy Pomodoro timer.  
> A scientifically unproven but emotionally effective productivity booster powered by tiny ducks.  
> _Or just watch ducks do yoga, work, and sip coffee._ 🍵🧘‍♀️💼

![Build](https://img.shields.io/github/actions/workflow/status/katiadobra/duckmodoro/deploy.yml?branch=main)
![License](https://img.shields.io/github/license/katiadobra/duckmodoro)
![Made with Vue](https://img.shields.io/badge/Made%20with-Vue%203-42b883?logo=vue.js)

## 📸 Preview

![screenshot](./public/preview.png)

## ✨ Live Demo

[https://katiadobra.github.io/Duckmodoro/](https://katiadobra.github.io/Duckmodoro/)

---

## 🚀 Features

- ⏱ Classic Pomodoro cycle:
  - 25 min focus
  - 5 min short break
  - 15 min long break
- 🦆 A duck that changes posture depending on the current phase:
  - working, sipping coffee, relaxing
- 📋 Visual phase tracker with current phase indicator
- 🎵 Ambient sounds: birds chirping or garden wind
- 🌄 Illustrated cozy background scene
- 🔈 Mute/unmute sound with a single click

---

## 🛠 Tech Stack

- [Vue 3](https://vuejs.org/)
- Composition API
- [Quasar Framework](https://quasar.dev/)
- [Pinia](https://pinia.vuejs.org/) — for global state
- Duck energy

---

## 📁 Project Structure

```plaintext

src/
├── assets/ # images, ducks, background, sounds
├── components/ # DuckTimer, DuckView, PhaseTracker, SoundToggle
├── layouts/ # MainLayout.vue
├── pages/ # IndexPage.vue
├── stores/ # timer.js
└── App.vue
```

---

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
quasar dev
```

## Ideas for Future Features

- 🧠 Duck leveling system (progress tracking)
- 🎧 Sound picker (teapot, rain, pond)
- 📈 Focus stats per day/week
- 🐣 Tamagotchi-style duck mode

## 🤍 Author

Built with focus, caffeine, and a deep love for ducks.

## 📄 License

MIT — free to use and modify. Please keep the duck happy.
