const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
    // Using Date Object
    const now = new Date();

    //  For Seconds
    const seconds = now.getSeconds();
    const secondsDegree = (((seconds / 60) * 360) + 90); // Converting seconds in the degrees
    secondHand.style.transform = `rotate(${secondsDegree}deg)`
    
    // For Minutes
    const mins = now.getMinutes();
    const minutesDegree = (((mins / 60) * 360) + 90);
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

    //  For Hours
    const hours = now.getHours();
    const hoursDegree = (((hours / 12) * 360) + 90);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`

}

setInterval(setDate, 1000);
