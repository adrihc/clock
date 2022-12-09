const timerClock = document.querySelector(".timerClass");

const timerHora = document.querySelector(".horaDeTimer"),
    timerMinuto = document.querySelector(".minutoDeTimer"),
    timerSegundo = document.querySelector(".segundoDeTimer");

const selectTimerHora = document.querySelector(".timerHora"),
    selectTimerMinuto = document.querySelector(".timerMinuto"),
    selectTimerSegundo = document.querySelector(".timerSegundo");

const tButton = document.querySelector(".tButton");

var interval;
let isTimerSet, defineTimer, runningTimer;
ringtone = new Audio("ringtone/ringtone.mp3");
setTimerTone = new Audio("ringtone/activation.mp3")
for (let i = 23; i >= 0; i--) {

    let newOptionHour = `<option value="${i}">${i}</option>`
    timerHora.insertAdjacentHTML("afterend", newOptionHour);
}

for (let i = 59; i >= 0; i--) {

    let newOptionMinute = `<option value="${i}">${i}</option>`
    timerMinuto.insertAdjacentHTML("afterend", newOptionMinute);
}

for (let i = 59; i >= 0; i--) {

    let newOptionSecond = `<option value="${i}">${i}</option>`
    timerSegundo.insertAdjacentHTML("afterend", newOptionSecond);
}





function setTimer() {

    let timeTimer = `${selectTimerHora.value}:${selectTimerMinuto.value}:${selectTimerSegundo.value}`

    if (selectTimerHora.value == "Hora" || selectTimerMinuto.value == "Minutos" || selectTimerSegundo.value == "Segundos") {
        return alert("Selecciona un temporitzador vàlid!");
    } else {

        timerClock.innerText = `${selectTimerHora.value}:${selectTimerMinuto.value}:${selectTimerSegundo.value}`
        console.log(timerClock.value)
        defineTimer = timeTimer;
        if (isTimerSet == null || isTimerSet == false) {
            isTimerSet = true;
            tButton.innerText = "Apaga";
            
            interval =
                setInterval(function () {
                    if(selectTimerHora.value==0 && selectTimerMinuto.value == 0 && selectTimerSegundo.value > 0 && selectTimerSegundo.value <11){
                            setTimerTone.play()
                        }
                    if(selectTimerHora.value == 0 && selectTimerMinuto.value == 0 && selectTimerSegundo.value == 0){
                        ringtone.play();
                        const n = new Notification(`El teu temporitzador ha acabat`)
                        clearInterval(interval);
                    }
                    else if (selectTimerSegundo.value == 0) {
                        selectTimerSegundo.value = 59;
                        console.log(selectTimerMinuto.value)
                        if(selectTimerMinuto.value>0){
                        selectTimerMinuto.value--}
                        if (selectTimerMinuto.value == 0) {
                            selectTimerMinuto.value = 59;
                            if (selectTimerHora.value == 0) {
                                clearInterval(interval)
                            }
                            if(selectTimerHora.value>0){
                                selectTimerHora.value--
                            }
                                
                        }
                        
                    }
                    selectTimerSegundo.value--
                    if(selectTimerHora.value == 0 && selectTimerMinuto.value == 0 && selectTimerSegundo.value ==0){
                    selectTimerSegundo.value=0}
                    timerClock.innerText = `${selectTimerHora.value}:${selectTimerMinuto.value}:${selectTimerSegundo.value}`

                }, 1000)
        } else {
            clearInterval(interval)
            isTimerSet = false
            tButton.innerText = "Start";
        }
    }
}
