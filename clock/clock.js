function startClock() {
            momentoActual = new Date()
            hora = momentoActual.getHours()
            minuto = momentoActual.getMinutes()
            segundo = momentoActual.getSeconds()

            horaImprimible = hora + " : " + minuto + " : " + segundo

            document.getElementById("clock").innerHTML = horaImprimible;

            setTimeout("startClock()", 1000)
        }