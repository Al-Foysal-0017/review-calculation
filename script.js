document.addEventListener("DOMContentLoaded", function () {
    const targetValues = [65, 75, 80]; // Set the target values for each progress bar
    const progressBarElements = [document.getElementById("progress1"), document.getElementById("progress2"), document.getElementById("progress3")];
    const progressValueElements = [document.getElementById("progressValue1"), document.getElementById("progressValue2"), document.getElementById("progressValue3")];

    const updateProgress = (index) => {
        let value = 0;
        const targetValue = targetValues[index];

        const interval = setInterval(() => {
            if (value >= targetValue) {
                clearInterval(interval);
            } else {
                value++;
                progressBarElements[index].style.width = `${value}%`;
                progressValueElements[index].innerText = value;
            }
        }, 10);
    };

    for (let i = 0; i < targetValues.length; i++) {
        updateProgress(i);
    }
});
