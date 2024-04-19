let buttons = "";
let num = 0;
let time = 7;
let hitno = 0;
let flag = 0;
let scor = 0;
bubble = () => {
    for (let i = 0; i < 126; i++) {
        num = Math.floor(Math.random() * 10);
        buttons += `<div class="btn">${num}</div>`
    }
    document.querySelector(".btm").innerHTML = buttons;
}

hit = () => {
    hitno = Math.floor(Math.random() * 10);
    document.getElementById("hval").textContent = hitno;
}

timer = () => {
    tim = setInterval(function () {
        if (time > 0) {
            time--;
            flag += 1;
            document.getElementById("time").textContent = time;
            if (time < 3) {
                if (time >= 1 && time < 2) {
                    timeSound();
                }
            }
        }

        else {
            clearInterval(tim);
            document.querySelector(".btm").innerHTML = `<h1 style="font-family: Arial, sans-serif; color: red; text-align: center;"><b>GAME OVER</b><br><b>Score: ${scor}</b></h1>`;
            document.querySelector("#hval") = 0;
        }

    }, 1000)
}

function score() {
    scor += 1;
    document.querySelector("#sval").textContent = scor;
}

let src = 0;

function playSound() {
    var play = new Audio('bubblebeam-41985.mp3');
    play.play();
}
function timeSound() {
    var alarming = new Audio('ticking-90432.mp3');
    alarming.play();
}
document.querySelector(".btm")
    .addEventListener("click", function (det) {
        src = Number(det.target.textContent);
        if ((src === hitno) && (flag < flag + 1)) {
            playSound();
            buttons = "";
            bubble();
            hit();
            time = 7;
            clearInterval(tim);
            timer();
            score();
        }
    })
bubble();
hit();
timer();

