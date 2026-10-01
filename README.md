# 🇵🇭 Habol-Habulan: Street Chase Ultimate Arcade Edition

A 2D retro-style arcade web game inspired by traditional Filipino street tag games (**Habol-Habulan**, **Langit-Lupa**, **Ice-Tubig**, and **Tsinelas Wars**). Built with pure HTML5 Canvas and JavaScript, featuring procedural chiptune audio synthesized in real-time via the Web Audio API.

---

## 🔒 Confidentiality & Ownership Notice

> **PROPRIETARY & CONFIDENTIAL**  
> **Copyright © 2026. All Rights Reserved.**  
> 
> The source code, assets, mechanics, and design documentation contained in this repository are private property. Unauthorized copying, distribution, modification, or public display of any part of this repository via any medium is strictly prohibited.

---

## 🎮 Game Modes

1. **Classic Habol (Survival Tag):** Evade the *Taya* (tagger) while utilizing safe zones (*Buhay* bases).
2. **Langit-Lupa:** Seek elevated ground (*Langit*) to avoid being tagged. Watch your platform stamina meter!
3. **Ice-Tubig (Freeze Tag):** Tagged runners are frozen in place. Unfreeze allies by tagging them and shouting *"Tubig!"* before everyone gets caught.
4. **Tsinelas Wars:** Action mode featuring slipper-throwing mechanics and combat shields.

---

## ✨ Features

* **4 Playable Characters:** Unique stats and special abilities (Juan, Nene, Toto, Inday).
* **Dynamic Environment:** Real-time Day/Night cycles, ambient street lighting, dynamic sunset colors, and animated rain weather effects.
* **Barangay Aesthetics:** Procedurally rendered street props including Sari-Sari stores, parked Jeepneys, Tricycles, and overhead utility wires.
* **Zero-Dependency Audio:** Custom chiptune soundtrack and arcade sound FX generated via the Web Audio API.
* **Arcade UI & Progression:** High score tracking (`localStorage`), floating combat/tag text, skill cooldown meters, and touch/D-pad controls for mobile testing.

---

## 🛠️ Project Structure
habol-habulan-game/
├── index.html       # Single-file bundled game (Canvas, CSS, and JS engine)
└── README.md        # Project documentation and legal notice

---

## 🚀 How to Run Locally

### Option A: VS Code Live Server
1. Open the project folder in **VS Code**.
2. Install the **Live Server** extension (`ms-vscode.live-server`).
3. Right-click `index.html` and select **Open with Live Server**.

### Option B: Standalone Browser
Double-click `index.html` to open directly in any modern web browser (Chrome, Firefox, Edge, Safari).

---

## 🕹️ Controls

| Action | Keyboard | Touch / Mobile |
| :--- | :--- | :--- |
| **Movement** | `WASD` or `Arrow Keys` | Virtual On-Screen D-Pad |
| **Special Ability** | `Spacebar` | On-Screen Ability Button |
| **Throw Slipper** | `F` | On-Screen Action Button |
| **Pause Game** | `P` or `Esc` | Pause Icon |
| **Restart** | `R` | Game Over Screen |
