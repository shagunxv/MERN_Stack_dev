const EndDate = new Date("14 Sep, 2026 21:10:00").getTime();
const startDate = new Date().getTime();


let x = setInterval(function updatetimer() {

    const now = new Date().getTime();

    const distaceCovered = now - startDate;
    const distancePending = EndDate - now;

    const days = Math.floor(distancePending / (24*60*60*1000));
    const hrs = Math.floor((distancePending % (24*60*60*1000) / (60*60*1000)));
    const mins = Math.floor((distancePending%(60*60*1000)) / (60*1000));
    const secs = Math.floor((distancePending%(60*1000)) / (1000));

    document.querySelector('#days span').innerHTML = days;
    document.querySelector('#hours span').innerHTML = hrs;
    document.querySelector('#minutes span').innerHTML = mins;
    document.querySelector('#seconds span').innerHTML = secs;
    const totalDistance = EndDate - startDate;
    const percentageDistance = (distaceCovered/totalDistance)*100;

    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }


},1000);