/**
 * Code written by Linda Götenmark, 2024
 * Moment 1.1 Razor, MidSweden University
 * ligo2200@student.miun.se
 */

"use strict";

// function for counting down
function countDown() {
    // Set the target date (February 6, 2023 00:00:00)
    const targetDate = new Date(2024, 1, 6, 0, 0, 0).getTime(); 

    // Get the current date and time
    const currentDate = new Date().getTime();

    // Calculate the time remaining
    let timeRemaining = targetDate - currentDate;

    if (timeRemaining < 0) {
        // If the target date has passed, display this message
        document.getElementById("countdown").innerHTML = "<p> Nu är de här! <3</p>";
    } else {
        // Calculate days, hours, minutes, and seconds
        let daysLeft = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        let hoursLeft = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutesLeft = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let secondsLeft = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById("countdown").innerHTML = "<p>Det är " + daysLeft + " dagar, " +
            hoursLeft + " timmar, " + minutesLeft + " minuter, och " + secondsLeft + " sekunder kvar!</p>";
    }
}

// Update the countdown every second
setInterval(countDown, 1000);

// calling function
countDown();
