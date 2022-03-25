/// Objective: 
// 
// Count the number of days until my birthday.
// The page must change every second. 
// 

// Selecting all of the items needed from the HTML
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// Defining the date wanted. 
const birthDate = "17 Oct 2022";

// Defining the function that will calculate the differences
const countDown = () => {
    // Initiallizing Date object with birthDate
    const dateWanted = new Date(birthDate);

    // Getting today's date.
    const currentDate = new Date();

    // Getting the difference (Note: the function returns in miliseconds.)
    const totalSecondsTillDate = (dateWanted - currentDate) / 1000;
    console.log(totalSecondsTillDate)

    // Converting to the right times

    const days = Math.floor(totalSecondsTillDate / 3600 / 24);
    // The total seconds divided by 3600 will give the number of hours. The division by 24 will give the number of days.

    const hours = Math.floor(totalSecondsTillDate / 3600) % 24;
    // The total seconds divided by 3600 will give the number of hours. The mod (%) 24 is to get the rest of the division by 24 and thus not count the number of days when doing the math.

    const mins = Math.floor(totalSecondsTillDate / 60) % 60;
    // The total seconds divided by 60 will give the number of minutes total. The mod (%) 60 is to get the rest of the division only, an thus ignore the days and hours. 

    const secs = Math.floor(totalSecondsTillDate) % 60;
    // Divide the whole thing by 60 and get the amount left. Which in turn gives the number of seconds left till the date.

    // Setting the up to date DOM.
    daysEl.innerText = days;
    hoursEl.innerText = formatTime(hours);
    minutesEl.innerText = formatTime(mins);
    secondsEl.innerText = formatTime(secs);

}


// Adding 0 to the time if it is less than 0. 
const formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time; // TERNARY OPERATOR
}

// Calling function
countDown();

// Call function every second. 
setInterval(countDown, 1000);
