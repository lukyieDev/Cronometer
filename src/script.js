let tens = 00
let seconds = 00
let minutes = 00

let mili = document.querySelector('.tens')
let segundos = document.querySelector('.segundos')
let minutos = document.getElementById('minutos')

let start = document.getElementById('start-btn')
let stop = document.getElementById('stop-btn')
let reset = document.getElementById('btn-reset')
let contador = document.getElementById('contador')



let intervalo;

start.onclick = function(){
    clearInterval(intervalo)
    intervalo = setInterval(startTimer, 10)
}

contador.addEventListener('dblclick',function(){
    clearInterval(intervalo);
    intervalo = setInterval(startTimer, 10)
})

stop.onclick = function(){
    clearInterval(intervalo);
}

contador.addEventListener('click',function(){
    clearInterval(intervalo);
})

reset.onclick = function(){
    clearInterval(intervalo);
    tens = 00;
    seconds = 00;
    minutes = 00
    mili.innerHTML = tens
    segundos.innerHTML = seconds
    minutos.innerHTML = minutes
}


function startTimer(){
    tens++;

    if(tens <= 9){
        mili.innerHTML = "0" + tens
    }

    if(tens > 9){
        mili.innerHTML = tens
    }

    if(tens >= 99){
        seconds ++
        segundos.innerHTML = "0"+seconds
        tens = 0
        mili.innerHTML = "0"+tens

        if(seconds > 9){
            segundos.innerHTML = seconds
        }
    }
        if(seconds >= 60){
            minutes++
            minutos.innerHTML = "0" + minutes
            seconds = 0
            segundos.innerHTML = "0" + seconds

        }

        if(minutes > 9){
            minutos.innerHTML = seconds
        }

}
