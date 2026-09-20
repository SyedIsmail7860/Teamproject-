/* =========================
   DOT MATRIX LETTERS
   ========================= */

const letters = {

    S: [
        "111111",
        "110000",
        "110000",
        "111111",
        "000011",
        "000011",
        "111111"
    ],

    Y: [
        "110011",
        "110011",
        "011110",
        "001100",
        "001100",
        "001100",
        "001100"
    ],

    E: [
        "111111",
        "110000",
        "110000",
        "111110",
        "110000",
        "110000",
        "111111"
    ],

    D: [
        "111110",
        "110011",
        "110011",
        "110011",
        "110011",
        "110011",
        "111110"
    ],

    I: [
        "111111",
        "001100",
        "001100",
        "001100",
        "001100",
        "001100",
        "111111"
    ],

    M: [
        "110011",
        "111111",
        "111111",
        "110011",
        "110011",
        "110011",
        "110011"
    ],

    A: [
        "011110",
        "110011",
        "110011",
        "111111",
        "110011",
        "110011",
        "110011"
    ],

    L: [
        "110000",
        "110000",
        "110000",
        "110000",
        "110000",
        "110000",
        "111111"
    ],

    " ": [
        "0000",
        "0000",
        "0000",
        "0000",
        "0000",
        "0000",
        "0000"
    ]
};


/* =========================
   CREATE SYED ISMAIL
   ========================= */

const nameText = "SYED ISMAIL";

const dotName =
    document.getElementById("dotName");

const dotElements = [];


for (let row = 0; row < 7; row++) {

    for (const character of nameText) {

        const pattern =
            letters[character];

        for (const value of pattern[row]) {

            const dot =
                document.createElement("div");


            if (value === "1") {

                dot.className =
                    "name-dot";

                dotElements.push(dot);

            } else {

                dot.className =
                    "empty-dot";
            }


            dotName.appendChild(dot);
        }


        const gap =
            document.createElement("div");

        gap.className =
            "empty-dot";

        dotName.appendChild(gap);
    }
}


/* =========================
   50 LED COLORS
   ========================= */

const colors = [

    "#ff0000",
    "#ff3300",
    "#ff6600",
    "#ff9900",
    "#ffcc00",
    "#ffff00",
    "#ccff00",
    "#99ff00",
    "#66ff00",
    "#33ff00",

    "#00ff00",
    "#00ff33",
    "#00ff66",
    "#00ff99",
    "#00ffcc",
    "#00ffff",
    "#00ccff",
    "#0099ff",
    "#0066ff",
    "#0033ff",

    "#0000ff",
    "#3300ff",
    "#6600ff",
    "#9900ff",
    "#cc00ff",
    "#ff00ff",
    "#ff00cc",
    "#ff0099",
    "#ff0066",
    "#ff0033",

    "#ff3366",
    "#ff6699",
    "#ff99cc",
    "#ffccff",
    "#ffffff",
    "#cccccc",
    "#999999",
    "#666666",
    "#00aaff",
    "#00ddff",

    "#00ffaa",
    "#55ff55",
    "#aaff00",
    "#ffaa00",
    "#ff5500",
    "#ff0088",
    "#aa00ff",
    "#5500ff",
    "#0088ff",
    "#00ffff"
];


let colorIndex = 0;


/* =========================
   CHANGE LED COLOR
   ========================= */

function changeColor() {

    const color =
        colors[colorIndex];


    dotElements.forEach(dot => {

        dot.style.backgroundColor =
            color;

        dot.style.color =
            color;

        dot.style.boxShadow =
            `0 0 5px ${color},
             0 0 12px ${color},
             0 0 25px ${color},
             0 0 40px ${color}`;
    });


    colorIndex++;

    if (colorIndex >= colors.length) {

        colorIndex = 0;
    }
}


changeColor();

setInterval(
    changeColor,
    1000
);


/* =========================
   PHOTO
   ========================= */

const photoArea =
    document.getElementById("photoArea");

const photoCard =
    document.getElementById("photoCard");

const resetButton =
    document.getElementById("resetButton");


/* =========================
   BREAK PHOTO
   ========================= */

function breakPhoto() {

    photoCard.classList.add(
        "breaking"
    );


    setTimeout(
        function() {

            photoCard.classList.remove(
                "breaking"
            );

        },
        2000
    );
}


/* =========================
   TOUCH / CLICK
   ========================= */

photoArea.addEventListener(
    "pointerdown",
    function(event) {

        event.preventDefault();

        breakPhoto();
    }
);


/* =========================
   RESET
   ========================= */

resetButton.addEventListener(
    "click",
    function() {

        photoCard.classList.remove(
            "breaking"
        );
    }
);
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", function () {

    if (music.paused) {
        music.play();
        musicButton.textContent = "🔇 Pause Music";
    } else {
        music.pause();
        musicButton.textContent = "🎵 Play Music";
    }

});
