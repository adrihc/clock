const stopwatch = document.querySelector(".stopwatch").innerHTML;
var hour = "0"+0,
minute = "0" +0,
seconds = "0" +0;
ms = "0" + 0;
var intervalStopwatch;
function startStopwatch(){
    intervalStopwatch = setInterval( function () {
        document.querySelector(".stopwatch").innerText= `${hour}:${minute}:${seconds}:${ms}`;
        ms++
        if(ms == 100){
        ms = 0
        
        seconds++;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        if(seconds == 60){
            console.log("minute")
            seconds = 00;
            minute++
            minute = minute < 10 ? "0" + minute : minute;
            if(minute == 60){
                console.log("hora")
            minute = 0;
            hour++
            hour = hour < 10 ? "0" + hour : hour;
            }
        }
        }
    }, 10);
}
function stopStopwatch(){
    clearInterval(intervalStopwatch);
}
function restartStopwatch(){
    hour = "0"+0;
    minute = "0" +0;
    seconds = "0" +0;
    ms = "0" +0;

document.querySelector(".stopwatch").innerText= `${hour}:${minute}:${seconds}:${ms}`;

}