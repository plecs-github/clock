function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    let time = (`${hour}:${min}:${sec}`);
    document.querySelector('.clock').innerHTML = time;
    setTimeout(showTime, 1000);
}

showTime();

