/* =========================
   MUSIC PLAYER
========================= */

const music =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");

if (music && musicButton) {

    musicButton.addEventListener(
        "click",
        async function () {

            try {

                if (music.paused) {

                    await music.play();

                    musicButton.textContent =
                        "🔇 Pause Music";

                    showToast(
                        "🎵 Music started"
                    );

                } else {

                    music.pause();

                    musicButton.textContent =
                        "🎵 Play Music";

                    showToast(
                        "⏸️ Music paused"
                    );
                }

            } catch (error) {

                showToast(
                    "⚠️ Add music.mp3 to the project"
                );
            }
        }
    );
}


/* =========================
   TYPING ANIMATION
========================= */

const typingText =
    document.getElementById("typingText");

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

    const message =
        messages[messageIndex];

    if (characterIndex < message.length) {

        typingText.textContent +=
            message.charAt(characterIndex);

        characterIndex++;

        setTimeout(
            typeMessage,
            70
        );

    } else {

        setTimeout(
            eraseMessage,
            1800
        );
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

        setTimeout(
            eraseMessage,
            35
        );

    } else {

        messageIndex++;

        if (
            messageIndex >=
            messages.length
        ) {
            messageIndex = 0;
        }

        setTimeout(
            typeMessage,
            400
        );
    }
}

typeMessage();


/* =========================
   LIVE DATE & TIME
========================= */

const liveDate =
    document.getElementById("liveDate");

const liveTime =
    document.getElementById("liveTime");

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
            now.toLocaleTimeString(
                "en-IN"
            );
    }
}

updateDateTime();

setInterval(
    updateDateTime,
    1000
);


/* =========================
   TOAST NOTIFICATION
========================= */

const toast =
    document.getElementById("toast");

let toastTimer;

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* =========================
   PHOTO BREAK EFFECT
========================= */

const photoArea =
    document.getElementById("photoArea");

const photoCard =
    document.getElementById("photoCard");

const resetButton =
    document.getElementById("resetButton");


function breakPhoto() {

    if (!photoCard) return;

    photoCard.classList.remove(
        "breaking"
    );

    void photoCard.offsetWidth;

    photoCard.classList.add(
        "breaking"
    );

    showToast(
        "💥 Photo effect activated!"
    );

    setTimeout(
        function () {

            photoCard.classList.remove(
                "breaking"
            );

        },
        2000
    );
}


if (photoArea) {

    photoArea.addEventListener(
        "pointerdown",
        function (event) {

            event.preventDefault();

            breakPhoto();

            createTouchEffect(
                event.clientX,
                event.clientY
            );
        }
    );
}


if (resetButton) {

    resetButton.addEventListener(
        "click",
        function () {

            if (photoCard) {

                photoCard.classList.remove(
                    "breaking"
                );
            }

            showToast(
                "🔄 Photo reset"
            );
        }
    );
}


/* =========================
   MOUSE / TOUCH EFFECT
========================= */

const touchEffect =
    document.getElementById("touchEffect");

function createTouchEffect(x, y) {

    if (!touchEffect) return;

    touchEffect.style.left =
        x + "px";

    touchEffect.style.top =
        y + "px";

    touchEffect.classList.remove(
        "active"
    );

    void touchEffect.offsetWidth;

    touchEffect.classList.add(
        "active"
    );
}


document.addEventListener(
    "pointerdown",
    function (event) {

        createTouchEffect(
            event.clientX,
            event.clientY
        );
    }
);


/* =========================
   3D HERO CARD
========================= */

const heroCard =
    document.getElementById("heroCard");

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
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

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

            heroCard.style.transform =
                "";
        }
    );
}


/* =========================
   PROJECT PROGRESS
========================= */

const progressFill =
    document.getElementById(
        "progressFill"
    );

const progressText =
    document.getElementById(
        "progressText"
    );

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

        setTimeout(
            updateProgress,
            30
        );
    }
}

setTimeout(
    updateProgress,
    800
);


/* =========================
   SKILL PROGRESS BARS
========================= */

const skillFills =
    document.querySelectorAll(
        ".skill-fill"
    );

function animateSkills() {

    skillFills.forEach(
        function (fill) {

            const progress =
                Number(
                    fill.dataset.progress
                );

            if (
                Number.isFinite(progress)
            ) {

                const safeProgress =
                    Math.max(
                        0,
                        Math.min(
                            100,
                            progress
                        )
                    );

                fill.style.width =
                    safeProgress + "%";
            }
        }
    );
}

setTimeout(
    animateSkills,
    700
);


/* =========================
   SCROLL REVEAL
========================= */

const revealCards =
    document.querySelectorAll(
        ".reveal-card"
    );

function revealOnScroll() {

    revealCards.forEach(
        function (card) {

            const rect =
                card.getBoundingClientRect();

            if (
                rect.top <
                window.innerHeight * 0.85
            ) {

                card.classList.add(
                    "visible"
                );
            }
        }
    );
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   MINI GAME
========================= */

const gameButton =
    document.getElementById(
        "gameButton"
    );

const gameScore =
    document.getElementById(
        "gameScore"
    );

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


/* =========================
   COPY TO CLIPBOARD
========================= */

const copyButton =
    document.getElementById(
        "copyButton"
    );

if (copyButton) {

    copyButton.addEventListener(
        "click",
        async function () {

            const text =
                "B.Tech CSE | Web Development | Python | SQL";

            try {

                await navigator.clipboard.writeText(
                    text
                );

                showToast(
                    "📋 Information copied!"
                );

            } catch (error) {

                showToast(
                    "⚠️ Copy is not available"
                );
            }
        }
    );
}


/* =========================
   CONTACT BUTTON
========================= */

const contactButton =
    document.getElementById(
        "contactButton"
    );

if (contactButton) {

    contactButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "mailto:your-email@example.com";
        }
    );
}


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById(
        "backToTop"
    );

window.addEventListener(
    "scroll",
    function () {

        if (!backToTop) return;

        if (window.scrollY > 300) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );
        }
    }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}


/* =========================
   THEME COLOR SELECTOR
========================= */

const themeButtons =
    document.querySelectorAll(
        ".theme-color"
    );

themeButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const color =
                    button.dataset.color;

                if (!color) return;

                document.documentElement
                    .style.setProperty(
                        "--accent",
                        color
                    );

                const rgb =
                    hexToRgb(color);

                if (rgb) {

                    document.documentElement
                        .style.setProperty(
                            "--accent-rgb",
                            `${rgb.r}, ${rgb.g}, ${rgb.b}`
                        );
                }

                showToast(
                    "🎨 Theme color changed!"
                );
            }
        );
    }
);


function hexToRgb(hex) {

    const value =
        hex.replace("#", "");

    if (value.length !== 6) {
        return null;
    }

    const number =
        parseInt(value, 16);

    if (Number.isNaN(number)) {
        return null;
    }

    return {
        r: (number >> 16) & 255,
        g: (number >> 8) & 255,
        b: number & 255
    };
}


/* =========================
   GALLERY IMAGE VIEWER
========================= */

const galleryImages =
    document.querySelectorAll(
        ".gallery-image"
    );

galleryImages.forEach(
    function (image) {

        image.addEventListener(
            "click",
            function () {

                openImageViewer(
                    image.src,
                    image.alt
                );
            }
        );
    }
);


function openImageViewer(
    src,
    alt
) {

    const viewer =
        document.createElement("div");

    viewer.style.position =
        "fixed";

    viewer.style.inset =
        "0";

    viewer.style.zIndex =
        "10000";

    viewer.style.background =
        "rgba(0,0,0,0.95)";

    viewer.style.display =
        "flex";

    viewer.style.alignItems =
        "center";

    viewer.style.justifyContent =
        "center";

    viewer.style.padding =
        "20px";

    viewer.innerHTML = `
        <button
            type="button"
            aria-label="Close image"
            style="
                position:absolute;
                top:20px;
                right:20px;
                z-index:2;
                margin:0;
            "
        >
            ✕
        </button>

        <img
            src="${src}"
            alt="${alt || "Gallery image"}"
            style="
                max-width:95%;
                max-height:90%;
                object-fit:contain;
                border-radius:18px;
                box-shadow:0 0 40px rgba(0,255,255,0.25);
            "
        >
    `;

    document.body.appendChild(
        viewer
    );

    const closeButton =
        viewer.querySelector(
            "button"
        );

    closeButton.addEventListener(
        "click",
        function () {

            viewer.remove();
        }
    );

    viewer.addEventListener(
        "click",
        function (event) {

            if (
                event.target === viewer
            ) {

                viewer.remove();
            }
        }
    );

    document.addEventListener(
        "keydown",
        function closeWithEscape(
            event
        ) {

            if (
                event.key === "Escape"
            ) {

                viewer.remove();

                document.removeEventListener(
                    "keydown",
                    closeWithEscape
                );
            }
        }
    );
}


/* =========================
   WELCOME ANIMATION
========================= */

window.addEventListener(
    "load",
    function () {

        const title =
            document.getElementById(
                "welcomeTitle"
            );

        if (title) {

            title.style.transform =
                "scale(1.05)";

            setTimeout(
                function () {

                    title.style.transform =
                        "scale(1)";

                },
                500
            );
        }

        setTimeout(
            function () {

                showToast(
                    "🎉 Welcome to Ismail's Portfolio!"
                );

            },
            1200
        );
    }
);


/* =========================
   NAVIGATION ACTIVE EFFECT
========================= */

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.forEach(
                    function (item) {

                        item.style.color =
                            "";
                    }
                );

                link.style.color =
                    "var(--accent)";
            }
        );
    }
);


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "🚀 Ismail's 30-feature portfolio loaded successfully!"
);
