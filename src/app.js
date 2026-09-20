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
        function () {

            if (music.paused) {

                music.play();

                musicButton.textContent =
                    "🔇 Pause Music";

            } else {

                music.pause();

                musicButton.textContent =
                    "🎵 Play Music";
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
            80
        );

    } else {

        setTimeout(
            eraseMessage,
            1800
        );
    }
}


function eraseMessage() {

    if (characterIndex > 0) {

        typingText.textContent =
            messages[messageIndex]
                .substring(
                    0,
                    characterIndex - 1
                );

        characterIndex--;

        setTimeout(
            eraseMessage,
            40
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

    // Restart animation
    void photoCard.offsetWidth;

    photoCard.classList.add(
        "breaking"
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


/* Touch + Mouse */

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


/* Reset */

if (resetButton) {

    resetButton.addEventListener(
        "click",
        function () {

            photoCard.classList.remove(
                "breaking"
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
   WELCOME BUTTON
========================= */

const welcomeButton =
    document.getElementById(
        "welcomeButton"
    );


if (welcomeButton) {

    welcomeButton.addEventListener(
        "click",
        function () {

            alert(
                "🎉 Welcome to Ismail's Project!"
            );
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
    }
);
