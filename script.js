// =====================================
// SELECT ELEMENTS
// =====================================

const ticksContainer = document.querySelector(".ticks");

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

// =====================================
// GENERATE 60 TICK MARKS
// =====================================

for (let i = 0; i < 60; i++) {

    const tick = document.createElement("div");

    // Every 5th tick = hour mark
    if (i % 5 === 0) {
        tick.classList.add("tick", "hour-mark");
    } else {
        tick.classList.add("tick", "minute-mark");
    }

    tick.style.transform = `rotate(${i * 6}deg)`;

    ticksContainer.appendChild(tick);
}

// =====================================
// CLOCK FUNCTION
// =====================================

function updateClock() {

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    /*
        Second Hand
        360° / 60 = 6° per second
    */
    const secondDegrees = seconds * 6;

    /*
        Minute Hand
        6° per minute
        + fractional movement from seconds
    */
    const minuteDegrees =
        (minutes * 6) +
        (seconds * 0.1);

    /*
        Hour Hand
        30° per hour
        + fractional movement from minutes
        + tiny contribution from seconds
    */
    const hourDegrees =
        ((hours % 12) * 30) +
        (minutes * 0.5) +
        (seconds * (0.5 / 60));

    // Apply Rotations

    secondHand.style.transform =
        `rotate(${secondDegrees}deg)`;

    minuteHand.style.transform =
        `rotate(${minuteDegrees}deg)`;

    hourHand.style.transform =
        `rotate(${hourDegrees}deg)`;
}

// Initial Render
updateClock();

// Update Every Second
setInterval(updateClock, 1000);
