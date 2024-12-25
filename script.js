let outputSeconds = document.getElementById('seconds');
let outputTens = document.getElementById("milliseconds");

let seconds = 0;
let tens = 0;

let start = document.getElementById('btn1');
let stop = document.getElementById('btn2');
let reset = document.getElementById('btn3');

start.addEventListener("click", function() {
    setInterval(startTimer, 1000);
})

function startTimer() {
    tens ++;
    if(tens <= 9) {
        outputTens.innerHTML = '0' + tens;
    }

    if(tens > 9) {
        outputTens.innerHTML = tens;
    }

    if(tens > 99) {
        seconds ++;
        tens = 0;

        outputSeconds.innerHTML = '0' + seconds;
        outputTens.innerHTML = "0" + tens;
    }


    if(seconds > 9) {
        outputSeconds.innerHTML = seconds;
    }
}

function stopTimer() {

}

function restartTimer() {

}

