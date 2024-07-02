//Get the current date
const now = new Date();

/*
    Select the element with id currentDay and display the current day name
*/
const displayDay = () => {
    const current_day = document.getElementById("currentDay");
    const options = { weekday: 'long'};
    const dayName = now.toLocaleDateString('en-US', options);
    current_day.innerHTML = dayName;
};

/*
    Select the element with the id currentTimeUTC and display the current time in UTC
*/

const displayTime = () => {
    const time_UTC = document.getElementById("currentTimeUTC");
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'UTC'
      };
      const utcTime = now.toLocaleTimeString('en-US', options);
    time_UTC.innerHTML = utcTime
};

displayDay();
displayTime();