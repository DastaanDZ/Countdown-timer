const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYear = '1 Jan 2022';

function countdown(){
    const newYearDate = new Date(newYear);
    
    const currentDate = new Date();
    
    const totalSeconds = (newYearDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);

    const hours = Math.floor(totalSeconds/3600) % 24;

    const minutes = Math.floor(totalSeconds/60)%60;

    const seconds = Math.floor(totalSeconds%60);

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minsEl.innerHTML = minutes
    secondsEl.innerHTML = seconds

    // console.log(days);
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);
    // console.log(totalSeconds);
    // console.log(newYearDate);
    // console.log(currentDate);

    // console.log(newYearDate - currentDate);
}

countdown();

setInterval(countdown,1000);

