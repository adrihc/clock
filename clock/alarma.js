const alarmTime = document.querySelector(".alarmTime"),
    optionHora = document.querySelector(".hora"),
    optionMinuto = document.querySelector(".minuto"),
    optionSegundo = document.querySelector(".segundo");

const selectHora = document.querySelector(".selectHora"),
    selectMinuto = document.querySelector(".selectMinuto"),
    selectSegundo = document.querySelector(".selectSegundo");

const alarmButton = document.querySelector(".alarmButton");
let defineAlarm, isAlarmSet,
    ringtone = new Audio("ringtone/ringtone.mp3"),
    setAlarmTone = new Audio("ringtone/activation.mp3")

for (let i = 23; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let newOptionHour = `<option value="${i}">${i}</option>`
    optionHora.insertAdjacentHTML("afterend", newOptionHour);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let newOptionMinute = `<option value="${i}">${i}</option>`
    optionMinuto.insertAdjacentHTML("afterend", newOptionMinute);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let newOptionSecond = `<option value="${i}">${i}</option>`
    optionSegundo.insertAdjacentHTML("afterend", newOptionSecond);
}

setInterval(() => {
        let date = new Date(),
            h = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();

        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;

        if (defineAlarm === `${h}:${m}:${s}`) {
            ringtone.play();
        }
    }
)


function setAlarma() {
    console.log(isAlarmSet)
    if (isAlarmSet == true) {
        setAlarmTone.play()
        const n = new Notification(`Alarma desactivada`)
        defineAlarm = "";
        alarmButton.innerText = "Fijar Alarma";
        return isAlarmSet = false;
    }

    let time = `${selectHora.value}:${selectMinuto.value}:${selectSegundo.value}`

    if (selectHora.value == "Hora" || selectMinuto.value == "Minutos" || selectSegundo.value == "Segundos") {
        return alert("Selecciona una hora vàlida per a configurar l'alarma!");
    } else {
        alarmTime.innerText = `${selectHora.value}:${selectMinuto.value}:${selectSegundo.value}`
        defineAlarm = time;
        isAlarmSet = true;
        setAlarmTone.play();
        const n = new Notification(`Alarma activada`)
        alarmButton.innerText = "Stop";
    }
}