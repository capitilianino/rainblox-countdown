window.onload = function() {
    let countdownElement = document.getElementById("countdown");

    // Fixed end time (e.g., August 26, 2024, 12:00:00 UTC)
    let fixedEndTime = new Date(Date.UTC(2024, 7, 26, 12, 0, 0)).getTime();

    let interval = setInterval(function() {
        let now = new Date().getTime();
        let time = Math.floor((fixedEndTime - now) / 1000); // Time left in seconds

        if (time >= 0) {
            let hours = Math.floor(time / 3600);
            let minutes = Math.floor((time % 3600) / 60);
            let seconds = time % 60;

            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            countdownElement.innerHTML = `${hours}:${minutes}:${seconds}`;
        } else {
            clearInterval(interval);
            countdownElement.innerHTML = "Time's up!";
        }
    }, 1000);
};
