"use strict";

/* =========================================================
   ISMAIL PORTFOLIO
   FEATURES 1–70
========================================================= */


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function $(id) {
    return document.getElementById(id);
}

function $all(selector) {
    return document.querySelectorAll(selector);
}

function showToast(message) {
    const toast = $("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);
}

function hexToRgb(hex) {
    if (!hex) return null;

    const value = hex.replace("#", "");

    if (value.length !== 6) return null;

    const number = parseInt(value, 16);

    if (Number.isNaN(number)) return null;

    return {
        r: (number >> 16) & 255,
        g: (number >> 8) & 255,
        b: number & 255
    };
}


/* =========================================================
   1. BACKGROUND MUSIC PLAYER
========================================================= */

const music = $("backgroundMusic");
const musicButton = $("musicButton");

if (music && musicButton) {
    musicButton.addEventListener("click", async function () {
        try {
            if (music.paused) {
                await music.play();

                musicButton.textContent = "🔇 Pause Music";

                showToast("🎵 Music started");
            } else {
                music.pause();

                musicButton.textContent = "🎵 Play Music";

                showToast("⏸️ Music paused");
            }
        } catch (error) {
            showToast("⚠️ Add music.mp3 to the project");
        }
    });
}


/* =========================================================
   2. DARK / BLACK THEME
========================================================= */

document.documentElement.style.setProperty(
    "--bg",
    "#000000"
);


/* =========================================================
   3. ANIMATED BACKGROUND
========================================================= */

const particles = document.querySelector(".particles");

if (particles) {
    particles.classList.add("active");
}


/* =========================================================
   4. PHOTO BREAK / SHATTER EFFECT
========================================================= */

const photoArea = $("photoArea");
const photoCard = $("photoCard");
const resetButton = $("resetButton");

function breakPhoto() {
    if (!photoCard) return;

    photoCard.classList.remove("breaking");

    void photoCard.offsetWidth;

    photoCard.classList.add("breaking");

    showToast("💥 Photo effect activated!");

    setTimeout(function () {
        photoCard.classList.remove("breaking");
    }, 2000);
}

if (photoArea) {
    photoArea.addEventListener("pointerdown", function (event) {
        event.preventDefault();

        breakPhoto();

        createTouchEffect(
            event.clientX,
            event.clientY
        );
    });
}

if (resetButton) {
    resetButton.addEventListener("click", function () {
        if (photoCard) {
            photoCard.classList.remove("breaking");
        }

        showToast("🔄 Photo reset");
    });
}


/* =========================================================
   5. MOUSE / TOUCH EFFECT
========================================================= */

const touchEffect = $("touchEffect");

function createTouchEffect(x, y) {
    if (!touchEffect) return;

    touchEffect.style.left = x + "px";
    touchEffect.style.top = y + "px";

    touchEffect.classList.remove("active");

    void touchEffect.offsetWidth;

    touchEffect.classList.add("active");
}

document.addEventListener("pointerdown", function (event) {
    createTouchEffect(
        event.clientX,
        event.clientY
    );
});


/* =========================================================
   6. TYPING ANIMATION
========================================================= */

const typingText = $("typingText");

const messages = [
    "Welcome to my GitHub project!",
    "I am Ismail.",
    "B.Tech Computer Science & Engineering Student.",
    "Learning Python, SQL and Web Development.",
    "Building my future with code 🚀"
];

let messageIndex = 0;
let characterIndex = 0;

function typeMessage() {
    if (!typingText) return;

    const message = messages[messageIndex];

    if (characterIndex < message.length) {
        typingText.textContent +=
            message.charAt(characterIndex);

        characterIndex++;

        setTimeout(typeMessage, 70);
    } else {
        setTimeout(eraseMessage, 1800);
    }
}

function eraseMessage() {
    if (!typingText) return;

    if (characterIndex > 0) {
        typingText.textContent =
            messages[messageIndex].substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        setTimeout(eraseMessage, 35);
    } else {
        messageIndex++;

        if (messageIndex >= messages.length) {
            messageIndex = 0;
        }

        setTimeout(typeMessage, 400);
    }
}

if (typingText) {
    typeMessage();
}


/* =========================================================
   7. GLOWING BUTTONS
========================================================= */

$all(".glow-button").forEach(function (button) {
    button.addEventListener("pointerenter", function () {
        button.style.setProperty(
            "box-shadow",
            "0 0 15px var(--accent)"
        );
    });

    button.addEventListener("pointerleave", function () {
        button.style.removeProperty("box-shadow");
    });
});


/* =========================================================
   8. MOBILE RESPONSIVE DESIGN
========================================================= */

window.addEventListener("resize", function () {
    document.documentElement.style.setProperty(
        "--screen-width",
        window.innerWidth + "px"
    );
});


/* =========================================================
   9. ABOUT ME
========================================================= */

const copyButton = $("copyButton");

if (copyButton) {
    copyButton.addEventListener("click", async function () {
        const text =
            "B.Tech CSE | Web Development | Python | SQL";

        try {
            await navigator.clipboard.writeText(text);

            showToast("📋 Information copied!");
        } catch (error) {
            showToast("⚠️ Copy is not available");
        }
    });
}


/* =========================================================
   10. SKILLS
========================================================= */

const skillFills = $all(".skill-fill");

function animateSkills() {
    skillFills.forEach(function (fill) {
        const progress =
            Number(fill.dataset.progress);

        if (!Number.isFinite(progress)) return;

        const safeProgress =
            Math.max(
                0,
                Math.min(100, progress)
            );

        fill.style.width =
            safeProgress + "%";
    });
}

setTimeout(animateSkills, 700);


/* =========================================================
   11. PROJECT PROGRESS
========================================================= */

const progressFill = $("progressFill");
const progressText = $("progressText");

let progress = 0;

function updateProgress() {
    if (!progressFill) return;

    progress += 1;

    if (progress > 85) {
        progress = 85;
    }

    progressFill.style.width =
        progress + "%";

    if (progressText) {
        progressText.textContent =
            progress + "% Complete";
    }

    if (progress < 85) {
        setTimeout(updateProgress, 30);
    }
}

if (progressFill) {
    setTimeout(updateProgress, 800);
}


/* =========================================================
   12. CONTACT
========================================================= */

const contactButton = $("contactButton");

if (contactButton) {
    contactButton.addEventListener("click", function () {
        window.location.href =
            "mailto:your-email@example.com";
    });
}


/* =========================================================
   13. BACK TO TOP
========================================================= */

const backToTop = $("backToTop");

window.addEventListener("scroll", function () {
    if (!backToTop) return;

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

if (backToTop) {
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* =========================================================
   14. LIVE DATE & TIME
========================================================= */

const liveDate = $("liveDate");
const liveTime = $("liveTime");

function updateDateTime() {
    const now = new Date();

    if (liveDate) {
        liveDate.textContent =
            now.toLocaleDateString(
                "en-IN",
                {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }
            );
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

window.addEventListener("load", function () {
    const title = $("welcomeTitle");

    if (title) {
        title.style.transform = "scale(1.05)";

        setTimeout(function () {
            title.style.transform = "scale(1)";
        }, 500);
    }

    setTimeout(function () {
        showToast(
            "🎉 Welcome to Ismail's Portfolio!"
        );
    }, 1200);
});


/* =========================================================
   16. 3D HERO CARD
========================================================= */

const heroCard = $("heroCard");

if (heroCard) {
    heroCard.addEventListener(
        "pointermove",
        function (event) {

            if (
                window.matchMedia(
                    "(pointer: coarse)"
                ).matches
            ) {
                return;
            }

            const rect =
                heroCard.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 12;

            const rotateX =
                ((y / rect.height) - 0.5) * -12;

            heroCard.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-4px)`;
        }
    );

    heroCard.addEventListener(
        "pointerleave",
        function () {
            heroCard.style.transform = "";
        }
    );
}


/* =========================================================
   17. FLOATING PARTICLES
========================================================= */

if (particles) {
    let particleAnimation = 0;

    window.addEventListener("scroll", function () {
        particleAnimation =
            window.scrollY * 0.05;

        particles.style.transform =
            `translateY(${particleAnimation}px)`;
    });
}


/* =========================================================
   18. GLASSMORPHISM
========================================================= */

$all(".glass-card").forEach(function (card) {
    card.addEventListener("pointermove", function (event) {
        const rect =
            card.getBoundingClientRect();

        const x =
            ((event.clientX - rect.left) /
                rect.width) * 100;

        const y =
            ((event.clientY - rect.top) /
                rect.height) * 100;

        card.style.background =
            `radial-gradient(
                circle at ${x}% ${y}%,
                rgba(255,255,255,0.14),
                rgba(255,255,255,0.03)
            )`;
    });

    card.addEventListener("pointerleave", function () {
        card.style.background = "";
    });
});


/* =========================================================
   19. CUSTOM GLOWING CURSOR
========================================================= */

document.addEventListener("pointermove", function (event) {
    if (
        window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) {
        return;
    }

    if (!touchEffect) return;

    touchEffect.style.left =
        event.clientX + "px";

    touchEffect.style.top =
        event.clientY + "px";
});


/* =========================================================
   20. STICKY NAVIGATION
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.6)";
    } else {
        navbar.style.boxShadow = "";
    }
});


/* =========================================================
   21. ANIMATED SKILL PROGRESS
========================================================= */

const skillObserver =
    new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateSkills();
                }
            });
        },
        {
            threshold: 0.2
        }
    );

$all(".skills-container").forEach(function (section) {
    skillObserver.observe(section);
});


/* =========================================================
   22. PHOTO GALLERY
========================================================= */

const galleryImages =
    $all(".gallery-image");

galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
        openImageViewer(
            image.src,
            image.alt
        );
    });
});


/* =========================================================
   23. FULLSCREEN IMAGE VIEWER
========================================================= */

function openImageViewer(src, alt) {

    const viewer =
        document.createElement("div");

    viewer.style.position = "fixed";
    viewer.style.inset = "0";
    viewer.style.zIndex = "10000";
    viewer.style.background =
        "rgba(0,0,0,0.95)";
    viewer.style.display = "flex";
    viewer.style.alignItems = "center";
    viewer.style.justifyContent = "center";
    viewer.style.padding = "20px";

    const image =
        document.createElement("img");

    image.src = src;
    image.alt =
        alt || "Gallery image";

    image.style.maxWidth = "95%";
    image.style.maxHeight = "90%";
    image.style.objectFit = "contain";
    image.style.borderRadius = "18px";

    const closeButton =
        document.createElement("button");

    closeButton.textContent = "✕";

    closeButton.style.position = "absolute";
    closeButton.style.top = "20px";
    closeButton.style.right = "20px";
    closeButton.style.margin = "0";

    viewer.appendChild(image);
    viewer.appendChild(closeButton);

    document.body.appendChild(viewer);

    closeButton.addEventListener("click", function () {
        viewer.remove();
    });

    viewer.addEventListener("click", function (event) {
        if (event.target === viewer) {
            viewer.remove();
        }
    });
}


/* =========================================================
   24. SCROLL REVEAL
========================================================= */

const revealCards =
    $all(".reveal-card");

function revealOnScroll() {
    revealCards.forEach(function (card) {

        const rect =
            card.getBoundingClientRect();

        if (
            rect.top <
            window.innerHeight * 0.85
        ) {
            card.classList.add("visible");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================================================
   25. TOAST NOTIFICATIONS
========================================================= */

window.showToast = showToast;


/* =========================================================
   26. COPY TO CLIPBOARD
========================================================= */

if (copyButton) {
    copyButton.setAttribute(
        "aria-label",
        "Copy portfolio information"
    );
}


/* =========================================================
   27. GITHUB PROFILE
========================================================= */

const githubLink =
    document.querySelector(
        ".github-link"
    );

if (githubLink) {
    githubLink.addEventListener(
        "click",
        function () {
            showToast("🐙 Opening GitHub...");
        }
    );
}


/* =========================================================
   28. MINI WEB GAME
========================================================= */

const gameButton = $("gameButton");
const gameScore = $("gameScore");

let score = 0;

if (gameButton) {
    gameButton.addEventListener(
        "click",
        function () {

            score++;

            if (gameScore) {
                gameScore.textContent =
                    score;
            }

            if (
                score === 10 ||
                score === 25 ||
                score === 50
            ) {
                showToast(
                    `🏆 Score reached ${score}!`
                );
            }
        }
    );
}


/* =========================================================
   29. ACHIEVEMENTS
========================================================= */

$all(".achievement").forEach(function (achievement) {
    achievement.addEventListener("click", function () {
        achievement.style.transform =
            "scale(1.05)";

        setTimeout(function () {
            achievement.style.transform = "";
        }, 250);
    });
});


/* =========================================================
   30. THEME COLOR SELECTOR
========================================================= */

const themeButtons =
    $all(".theme-color");

themeButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const color =
                button.dataset.color;

            if (!color) return;

            document.documentElement.style
                .setProperty(
                    "--accent",
                    color
                );

            const rgb =
                hexToRgb(color);

            if (rgb) {
                document.documentElement.style
                    .setProperty(
                        "--accent-rgb",
                        `${rgb.r}, ${rgb.g}, ${rgb.b}`
                    );
            }

            showToast(
                "🎨 Theme color changed!"
            );
        }
    );
});


/* =========================================================
   31. LIGHT / DARK MODE
========================================================= */

const modeButton =
    $("modeButton") ||
    $("lightDarkButton");

if (modeButton) {

    modeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "light-mode"
            );

            if (
                document.body.classList.contains(
                    "light-mode"
                )
            ) {
                document.documentElement.style
                    .setProperty(
                        "--bg",
                        "#f5f7fb"
       
