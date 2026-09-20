const card = document.getElementById("photoCard");
const area = document.querySelector(".photo-area");
const resetButton = document.getElementById("resetButton");

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

/* Smooth animation */
function animate() {

    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;

    card.style.transform =
        `rotateX(${currentX}deg) rotateY(${currentY}deg)`;

    requestAnimationFrame(animate);
}

animate();

/* Mouse and touch movement */
area.addEventListener("pointermove", function(event) {

    const rect = area.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    targetY =
        ((x - centerX) / centerX) * 18;

    targetX =
        -((y - centerY) / centerY) * 18;

});

/* Return smoothly when leaving */
area.addEventListener("pointerleave", function() {

    targetX = 0;
    targetY = 0;

});

/* Reset button */
resetButton.addEventListener("click", function() {

    targetX = 0;
    targetY = 0;

});
