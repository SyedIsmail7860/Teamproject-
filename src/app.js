/* =========================
   DOT MATRIX LETTERS
   ========================= */

const letters = {

    "S": [
        "11111",
        "10000",
        "10000",
        "11111",
        "00001",
        "00001",
        "11111"
    ],

    "Y": [
        "10001",
        "10001",
        "01010",
        "00100",
        "00100",
        "00100",
        "00100"
    ],

    "E": [
        "11111",
        "10000",
        "10000",
        "11110",
        "10000",
        "10000",
        "11111"
    ],

    "D": [
        "11110",
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "11110"
    ],

    "I": [
        "11111",
        "00100",
        "00100",
        "00100",
        "00100",
        "00100",
        "11111"
    ],

    "M": [
        "10001",
        "11011",
        "10101",
        "10101",
        "10001",
        "10001",
        "10001"
    ],

    "A": [
        "01110",
        "10001",
        "10001",
        "11111",
        "10001",
        "10001",
        "10001"
    ],

    "L": [
        "10000",
        "10000",
        "10000",
        "10000",
        "10000",
        "10000",
        "11111"
    ],

    " ": [
        "000",
        "000",
        "000",
        "000",
        "000",
        "000",
        "000"
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

        const pattern = letters[character];

        for (const value of pattern[row]) {

            const dot =
                document.createElement("div");

            if (value === "1") {

                dot.className = "name-dot";

                dotElements.push(dot);

            } else {

                dot.className = "empty-dot";
            }

            dotName.appendChild(dot);
        }

        /* Space between letters */

        const gap =
            document.createElement("div");

        gap.className = "empty-dot";

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
   EVERY 1 SECOND
   ========================= */

function changeColor() {

    const color =
        colors[colorIndex];

    dotElements.forEach(dot => {

        dot.style.backgroundColor = color;

        dot.style.color = color;

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


/* START */

changeColor();


/* EVERY 1 SECOND */

setInterval(changeColor, 1000);


/* =========================
   3D PHOTO
   ========================= */

const card =
    document.getElementById("photoCard");

const area =
    document.querySelector(".photo-area");

const resetButton =
    document.getElementById("resetButton");


let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;


/* SMOOTH ANIMATION */

function animate() {

    currentX +=
        (targetX - currentX) * 0.12;

    currentY +=
        (targetY - currentY) * 0.12;

    card.style.transform =
        `rotateX(${currentX}deg)
         rotateY(${currentY}deg)`;

    requestAnimationFrame(animate);
}

animate();


/* =========================
   MOUSE / TOUCH
   ========================= */

area.addEventListener(
    "pointermove",
    function(event) {

        const rect =
            area.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        targetY =
            ((x - centerX) / centerX) * 18;

        targetX =
            -((y - centerY) / centerY) * 18;
    }
);


/* RETURN PHOTO */

area.addEventListener(
    "pointerleave",
    function() {

        targetX = 0;
        targetY = 0;
    }
);


/* =========================
   RESET 3D
   ========================= */

resetButton.addEventListener(
    "click",
    function() {

        targetX = 0;
        targetY = 0;
    }
);
