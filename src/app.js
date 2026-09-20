/* =========================================================
   ISMAIL PORTFOLIO — APP.JS
   Features 1–70
   Page Loader removed
   ========================================================= */

"use strict";

/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

function showToast(message) {
    const toast = $("#toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

window.showToast = showToast;

/* =========================================================
   1. BACKGROUND MUSIC PLAYER
   ========================================================= */

const music = $("#backgroundMusic");
const musicButton = $("#musicButton");

if (music && musicButton) {
    musicButton.addEventListener("click", () => {
        if (music.paused) {
            music.play()
                .then(() => {
                    musicButton.textContent = "⏸️";
                    showToast("Music playing 🎵");
                })
                .catch(() => {
                    showToast("Tap again to start music");
                });
        } else {
            music.pause();
            musicButton.textContent = "▶️";
            showToast("Music paused");
        }
    });

    music.addEventListener("ended", () => {
        musicButton.textContent = "▶️";
    });
}

/* =========================================================
   2. DARK / BLACK THEME
   ========================================================= */

document.body.classList.add("dark-mode");

/* =========================================================
   3. ANIMATED BACKGROUND PARTICLES
   ========================================================= */

const particlesContainer = $("#particles");

function createParticles() {
    if (!particlesContainer) return;

    particlesContainer.innerHTML = "";

    const count = window.innerWidth < 600 ? 35 : 70;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration =
            `${5 + Math.random() * 10}s`;

        particle.style.animationDelay =
            `${Math.random() * 8}s`;

        particle.style.opacity =
            `${0.2 + Math.random() * 0.8}`;

        particlesContainer.appendChild(particle);
    }
}

createParticles();

/* =========================================================
   4. PHOTO BREAK / RE-FORM EFFECT
   ========================================================= */

const photoCard = $("#photoCard");
const resetButton = $("#resetButton");

function photoBreakEffect() {
    if (!photoCard) return;

    photoCard.classList.remove("breaking");

    void photoCard.offsetWidth;

    photoCard.classList.add("breaking");

    setTimeout(() => {
        photoCard.classList.remove("breaking");
    }, 2000);
}

if (photoCard) {
    photoCard.addEventListener("click", photoBreakEffect);
}

if (resetButton) {
    resetButton.addEventListener("click", photoBreakEffect);
}

/* =========================================================
   5. MOUSE / TOUCH EFFECT
   ========================================================= */

const touchEffect = $("#touchEffect");

function createTouchEffect(x, y) {
    if (!touchEffect) return;

    touchEffect.style.left = `${x}px`;
    touchEffect.style.top = `${y}px`;

    touchEffect.classList.remove("active");

    void touchEffect.offsetWidth;

    touchEffect.classList.add("active");
}

document.addEventListener("pointerdown", event => {
    createTouchEffect(event.clientX, event.clientY);
});

/* =========================================================
   6. TYPING ANIMATION
   ========================================================= */

const typingElement = $(".typing-text");

const typingWords = [
    "Python Developer",
    "CSE Student",
    "Future Full Stack Developer",
    "Problem Solver",
    "Software Developer"
];

let typingWordIndex = 0;
let typingCharIndex = 0;
let deletingText = false;

function typeAnimation() {
    if (!typingElement) return;

    const word = typingWords[typingWordIndex];

    if (!deletingText) {
        typingElement.textContent =
            word.substring(0, typingCharIndex + 1);

        typingCharIndex++;

        if (typingCharIndex === word.length) {
            deletingText = true;

            setTimeout(typeAnimation, 1300);
            return;
        }
    } else {
        typingElement.textContent =
            word.substring(0, typingCharIndex - 1);

        typingCharIndex--;

        if (typingCharIndex === 0) {
            deletingText = false;
            typingWordIndex =
                (typingWordIndex + 1) % typingWords.length;
        }
    }

    setTimeout(
        typeAnimation,
        deletingText ? 45 : 85
    );
}

typeAnimation();

/* =========================================================
   7. GLOWING BUTTONS
   ========================================================= */

$$(".btn, button").forEach(button => {
    button.addEventListener("pointermove", event => {
        const rect = button.getBoundingClientRect();

        const x =
            ((event.clientX - rect.left) / rect.width) * 100;

        const y =
            ((event.clientY - rect.top) / rect.height) * 100;

        button.style.setProperty("--mouse-x", `${x}%`);
        button.style.setProperty("--mouse-y", `${y}%`);
    });
});

/* =========================================================
   8. MOBILE RESPONSIVE
   ========================================================= */

window.addEventListener("resize", () => {
    createParticles();
});

/* =========================================================
   9. ABOUT ME
   ========================================================= */

const aboutSection = $("#about");

if (aboutSection) {
    aboutSection.addEventListener("click", () => {
        aboutSection.classList.add("about-active");

        setTimeout(() => {
            aboutSection.classList.remove("about-active");
        }, 500);
    });
}

/* =========================================================
   10. SKILLS
   ========================================================= */

const skillFills = $$(".skill-fill");

function animateSkills() {
    skillFills.forEach(fill => {
        const progress = fill.dataset.progress || "0";

        fill.style.width = `${Math.min(
            100,
            Math.max(0, Number(progress))
        )}%`;
    });
}

/* =========================================================
   11. PROJECT / PROGRESS
   ========================================================= */

const progressFill = $("#progressFill");
const progressText = $("#progressText");

function updateProjectProgress(value = 75) {
    if (progressFill) {
        progressFill.style.width = `${value}%`;
    }

    if (progressText) {
        progressText.textContent =
            `Portfolio Progress: ${value}%`;
    }
}

updateProjectProgress();

/* =========================================================
   12. CONTACT
   ========================================================= */

const contactSection = $("#contact");

if (contactSection) {
    contactSection.addEventListener("mouseenter", () => {
        contactSection.classList.add("contact-active");
    });

    contactSection.addEventListener("mouseleave", () => {
        contactSection.classList.remove("contact-active");
    });
}

/* =========================================================
   13. BACK TO TOP
   ========================================================= */

const backToTop = $("#backToTop");

window.addEventListener("scroll", () => {
    if (!backToTop) return;

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* =========================================================
   14. LIVE DATE & TIME
   ========================================================= */

const liveDate = $("#liveDate");
const liveTime = $("#liveTime");

function updateDateTime() {
    const now = new Date();

    if (liveDate) {
        liveDate.textContent =
            now.toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            });
    }

    if (liveTime) {
        liveTime.textContent =
            now.toLocaleTimeString("en-IN");
    }
}

updateDateTime();

setInterval(updateDateTime, 1000);

/* =========================================================
   15. WELCOME ANIMATION
   ========================================================= */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    setTimeout(() => {
        showToast("Welcome to Ismail's Portfolio 👋");
    }, 700);
});

/* =========================================================
   16. 3D INTERACTIVE HERO CARD
   ========================================================= */

const heroCard = $("#heroCard");

if (heroCard) {
    heroCard.addEventListener("pointermove", event => {
        const rect = heroCard.getBoundingClientRect();

        const x =
            event.clientX - rect.left - rect.width / 2;

        const y =
            event.clientY - rect.top - rect.height / 2;

        const rotateX =
            (-y / rect.height) * 8;

        const rotateY =
            (x / rect.width) * 8;

        heroCard.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroCard.addEventListener("pointerleave", () => {
        heroCard.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";
    });
}

/* =========================================================
   17. FLOATING PARTICLES
   ========================================================= */

function createFloatingObject() {
    const object = document.createElement("div");

    object.className = "floating-object";
    object.textContent =
        ["◆", "◇", "✦", "•"][Math.floor(Math.random() * 4)];

    object.style.left =
        `${Math.random() * 100}%`;

    object.style.top =
        `${Math.random() * 100}%`;

    object.style.fontSize =
        `${10 + Math.random() * 20}px`;

    document.body.appendChild(object);

    setTimeout(() => {
        object.remove();
    }, 10000);
}

setInterval(createFloatingObject, 2500);

/* =========================================================
   18. GLASSMORPHISM
   ========================================================= */

$$(".glass-card").forEach(card => {
    card.addEventListener("pointermove", event => {
        const rect = card.getBoundingClientRect();

        const x =
            ((event.clientX - rect.left) / rect.width) * 100;

        const y =
            ((event.clientY - rect.top) / rect.height) * 100;

        card.style.background =
            `radial-gradient(circle at ${x}% ${y}%, rgba(0,170,255,.12), rgba(15,15,15,.88) 45%)`;
    });

    card.addEventListener("pointerleave", () => {
        card.style.background = "";
    });
});

/* =========================================================
   19. CUSTOM GLOWING CURSOR
   ========================================================= */

const cursorGlow = document.createElement("div");

cursorGlow.id = "cursorGlow";

cursorGlow.style.cssText = `
    position:fixed;
    width:20px;
    height:20px;
    border-radius:50%;
    pointer-events:none;
    z-index:9999;
    border:1px solid rgba(0,170,255,.8);
    box-shadow:0 0 20px rgba(0,170,255,.6);
    transform:translate(-50%,-50%);
    display:none;
`;

document.body.appendChild(cursorGlow);

if (window.matchMedia("(pointer:fine)").matches) {
    cursorGlow.style.display = "block";

    document.addEventListener("pointermove", event => {
        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;
    });
}

/* =========================================================
   20. STICKY NAVIGATION
   ========================================================= */

const navbar = $("#navbar");

window.addEventListener("scroll", () => {
    if (!navbar) return;

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );
});

/* =========================================================
   21. SKILL OBSERVER
   ========================================================= */

if ("IntersectionObserver" in window) {
    const skillObserver =
        new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    skillObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.25
        });

    skillFills.forEach(fill => {
        skillObserver.observe(fill);
    });
} else {
    animateSkills();
}

/* =========================================================
   22. PHOTO GALLERY
   ========================================================= */

$$(".gallery-item img").forEach(image => {
    image.addEventListener("click", () => {
        openImageViewer(image.src, image.alt);
    });
});

/* =========================================================
   23. FULLSCREEN IMAGE VIEWER
   ========================================================= */

function openImageViewer(src, alt = "Image") {
    const viewer = document.createElement("div");

    viewer.id = "imageViewer";

    viewer.innerHTML = `
        <div class="image-viewer-inner">
            <button class="image-viewer-close">✕</button>
            <img src="${src}" alt="${alt}">
        </div>
    `;

    viewer.style.cssText = `
        position:fixed;
        inset:0;
        z-index:10001;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:20px;
        background:rgba(0,0,0,.92);
        backdrop-filter:blur(12px);
    `;

    document.body.appendChild(viewer);

    const close = $(".image-viewer-close", viewer);

    close.style.cssText = `
        position:absolute;
        top:20px;
        right:20px;
        width:45px;
        height:45px;
        border-radius:50%;
        background:#111;
        color:#fff;
        border:1px solid #555;
        font-size:20px;
    `;

    const image = $("img", viewer);

    image.style.cssText = `
        max-width:95%;
        max-height:90vh;
        object-fit:contain;
        border-radius:15px;
    `;

    function closeViewer() {
        viewer.remove();
    }

    close.addEventListener("click", closeViewer);

    viewer.addEventListener("click", event => {
        if (event.target === viewer) {
            closeViewer();
        }
    });

    document.addEventListener("keydown", function escapeHandler(event) {
        if (event.key === "Escape") {
            closeViewer();
            document.removeEventListener(
                "keydown",
                escapeHandler
            );
        }
    });
}

/* =========================================================
   24. SCROLL REVEAL
   ========================================================= */

const revealElements = $$(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver =
        new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, {
            threshold: 0.12
        });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(element => {
        element.classList.add("visible");
    });
}

/* =========================================================
   25. TOAST NOTIFICATIONS
   ========================================================= */

/* showToast() is defined above */

/* =========================================================
   26. COPY TO CLIPBOARD
   ========================================================= */

function copyText(text, successMessage = "Copied!") {
    if (!text) return;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => showToast(successMessage))
            .catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textarea =
        document.createElement("textarea");

    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);

    textarea.select();

    try {
        document.execCommand("copy");
        showToast("Copied!");
    } catch {
        showToast("Copy failed");
    }

    textarea.remove();
}

const copyEmailButton = $("#copyEmailButton");

if (copyEmailButton) {
    copyEmailButton.addEventListener("click", () => {
        const email =
            copyEmailButton.dataset.email ||
            $(".contact-email")?.textContent ||
            "";

        copyText(email.trim(), "Email copied!");
    });
}

/* =========================================================
   27. GITHUB PROFILE
   ========================================================= */

$$(".github-link").forEach(link => {
    link.addEventListener("click", () => {
        showToast("Opening GitHub 🐙");
    });
});

/* =========================================================
   28. MINI WEB GAME
   ========================================================= */

const miniGameButton = $("#miniGameButton");
const miniGameScore = $("#miniGameScore");

let miniScore = 0;

if (miniGameButton) {
    miniGameButton.addEventListener("click", () => {
        miniScore += Math.floor(Math.random() * 10) + 1;

        if (miniGameScore) {
            miniGameScore.textContent =
                `Score: ${miniScore}`;
        }
    });
}

/* =========================================================
   29. ACHIEVEMENTS
   ========================================================= */

const achievements = [
    "Python Beginner 🐍",
    "Portfolio Builder 💻",
    "GitHub Explorer 🐙",
    "Coding Learner 🚀",
    "Future Developer 👨‍💻",
    "Problem Solver 🧠"
];

function randomAchievement() {
    return achievements[
        Math.floor(Math.random() * achievements.length)
    ];
}

/* =========================================================
   30. THEME COLOR SELECTOR
   ========================================================= */

$$(".theme-color").forEach(button => {
    button.addEventListener("click", () => {
        const color =
            button.dataset.color;

        if (!color) return;

        document.documentElement.style.setProperty(
            "--accent",
            color
        );

        document.documentElement.style.setProperty(
            "--glow",
            `${color}88`
        );

        showToast("Theme color updated 🎨");
    });
});

/* =========================================================
   31. LIGHT / DARK MODE
   ========================================================= */

const lightDarkButton = $("#lightDarkButton");

if (lightDarkButton) {
    lightDarkButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        const light =
            document.body.classList.contains("light-mode");

        lightDark
