const card = document.getElementById("photoCard");
const area = document.querySelector(".photo-area");
const resetButton = document.getElementById("resetButton");

function moveCard(x, y) {

    const rect = area.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateY =
        ((x - centerX) / (rect.width / 2)) * 25;

    const rotateX =
        -((y - centerY) / (rect.height / 2)) * 25;

    card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    card.style.boxShadow =
        `${-rotateY}px ${20 + rotateX}px 45px rgba(0, 0, 0, 0.7)`;
}

/* Mouse + touch */

area.addEventListener("pointermove", function (event) {

    moveCard(event.clientX, event.clientY);

});

/* Return to normal */

area.addEventListener("pointerleave", function () {

    resetCard();

});

/* Reset button */

resetButton.addEventListener("click", function () {

    resetCard();

});

function resetCard() {

    card.style.transform =
        "rotateX(0deg) rotateY(0deg)";

    card.style.boxShadow =
        "0 25px 50px rgba(0, 0, 0, 0.7)";
}
