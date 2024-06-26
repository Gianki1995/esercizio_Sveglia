let timerButton = document.querySelector('button');
let timerNumber = document.getElementById('timer');
let showRing = document.getElementById('sveglia');
let audio = document.querySelector('audio');
let numTimer = 10



timerButton.addEventListener('click', countDownTimer);

function countDownTimer() {
    timerButton.removeEventListener('click', countDownTimer);
let textNode = timerNumber.firstChild;
textNode.nodeValue = numTimer;



    if (numTimer === 0) {
        setTimeout(ring,500)
    }else{
         setTimeout(countDownTimer, 1000);
        numTimer--;
    }


}


function ring() {
    audio.play();
    showRing.classList.add('visualizza-sveglia');
     setTimeout(() => {
            location.reload();
        }, 6000);
}


