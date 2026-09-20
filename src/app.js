/* =========================================================
   ISMAIL PORTFOLIO — src/app.js
   100 FEATURE INTERACTIVE JAVASCRIPT
========================================================= */

"use strict";

/* =========================================================
   GLOBAL HELPERS
========================================================= */

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) =>
  Array.from(parent.querySelectorAll(selector));

const byId = (id) => document.getElementById(id);

function showToast(message, duration = 2500) {
  const toast =
    byId("toast") ||
    $(".toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toast._timer);

  toast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

function safeNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

/* =========================================================
   1. 3D NEON LOGO
========================================================= */

const logo = $(".logo");

if (logo) {
  logo.addEventListener("mousemove", (e) => {
    const rect = logo.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    logo.style.transform =
      `perspective(500px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;
  });

  logo.addEventListener("mouseleave", () => {
    logo.style.transform = "";
  });
}

/* =========================================================
   2–20. BACKGROUND EFFECTS
========================================================= */

const body = document.body;

function createParticle(className, lifetime = 5000) {
  const particle = document.createElement("span");

  particle.className = className;

  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;

  particle.style.animationDuration =
    `${Math.max(1500, lifetime + Math.random() * lifetime)}ms`;

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, lifetime * 2);
}

/* Shooting Stars */

function createShootingStar() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  createParticle("shooting-star", 2500);
}

setInterval(createShootingStar, 3500);

/* Rain */

function createRainDrop() {
  const container = byId("rainEffect");

  if (!container) return;

  const drop = document.createElement("span");

  drop.className = "rain-drop";
  drop.style.left = `${Math.random() * 100}%`;
  drop.style.animationDuration = `${0.5 + Math.random()}s`;

  container.appendChild(drop);

  setTimeout(() => drop.remove(), 2000);
}

setInterval(createRainDrop, 100);

/* Snow */

function createSnowflake() {
  const container = byId("snowEffect");

  if (!container) return;

  const snow = document.createElement("span");

  snow.className = "snowflake";
  snow.textContent = "❄";
  snow.style.left = `${Math.random() * 100}%`;
  snow.style.animationDuration = `${4 + Math.random() * 6}s`;

  container.appendChild(snow);

  setTimeout(() => snow.remove(), 10000);
}

setInterval(createSnowflake, 500);

/* Fire */

function createFireParticle() {
  const container = byId("fireEffect");

  if (!container) return;

  const fire = document.createElement("span");

  fire.className = "fire-particle";

  fire.style.left = `${Math.random() * 100}%`;
  fire.style.bottom = "0";
  fire.style.animationDuration = `${1 + Math.random() * 2}s`;

  container.appendChild(fire);

  setTimeout(() => fire.remove(), 3500);
}

setInterval(createFireParticle, 180);

/* Lightning */

function lightningFlash() {
  const lightning = byId("lightningEffect");

  if (!lightning) return;

  lightning.classList.add("active");

  setTimeout(() => {
    lightning.classList.remove("active");
  }, 180);
}

setInterval(() => {
  if (Math.random() > 0.7) lightningFlash();
}, 6000);

/* Ocean Waves */

const ocean = byId("oceanEffect");

if (ocean) {
  ocean.addEventListener("click", () => {
    ocean.classList.toggle("wave-active");
  });
}

/* Galaxy */

const galaxy = byId("galaxyEffect");

if (galaxy) {
  for (let i = 0; i < 80; i++) {
    const star = document.createElement("span");

    star.className = "galaxy-star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;

    galaxy.appendChild(star);
  }
}

/* Clouds */

const cloudContainer = byId("cloudEffect");

if (cloudContainer) {
  for (let i = 0; i < 8; i++) {
    const cloud = document.createElement("span");

    cloud.className = "cloud";
    cloud.style.top = `${Math.random() * 80}%`;
    cloud.style.animationDelay = `${Math.random() * 10}s`;

    cloudContainer.appendChild(cloud);
  }
}

/* Day / Night */

function updateSky() {
  const sky = byId("dayNightEffect");

  if (!sky) return;

  const hour = new Date().getHours();

  if (hour >= 6 && hour < 18) {
    sky.classList.add("day");
    sky.classList.remove("night");
  } else {
    sky.classList.add("night");
    sky.classList.remove("day");
  }
}

updateSky();
setInterval(updateSky, 60000);

/* Aurora */

const aurora = byId("auroraEffect");

if (aurora) {
  aurora.classList.add("active");
}

/* Bubbles */

function createBubble() {
  const container = byId("bubbleEffect");

  if (!container) return;

  const bubble = document.createElement("span");

  bubble.className = "bubble";
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${4 + Math.random() * 5}s`;

  container.appendChild(bubble);

  setTimeout(() => bubble.remove(), 10000);
}

setInterval(createBubble, 700);

/* Falling Petals */

function createPetal() {
  const container = byId("petalEffect");

  if (!container) return;

  const petal = document.createElement("span");

  petal.className = "falling-petal";
  petal.textContent = "🌸";
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${4 + Math.random() * 5}s`;

  container.appendChild(petal);

  setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 900);

/* Falling Leaves */

function createLeaf() {
  const container = byId("leafEffect");

  if (!container) return;

  const leaf = document.createElement("span");

  leaf.className = "falling-leaf";
  leaf.textContent = "🍂";
  leaf.style.left = `${Math.random() * 100}%`;
  leaf.style.animationDuration = `${4 + Math.random() * 5}s`;

  container.appendChild(leaf);

  setTimeout(() => leaf.remove(), 10000);
}

setInterval(createLeaf, 1000);

/* Fireworks */

function createFirework(x, y) {
  const container = byId("fireworksEffect") || document.body;

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("span");

    particle.className = "firework-particle";

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    const angle = (Math.PI * 2 * i) / 20;
    const distance = 50 + Math.random() * 100;

    particle.style.setProperty(
      "--x",
      `${Math.cos(angle) * distance}px`
    );

    particle.style.setProperty(
      "--y",
      `${Math.sin(angle) * distance}px`
    );

    container.appendChild(particle);

    setTimeout(() => particle.remove(), 1200);
  }
}

/* Interactive Spider Web */

const spiderWeb = byId("spiderWeb");

if (spiderWeb) {
  spiderWeb.addEventListener("mousemove", (e) => {
    spiderWeb.style.setProperty("--mouse-x", `${e.clientX}px`);
    spiderWeb.style.setProperty("--mouse-y", `${e.clientY}px`);
  });
}

/* Click Explosion */

document.addEventListener("click", (e) => {
  const explosion = document.createElement("span");

  explosion.className = "click-explosion";

  explosion.style.left = `${e.clientX}px`;
  explosion.style.top = `${e.clientY}px`;

  document.body.appendChild(explosion);

  setTimeout(() => explosion.remove(), 700);

  /* Firework on special areas */
  if (
    e.target.closest(".firework-button") ||
    e.target.closest("#fireworksButton")
  ) {
    createFirework(e.clientX, e.clientY);
  }
});

/* =========================================================
   21. DIGITAL ID CARD
========================================================= */

const idCard = $(".digital-id-card");

if (idCard) {
  idCard.addEventListener("click", () => {
    idCard.classList.toggle("flipped");
  });
}

/* =========================================================
   22. BIRTHDAY COUNTDOWN
========================================================= */

function getNextBirthday() {
  const now = new Date();

  let birthday = new Date(
    now.getFullYear(),
    3,
    17,
    0,
    0,
    0
  );

  if (birthday <= now) {
    birthday = new Date(
      now.getFullYear() + 1,
      3,
      17,
      0,
      0,
      0
    );
  }

  return birthday;
}

function updateBirthdayCountdown() {
  const target = getNextBirthday();
  const now = new Date();

  const difference = target - now;

  const days = Math.max(
    0,
    Math.floor(difference / 86400000)
  );

  const hours = Math.max(
    0,
    Math.floor((difference / 3600000) % 24)
  );

  const minutes = Math.max(
    0,
    Math.floor((difference / 60000) % 60)
  );

  const seconds = Math.max(
    0,
    Math.floor((difference / 1000) % 60)
  );

  const day = byId("birthdayDays");
  const hour = byId("birthdayHours");
  const minute = byId("birthdayMinutes");
  const second = byId("birthdaySeconds");

  if (day) day.textContent = days;
  if (hour) hour.textContent = hours;
  if (minute) minute.textContent = minutes;
  if (second) second.textContent = seconds;
}

updateBirthdayCountdown();
setInterval(updateBirthdayCountdown, 1000);

/* =========================================================
   23. AGE COUNTER
========================================================= */

function updateAge() {
  const ageElement = byId("ageCounter");

  if (!ageElement) return;

  const birthday = new Date(2007, 3, 17);
  const now = new Date();

  let age = now.getFullYear() - birthday.getFullYear();

  const birthdayPassed =
    now.getMonth() > birthday.getMonth() ||
    (
      now.getMonth() === birthday.getMonth() &&
      now.getDate() >= birthday.getDate()
    );

  if (!birthdayPassed) age--;

  ageElement.textContent = age;
}

updateAge();

/* =========================================================
   24–34. PERSONAL INFORMATION
========================================================= */

const counters = $$(".counter");

const counterObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const element = entry.target;
            const target = safeNumber(element.dataset.target);

            let current = 0;
            const duration = 1200;
            const start = performance.now();

            function animate(time) {
              const progress = Math.min(
                (time - start) / duration,
                1
              );

              current = Math.floor(target * progress);

              element.textContent = current;

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                element.textContent = target;
              }
            }

            requestAnimationFrame(animate);

            observer.unobserve(element);
          });
        },
        { threshold: 0.2 }
      )
    : null;

if (counterObserver) {
  counters.forEach((counter) => counterObserver.observe(counter));
}

/* =========================================================
   35. BEFORE / AFTER SLIDER
========================================================= */

const sliders = $$(".before-after-slider");

sliders.forEach((slider) => {
  const range =
    $("input[type='range']", slider) ||
    $(".before-after-range", slider);

  const afterImage =
    $(".after-image", slider) ||
    $(".after", slider);

  if (!range || !afterImage) return;

  function updateSlider() {
    const value = safeNumber(range.value, 50);

    afterImage.style.width = `${value}%`;
  }

  range.addEventListener("input", updateSlider);

  updateSlider();
});

/* =========================================================
   36. INTERACTIVE CODE EDITOR
========================================================= */

const codeEditor = byId("codeEditor");
const codeOutput = byId("codeOutput");
const runCodeButton =
  byId("runCode") ||
  byId("runCodeButton");

if (runCodeButton && codeEditor && codeOutput) {
  runCodeButton.addEventListener("click", () => {
    const code = codeEditor.value.trim();

    if (!code) {
      codeOutput.textContent = "Enter JavaScript code first.";
      return;
    }

    try {
      const result = Function(`"use strict"; return (${code})`)();

      codeOutput.textContent =
        result === undefined
          ? "Code executed successfully."
          : String(result);

      showToast("JavaScript executed successfully.");
    } catch (error) {
      codeOutput.textContent =
        `Error: ${error.message}`;

      showToast("JavaScript error.");
    }
  });
}

/* =========================================================
   37. RUN JAVASCRIPT
========================================================= */

const jsEditor =
  byId("jsEditor") ||
  byId("javascriptEditor");

const jsOutput =
  byId("jsOutput") ||
  byId("javascriptOutput");

const jsRun =
  byId("jsRun") ||
  byId("runJavaScript");

if (jsRun && jsEditor && jsOutput) {
  jsRun.addEventListener("click", () => {
    try {
      const result = Function(
        `"use strict";\n${jsEditor.value}`
      )();

      jsOutput.textContent =
        result === undefined
          ? "Executed successfully."
          : String(result);
    } catch (error) {
      jsOutput.textContent =
        `Error: ${error.message}`;
    }
  });
}

/* =========================================================
   38. PYTHON PLAYGROUND
========================================================= */

const pythonEditor = byId("pythonEditor");
const pythonOutput = byId("pythonOutput");
const pythonRun = byId("pythonRun");

if (pythonRun && pythonEditor && pythonOutput) {
  pythonRun.addEventListener("click", () => {
    const code = pythonEditor.value.trim();

    if (!code) {
      pythonOutput.textContent =
        "Enter Python code first.";
      return;
    }

    pythonOutput.textContent =
      "Python Playground UI ready.\n\n" +
      "For real Python execution, a Python runtime/backend is required.\n\n" +
      "Code entered:\n" +
      code;
  });
}

/* =========================================================
   39. SQL PLAYGROUND
========================================================= */

const sqlEditor = byId("sqlEditor");
const sqlOutput = byId("sqlOutput");
const sqlRun = byId("sqlRun");

if (sqlRun && sqlEditor && sqlOutput) {
  sqlRun.addEventListener("click", () => {
    const query = sqlEditor.value.trim();

    if (!query) {
      sqlOutput.textContent =
        "Enter SQL query first.";
      return;
    }

    sqlOutput.textContent =
      "SQL Playground UI ready.\n\n" +
      "A database connection is required for real SQL execution.\n\n" +
      "Query:\n" +
      query;
  });
}

/* =========================================================
   40. CODE SNIPPET LIBRARY
========================================================= */

$$("[data-copy-code]").forEach((button) => {
  button.addEventListener("click", async () => {
    const code =
      button.dataset.copyCode ||
      button.textContent;

    try {
      await navigator.clipboard.writeText(code);
      showToast("Code copied!");
    } catch {
      showToast("Copy failed.");
    }
  });
});

/* =========================================================
   41. PROGRAMMING CHEAT SHEET
========================================================= */

$$(".cheat-sheet-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;

    const target = byId(targetId);

    if (target) {
      target.classList.toggle("hidden");
    }
  });
});

/* =========================================================
   42. NUMBER GUESSING GAME
========================================================= */

let secretNumber =
  Math.floor(Math.random() * 100) + 1;

let guessAttempts = 0;

const guessInput = byId("guessInput");
const guessButton = byId("guessButton");
const guessResult = byId("guessResult");

if (guessButton && guessInput && guessResult) {
  guessButton.addEventListener("click", () => {
    const guess = Number(guessInput.value);

    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
      guessResult.textContent =
        "Enter a number from 1 to 100.";
      return;
    }

    guessAttempts++;

    if (guess === secretNumber) {
      guessResult.textContent =
        `🎉 Correct! Attempts: ${guessAttempts}`;

      showToast("You won the guessing game!");

      secretNumber =
        Math.floor(Math.random() * 100) + 1;

      guessAttempts = 0;
    } else if (guess < secretNumber) {
      guessResult.textContent = "⬆️ Try a higher number.";
    } else {
      guessResult.textContent = "⬇️ Try a lower number.";
    }
  });
}

/* =========================================================
   43. ROCK PAPER SCISSORS
========================================================= */

const rpsButtons =
  $$(".rps-button");

const rpsResult =
  byId("rpsResult");

const choices = [
  "rock",
  "paper",
  "scissors"
];

function playRPS(player) {
  const computer =
    choices[Math.floor(Math.random() * choices.length)];

  let result;

  if (player === computer) {
    result = "Draw!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    result = "🎉 You win!";
  } else {
    result = "Computer wins!";
  }

  if (rpsResult) {
    rpsResult.textContent =
      `You: ${player} | Computer: ${computer} | ${result}`;
  }
}

rpsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRPS(button.dataset.choice);
  });
});

/* =========================================================
   44. TIC TAC TOE
========================================================= */

const ticCells =
  $$(".tic-cell");

let ticBoard = Array(9).fill("");
let ticTurn = "X";
let ticGameOver = false;

function checkTicWinner() {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const [a, b, c] of wins) {
    if (
      ticBoard[a] &&
      ticBoard[a] === ticBoard[b] &&
      ticBoard[a] === ticBoard[c]
    ) {
      return ticBoard[a];
    }
  }

  if (ticBoard.every(Boolean)) return "draw";

  return null;
}

function resetTicTacToe() {
  ticBoard = Array(9).fill("");
  ticTurn = "X";
  ticGameOver = false;

  ticCells.forEach((cell) => {
    cell.textContent = "";
  });

  const result = byId("ticResult");

  if (result) result.textContent = "X's turn";
}

ticCells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (ticGameOver || ticBoard[index]) return;

    ticBoard[index] = ticTurn;
    cell.textContent = ticTurn;

    const winner = checkTicWinner();

    const result = byId("ticResult");

    if (winner) {
      ticGameOver = true;

      if (result) {
        result.textContent =
          winner === "draw"
            ? "Draw!"
            : `${winner} wins!`;
      }

      return;
    }

    ticTurn =
      ticTurn === "X" ? "O" : "X";

    if (result) {
      result.textContent =
        `${ticTurn}'s turn`;
    }
  });
});

const ticReset =
  byId("ticReset");

if (ticReset) {
  ticReset.addEventListener(
    "click",
    resetTi
