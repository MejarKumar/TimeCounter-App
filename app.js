const birthdayDate= "1 July 2021"

const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")




function countdown()
{
    const newYearDate = new Date(birthdayDate);
    const currentYearDate = new Date();
     

const totoalSeconds = (newYearDate - currentYearDate)/1000;

const days = Math.floor(totoalSeconds/3600/24);
const hours = Math.floor(totoalSeconds/3600)%24;
const minutes = Math.floor(totoalSeconds/60)%60;
const seconds = Math.floor(totoalSeconds)%60;
    // console.log(days,hours,minutes,seconds);



daysEl.innerHTML =formatTime( days);
hoursEl.innerHTML = formatTime(hours);
minutesEl.innerHTML = formatTime(minutes);
secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time){
return time<10? `0${time}`: time;
}

// countdown();


setInterval(countdown,1000);


