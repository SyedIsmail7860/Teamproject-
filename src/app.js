/* =========================
   50 COLOR DOT TIMER
   1 COLOR EVERY 1 SECOND
   REPEATS FOREVER
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


/* Change dot color */
function changeDotColor() {

    document.body.style.backgroundImage =
        `radial-gradient(circle, ${colors[colorIndex]} 2px, transparent 2px)`;

    colorIndex++;

    /* Repeat after 50 colors */
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
}


/* Start immediately */
changeDotColor();


/* Change every 1 second forever */
setInterval(changeDotColor, 1000);


/* =========================
   3D PHOTO
   ========================= */

const card = document.getElementById("photoCard");
const area = document.querySelector(".photo-area");
const resetButton = document.getElementById("resetButton");

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;


/* Smooth 3D animation */
function animate() {

    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;

    card.style.transform =
        `rotateX(${currentX}deg) rotateY(${
